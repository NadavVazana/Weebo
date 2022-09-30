import { DynamicCmp } from '../cmps/dynamic-cmp'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { header1 as Header, hero1 as Hero, footer1 as Footer, map1 as Map, gallery1 as Gallery, card1 as Card, mission1 as Mission, form1 as Form } from "../assets/wap"
import { EditorNav } from '../cmps/editor-nav'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setDraft } from '../store/draft/draft.action'
import { loadWap } from '../store/wap/wap.action'
import { setElement } from '../store/draft/draft.action'
import { useSelector } from 'react-redux'
import { utilService } from '../services/util.service'
import { socketService, SOCKET_MOUSE_MOVE } from '../services/socket.service'
import { Mouse } from '../cmps/mouse'
import { userService } from '../services/user.service'
// import { wapExample5 } from '../assets/templates'


export const Editor = () => {
    const navigate = useNavigate()
    let { exampleId } = useParams()
    let { draft } = useSelector(state => state.draftModule)
    const {loggedInUser} = useSelector(state=> state.userModule)
    const dispatch = useDispatch()
    const [optionList, setOptionList] = useState({})
    const [isEdit, setIsEdit] = useState(false)
    const cmps = { 'Gallery': Gallery, 'Header': Header, 'Footer': Footer, 'Hero': Hero, 'Map': Map, 'Mission': Mission, 'Card': Card, 'Form': Form }
    const addElement = (cmp) => {
        draft.cmp.push(cmps[cmp])
    }

    useEffect(() => {
        socketService.on('draft-updated',draftUpdated)
        dispatch(setElement(null))
        if (!draft || draft._id === 'empty' || draft._id !== exampleId) {
            dispatch(setElement(null))
            dispatch(loadWap(exampleId)).then(wap => {
                dispatch(setDraft(wap))
            })
        } else {
            dispatch(setDraft(draft))
        }
    }, [])

    const onMouseMove = (ev)=>{
        socketService.emit(SOCKET_MOUSE_MOVE,{x:ev.pageX,y:ev.pageY})
    }

    const draftUpdated = (draft)=>{
        dispatch(setDraft(draft))
    }



  


    const onEditElement = (clickedElement, ev) => {

        dispatch(setElement(clickedElement))
        setIsEdit(true)
    }

    const isEditToggle = (isEdit) => {
        setIsEdit(isEdit)
    }

    // handle dropping and adding mini-cmps to the wap
    const handleOnDragEnd = (result) => {
        const newItems = Array.from(draft.cmps)
        if (result.source.droppableId !== 'editor') {
            let cmp = { ...optionList[result.draggableId] }
            cmp.id = utilService.makeId(15)
            newItems.splice(result.destination.index, 0, cmp)
        }
        else {
            const [reorderedItem] = newItems.splice(result.source.index, 1)
            newItems.splice(result.destination.index, 0, reorderedItem)
        }
        draft.cmps = [...newItems]

        if (draft._id === 'empty') {
            navigate('/editor/draft')
            draft._id = 'draft'
        }
        socketService.emit('change_draft',draft)

        dispatch(setDraft(draft))
    }

    function getStyles(snapshot) {
        return {
            backgroundColor: draft.styles?.backgroundColor ? draft.styles?.backgroundColor :
                snapshot.isDraggingOver ? '#6161c5' : 'white'
        }

    }
    if (!draft) return <section></section>
    return (
        <section onMouseMove={onMouseMove}  className='editor'>
            {/* {Object.values(userMice).map(pos=>{
                return <Mouse  pos={pos}  />
            })} */}
            <Mouse />
            
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <EditorNav setOptionList={setOptionList} addElement={addElement} isEdit={isEdit} isEditToggle={isEditToggle} />
                <Droppable droppableId='editor'>
                    {(provided, snapshot) => {

                        return (
                            <section
                                className={`wap ${draft.name ? draft.name : ''}`}
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={getStyles(snapshot)}>
                                {!draft.cmps?.length ? (
                                    <section>
                                        <h1 className='guide-title'>Let's learn how to do it!</h1>
                                        <div className='guide-video-container'>
                                            <video className='guide' style={{ border: 'none' }} autoPlay loop src={require('../assets/img/guide.mp4')}></video>
                                        </div>

                                    </section>
                                ) : (
                                    draft.cmps.map((cmp, index) => (
                                        <Draggable key={cmp.id + index} draggableId={cmp.id + index} index={index}>
                                            {(provided) => (
                                                <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                                                    <DynamicCmp cmp={cmp} isPublished={false} onEditElement={onEditElement} />
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))
                                )}
                                {provided.placeholder}
                            </section>
                        )
                    }}
                </Droppable>
            </DragDropContext>
        </section>
    )
}