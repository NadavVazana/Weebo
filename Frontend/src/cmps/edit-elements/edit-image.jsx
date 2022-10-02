import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setElement, updateDraft, setElementImage, getDraftFromHistory } from '../../store/draft/draft.action'

export const EditImage = () => {
    const ref = useRef()
    const { currElement, draft, } = useSelector(state => state.draftModule)
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

        let copyCurrElement = { ...currElement }
        dispatch(setElement(copyCurrElement))
        if (id === 'Undo') {
            dispatch(getDraftFromHistory())
        } else {
            dispatch(updateDraft(draft, copyCurrElement, id))
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
            <div className='edit-image'>
                <form id="form1" runat="server" >
                    <span onClick={handleUploadImage}>Upload Image</span>
                    <input ref={ref} onChange={handleImage} type="file" />
                </form>

                <img src={image} alt={currElement.name} />


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