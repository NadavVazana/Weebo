import { useSelector, useDispatch } from 'react-redux'
import { setElement, updateDraft } from '../../store/draft/draft.action'
import React from 'react'

export const Button = ({ cmp, onEditElement ,isPublished}) => {

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
        onEditElement(cmp)
    }


    return (
        <React.Fragment>
                {/* EDIT MODE */}
        {!isPublished ? <section className={`${cmp.info.class}` } >
            <button className={`button clicked`} 
                contentEditable
                suppressContentEditableWarning
                style={{ ...cmp?.styles }}
                onClick={(ev) => handleEditElement(ev,cmp)} onChange={handleChange}>
                    {cmp.info.value}
            </button>
        </section> 
        // PUBLISHED MODE
        : <section className={`${cmp.info.class}`}>
            <button  className={`button-published`} 
                style={{ ...cmp?.styles }}
                >
                    {cmp.info.value}
            </button>
            </section>}
        </React.Fragment>
    )
}