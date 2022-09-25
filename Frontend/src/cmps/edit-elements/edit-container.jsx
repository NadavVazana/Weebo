import { Pallete } from './pallete'
import { useSelector, useDispatch } from 'react-redux'
import { setElement, updateDraft, setDraft, setDuplicate, setElementImage } from '../../store/draft/draft.action'
import { useRef } from 'react'

export const EditContainer = () => {
    const ref = useRef()
    const { currElement, draft, duplicate } = useSelector(state => state.draftModule)
    const dispatch = useDispatch()
    const actions = ['Delete', 'Copy', 'Undo']
    let imageUrl = ''


    // Selecting background
    const onSelectBackground = (ev) => {
        const backgroundColor = ev.target.id
        let copyCurrElement = { ...currElement }
        const background = backgroundColor
        copyCurrElement = {
            ...copyCurrElement, styles: { ...copyCurrElement?.styles, backgroundColor, background }
        }
        dispatch(setElement(copyCurrElement))
        dispatch(updateDraft(draft, copyCurrElement))
    }

    // Toggle actions
    const toggleActions = (ev) => {
        const { id } = ev.target

        const copyDuplicate = { ...draft }
        dispatch(setDuplicate(copyDuplicate))

        let copyCurrElement = { ...currElement }
        dispatch(setElement(copyCurrElement))

        switch (id) {
            case 'Delete':
                dispatch(updateDraft(draft, copyCurrElement, id))
                break
            case 'Copy':
                dispatch(updateDraft(draft, copyCurrElement, id))
                break
            case 'Undo':
                dispatch(setDraft(duplicate))
                break
            default:
                break
        }
    }

    // upload image
    const handleImage = (ev) => {
        dispatch(setElementImage(ev))
    }

    function handleUploadImage() {
        ref.current.click()
    }

    imageUrl = currElement?.styles?.backgroundImage?.match(/\((.*?)\)/)[1].replace(/('|")/g, '')
    
    return (
        <section className="edit-elements">

            {/* Pallete Background color */}
            <div className="pallete-container underline">
                <span>Backgroud Color</span>
                <Pallete onSelect={onSelectBackground} />
            </div>

            {/* Upload Image to Image Element */}
            <div className='edit-image underline'>
                <form id="form1" runat="server" className='edit-image'>
                    <span onClick={handleUploadImage}>Upload Image</span>
                    <input id="files" ref={ref} onChange={handleImage} type="file" />
                    {imageUrl && <div className='preview-image'>
                        <img src={imageUrl} alt={currElement.name} />
                    </div>}
                </form>
            </div>

            {/* element actions-delete, duplicate, undo */}
            <div className='element-control'>
                {actions.map(action =>
                    <div
                        className='element-control-container'
                        id={`${action}`}
                        onClick={toggleActions}
                        key={`${action}div`}>
                        <img key={action}
                            id={`${action}`}
                            src={require(`../../assets/img/icons/${action}-icon.svg`)}
                            alt={`${action}`} />
                        {action}
                    </div>)}
            </div>
        </section>
    )
}