import { useSelector, useDispatch } from 'react-redux'
import { setElement } from '../../store/draft/draft.action'

export const Text = ({ cmp, onEditElement }) => {

    const { currElement } = useSelector(state => state.draftModule)
    const dispatch = useDispatch()

    const handleChange = (ev) => {
        const {innerText} = ev.target

        const copyCurrElement = {...currElement}
        copyCurrElement.info.value = innerText
        dispatch(setElement(copyCurrElement))
    }
    return (
        <section className="text">
            <h1 contentEditable
                suppressContentEditableWarning
                style={{ ...cmp.info?.styles }}
                className={cmp.info.class}
                onClick={(event) => onEditElement(cmp,event)}
                onInput={handleChange}
            >{cmp.info.value}</h1>
        </section>
    )
}


