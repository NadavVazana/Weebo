import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setElement, updateDraft, duplicateElement, setDraft, setDuplicate, setElementImage } from '../../store/draft/draft.action'

export const EditImage = () => {
    const ref = useRef()
    const { currElement, draft, duplicate } = useSelector(state => state.draftModule)
    const dispatch = useDispatch()
    const textControls = ['Delete', 'Copy', 'Undo']

    // upload Image
    const handleImage = (ev) =>{
        dispatch(setElementImage(ev))
    }

    // Toggle text
    const toggleTextControl = (ev) => {
        const { id } = ev.target

        const copyDuplicate = { ...draft }
        dispatch(setDuplicate(copyDuplicate))

        switch (id) {
            case 'Delete':
                removeElement()
                break
            case 'Copy':
                copyElement()
                break
            case 'Undo':
                dispatch(setDraft(duplicate))
                break
            default:
                break
        }
    }

    // Removing elements
    const removeElement = () => {
        let copyCurrElement = { ...currElement }
        dispatch(setElement(copyCurrElement))
        dispatch(updateDraft(draft, copyCurrElement, true))
    }

    // Duplicate elements
    const copyElement = () => {
        let copyCurrElement = { ...currElement }
        dispatch(setElement(copyCurrElement))
        dispatch(duplicateElement(draft, copyCurrElement))
    }

    function handleUploadImage() {
        ref.current.click()
    }

    return (
        <section className="edit-elements">

            {/* Upload Image to Image Element */}
            <div className='edit-image'>
                <form id="form1" runat="server" className='edit-image'>
                <span onClick={handleUploadImage}>Upload Image</span>
                    <input ref={ref} onChange={handleImage} type="file" />
                </form>
            </div>

            {/* Control elements - delete, duplicate, undo */}
            <div className='element-control'>
                {textControls.map(textControl =>
                    <div
                        className='element-control-container'
                        id={`${textControl}`}
                        onClick={toggleTextControl}
                        key={`${textControl}div`}>
                        <img key={textControl}
                            id={`${textControl}`}
                            src={require(`../../assets/img/icons/${textControl}-icon.svg`)}
                            alt={`${textControl}`} />
                        {textControl}
                    </div>)}
            </div>
        </section>
    )
}