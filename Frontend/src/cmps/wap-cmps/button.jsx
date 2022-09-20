import { useSelector, useDispatch } from 'react-redux'
import { setElement, updateDraft } from '../../store/draft/draft.action'

export const Button = ({ cmp, onEditElement }) => {

    const { draft } = useSelector(state => state.draftModule)
    const dispatch = useDispatch()

    const handleChange = (ev) => {
        // ev.preventDefault()
        
        const { innerText } = ev.target
        let copyCurrElement = { ...cmp }
        copyCurrElement = {
            ...copyCurrElement, info: { ...copyCurrElement?.info, value: innerText }
        }
        dispatch(updateDraft(draft, copyCurrElement))
        dispatch(setElement(copyCurrElement))
    }

    function handleEditElement(ev, cmp) {
        ev.stopPropagation()
        // setClicked(true)
        onEditElement(cmp)
    }

    return (
        <section className={`${cmp.info.class}` } >
            <button className={`button`} 
                contentEditable
                suppressContentEditableWarning
                style={{ ...cmp?.styles }}
                onClick={(ev) => handleEditElement(ev,cmp)} onChange={handleChange}>
                    {cmp.info.value}
            </button>
        </section>
    )
}