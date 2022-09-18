import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { setDraft } from "../../store/draft/draft.action"
import { setElement } from "../../store/draft/draft.action"
export const EditContainer = () =>{
    const {draft,currElement} = useSelector(state=> state.draftModule)
    const dispatch = useDispatch()
    

    const removeCmp=()=>{
        const deleteIndex = draft.cmps.findIndex(cmp=> cmp.id === currElement.id)
        if(deleteIndex === -1) return
        draft.cmps.splice(deleteIndex,1)
        dispatch(setDraft(draft))
        dispatch(setElement({type:''}))

    }

    return (

        <section className="edit-container">
            <h1>{currElement.name}</h1>
            <button onClick={removeCmp}> <img className="trash-icon" src={require('../../assets/img/icons/trash-icon.svg').default} alt="publish-icon" /></button>
        </section>
    )
}