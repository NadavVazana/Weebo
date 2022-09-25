import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setElement, updateDraft, setDraft, setDuplicate, setElementImage } from '../../store/draft/draft.action'

export const EditImage = () => {
    const ref = useRef()
    const { currElement, draft, duplicate } = useSelector(state => state.draftModule)
    const dispatch = useDispatch()
    const actions = ['Delete', 'Copy', 'Undo']
    let image = ''

    // upload Image
    const handleImage = (ev) => {
        let copyCurrElement = { ...currElement }
        copyCurrElement = dispatch(setElementImage(ev))
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

    function handleUploadImage() {
        ref.current.click()
    }

    image = (currElement?.info?.image?.slice(0, 4) === 'http') ? currElement.info.image : require(`../../assets/img/${currElement.info.image}`)
    if (!currElement?.info?.image) return

    // console.log('imageeee',image)

    return (
        <section className="edit-elements">

            {/* Upload Image to Image Element */}
            <div className='edit-image underline'>
                <form id="form1" runat="server" className='edit-image'>
                    <span onClick={handleUploadImage}>Upload Image</span>
                    <input ref={ref} onChange={handleImage} type="file" />
                </form>
                <div className='preview-image'>
                    <img src={image} alt={currElement.name} />
                </div>

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