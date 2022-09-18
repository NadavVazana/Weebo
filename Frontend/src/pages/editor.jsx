import { DynamicCmp } from '../cmps/dynamic-cmp'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { header1 as Header, hero1 as Hero, footer1 as Footer, map1 as Map, gallery1 as Gallery, card1 as Card, mission1 as Mission, form1 as Form } from "../assets/wap"
import { EditorNav } from '../cmps/editor-nav'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { wapService } from '../services/wap.service'
import { setDraft, getDraft } from '../store/draft/draft.action'
import { loadWap } from '../store/wap/wap.action'
import { setElement } from '../store/draft/draft.action'
import { useSelector } from 'react-redux'
import { utilService } from '../services/util.service'

export const Editor = () => {
    const navigate = useNavigate()
    const cmps = { 'Gallery': Gallery, 'Header': Header, 'Footer': Footer, 'Hero': Hero, 'Map': Map, 'Mission': Mission, 'Card': Card, 'Form': Form }
    let { exampleId } = useParams()
    let { draft } = useSelector(state => state.draftModule)
    const dispatch = useDispatch()
    const [optionList, setOptionList] = useState({})

    const addElement = (cmp) => {

        draft.cmps.push(cmps[cmp])
    }

    useEffect(() => {
        if (!draft || draft._id === 'empty' || draft._id !== exampleId) draft = null
        if (!draft) {

            dispatch(loadWap(exampleId)).then(wap => {
                dispatch(setDraft(wap))
            })
        }
        else {
            dispatch(setDraft(draft))
        }
    }, [])


    const onEditElement = (clickedElement) => {
        dispatch(setElement(clickedElement))
    }


    const handleOnDragEnd = (result) => {
        const newItems = Array.from(draft.cmps)
        if (result.source.droppableId !== 'editor') {
            newItems.splice(result.destination.index, 0, optionList[result.draggableId])
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
        dispatch(setDraft(draft))
    }


    if (!draft) return <section></section>
    return (
        <section className='editor'>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <EditorNav setOptionList={setOptionList} addElement={addElement} />
                <Droppable droppableId='editor'>
                    {(provided) => {
                        return (
                            <section className='wap' {...provided.droppableProps} ref={provided.innerRef}>
                                {!draft.cmps?.length ? (
                                    <section>
                                        <h2>Lets start!</h2>
                                    </section>
                                ) : (
                                    draft.cmps.map((cmp, index) => (
                                        <Draggable key={cmp.id + index} draggableId={cmp.id + index} index={index}>
                                            {(provided) => (
                                                <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                                                    <DynamicCmp cmp={cmp} onEditElement={onEditElement} />
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