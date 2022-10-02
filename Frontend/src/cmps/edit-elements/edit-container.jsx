import { Pallete } from './pallete'
import { useSelector, useDispatch } from 'react-redux'
import { setElement, updateDraft, getDraftFromHistory, setElementImage } from '../../store/draft/draft.action'
import { useRef } from 'react'

export const EditContainer = () => {
    const ref = useRef()
    const { currElement, draft } = useSelector(state => state.draftModule)
    const dispatch = useDispatch()
    const actions = ['Delete', 'Copy', 'Undo']
    const imageUrl = currElement?.styles?.backgroundImage ?
    currElement?.styles?.backgroundImage?.match(/\((.*?)\)/)[1].replace(/('|")/g, '') :
    currElement?.styles?.image


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

        let copyCurrElement = { ...currElement }
        dispatch(setElement(copyCurrElement))
        if (id === 'Undo') {
            dispatch(getDraftFromHistory())
        } else {
            dispatch(updateDraft(draft, copyCurrElement, id))
        }
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
            <div className="pallete-container underline">
                <span>Background Color</span>
                <Pallete onSelect={onSelectBackground} />
            </div>

            {/* Upload Image to Image Element */}
            <div className='edit-image'>
                <form id="form1" runat="server" className='edit-image'>
                    <span onClick={handleUploadImage}>Upload Image</span>
                    <input id="files" ref={ref} onChange={handleImage} type="file" />
                    {imageUrl && <div className='preview-image'>
                        <img src={imageUrl} alt={currElement.name} />
                    </div>}
                </form>
            </div>

            {/* element actions-delete, duplicate, undo */}
            <div className='space-between element-control'>
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
                        <span className={`${action.toLowerCase()}`}>{action}</span>
                    </div>)}
            </div>
        </section>
    )
}