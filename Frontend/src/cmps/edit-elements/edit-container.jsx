import { Pallete } from './pallete'
import { useSelector, useDispatch } from 'react-redux'
import { setElement, updateDraft, setDraft, setDuplicate, duplicateElement, setElementImage } from '../../store/draft/draft.action'
import { useRef } from 'react'

export const EditContainer = () => {
    const ref = useRef()
    const { currElement, draft, duplicate } = useSelector(state => state.draftModule)
    const dispatch = useDispatch()
    const textControls = ['Delete', 'Copy', 'Undo']


    // Selecting background
    const onSelectBackground = (ev) => {
        const backgroundColor = ev.target.id
        let copyCurrElement = { ...currElement }
        copyCurrElement = {
            ...copyCurrElement, styles: { ...copyCurrElement?.styles, backgroundColor }
        }
        dispatch(setElement(copyCurrElement))
        dispatch(updateDraft(draft, copyCurrElement))
    }

    // Toggle text actions - delete, duplicate, undo
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

    // Delete element
    const removeElement = () => {
        let copyCurrElement = { ...currElement }
        dispatch(setElement(copyCurrElement))
        dispatch(updateDraft(draft, copyCurrElement, true))
    }

    // duplicate element
    const copyElement = () => {
        let copyCurrElement = { ...currElement }
        dispatch(setElement(copyCurrElement))
        dispatch(duplicateElement(draft, copyCurrElement))
    }

    // upload image
    const handleImage = (ev) => {
        dispatch(setElementImage(ev))
    }

    function handleUploadImage() {
        ref.current.click()
    }

    return (

        <section className="edit-elements">

            {/* Pallete Background color */}
            <div className="pallete-container">
                <span>Backgroud Color</span>
                <Pallete onSelect={onSelectBackground} />
            </div>

            {/* Upload Image */}
            <form id="form1" runat="server" className='edit-image'>
                <span onClick={handleUploadImage}>Upload Image</span>
                <input id="files" ref={ref} onChange={handleImage} type="file" />
            </form>

            {/* Element Controller - Delete, Duplicate, Undo */}
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