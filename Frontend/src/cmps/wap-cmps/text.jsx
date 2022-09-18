import { useSelector, useDispatch } from 'react-redux'
import { setElement, updateDraft } from '../../store/draft/draft.action'

export const Text = ({ cmp, onEditElement }) => {
    const { draft } = useSelector(state => state.draftModule)
    const dispatch = useDispatch()


    const handleChange = (ev) => {
        const { innerText } = ev.target
        let copyCurrElement = { ...cmp }
        copyCurrElement = {
            ...copyCurrElement, info: { ...copyCurrElement?.info, value: innerText }
        }
        dispatch(updateDraft(draft, copyCurrElement))
        dispatch(setElement(copyCurrElement))
    }

    function handleEditElement(ev,cmp) {
        ev.stopPropagation()
        onEditElement(cmp)
    }

    return (
        <section className="text">
            <h1 
                contentEditable
                suppressContentEditableWarning
                style={{ ...cmp?.styles }}
                className={cmp.info.class}
                onClick={(ev) => handleEditElement(ev,cmp)} onInput={handleChange}
            >{cmp.info.value}</h1>
        </section>
    )
}