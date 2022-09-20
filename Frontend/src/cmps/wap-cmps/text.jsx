import { useSelector, useDispatch } from 'react-redux'
import { setElement, updateDraft } from '../../store/draft/draft.action'
import React from 'react'


export const Text = ({ cmp, onEditElement, isPublished }) => {
    const { draft } = useSelector(state => state.draftModule)
    const dispatch = useDispatch()

    const handleChange = (ev) => {
        ev.preventDefault()
        const { innerText } = ev.target
        let copyCurrElement = { ...cmp }
        copyCurrElement = {
            ...copyCurrElement, info: { ...copyCurrElement?.info, value: innerText }
        }
        dispatch(updateDraft(draft, copyCurrElement))
        dispatch(setElement(copyCurrElement))
    }

    function handleEditElement(ev, cmp) {
        ev.preventDefault()
        ev.stopPropagation()
        onEditElement(cmp)
    }

    return (
        <React.Fragment>
            {!isPublished ? <section className="text">
                <h1
                    contentEditable
                    suppressContentEditableWarning
                    style={{ ...cmp?.styles }}
                    className={cmp.info.class}
                    onClick={(ev) => handleEditElement(ev, cmp)} onInput={handleChange}
                >{cmp.info.value}</h1>
            </section>
                :<section>
                        <h1
                    style={{ ...cmp?.styles }}
                    className={cmp.info.class}
                >{cmp.info.value}</h1>
                    </section>}
        </React.Fragment>
    )
}