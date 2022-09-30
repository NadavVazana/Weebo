import { useSelector, useDispatch } from 'react-redux'
import { setElement, updateDraft } from '../../store/draft/draft.action'
import React from 'react'


export const Text = ({ cmp, onEditElement, isPublished }) => {
    const { draft, currElement } = useSelector(state => state.draftModule)
    const dispatch = useDispatch()

    function placeCaretAtEnd(el) {
        el.focus()
        if (typeof window.getSelection != "undefined"
                && typeof document.createRange != "undefined") {
            var range = document.createRange();
            range.selectNodeContents(el);
            range.collapse(false);
            var sel = window.getSelection();
            console.log('range',range);
            sel.removeAllRanges()
            sel.addRange(range)
        } else if (typeof document.body.createTextRange != "undefined") {
            var textRange = document.body.createTextRange()
            textRange.moveToElementText(el)
            textRange.collapse(false)
            textRange.select()
        }
    }
    const handleChange = (ev) => {
        const { innerText } = ev.target
        console.log('evcc',ev);
        console.log('evevev', ev.target.innerText);
        console.log('ewrgrewg',cmp.info);
        let copyCurrElement = { ...cmp }
        const value= ev.target.innerText
        copyCurrElement = {
            ...copyCurrElement, info: { ...copyCurrElement?.info, value }
        }
        console.log('copyCurrElement',copyCurrElement);
        dispatch(updateDraft(draft, copyCurrElement))
        dispatch(setElement(copyCurrElement))
        placeCaretAtEnd(ev.target)
    }

    function handleEditElement(ev, cmp) {
        // ev.preventDefault()
        ev.stopPropagation()
        onEditElement(cmp)
    }

    return (
        <React.Fragment>
            {/* EDIT MODE */}
            {!isPublished ? <section className={`text ${cmp.id === currElement?.id ? 'focus' : ''}`}>
                <h1
                    contentEditable
                    suppressContentEditableWarning
                    style={{ ...cmp?.styles }}
                    className={`${cmp.info.class} `}
                    onInput={handleChange}
                    onClick={(ev) => handleEditElement(ev, cmp)} 
                >{cmp.info.value||''}</h1>
            </section>
                // PUBLISH MODE
                : <section>
                    <h1
                        //    onBlur={handleChange}
                        style={{ ...cmp?.styles }}
                        className={cmp.info.class}
                    >{cmp.info.value}</h1>
                </section>}
        </React.Fragment>
    )
}