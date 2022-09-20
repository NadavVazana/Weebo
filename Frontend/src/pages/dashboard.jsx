import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { showSuccessMsg } from "../services/event-bus.service"
import { setDraft } from "../store/draft/draft.action"
import { updateUser } from "../store/user/user.action"

export const Dashboard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { loggedInUser } = useSelector(state => state.userModule)
    const [deleteModal, setDeleteModal] = useState(false)
    const [site, setSite] = useState(loggedInUser?.waps[0])


    if (!loggedInUser) {
        navigate('/')
        return <></>}
    

    const onEdit = () => {
        site.editCount++
        dispatch(setDraft(site))
        navigate(`/editor/${site._id}`)
    }

    const onDelete = (ev) => {
        ev.preventDefault()
        const name = ev.target[0].value
        if (name === site.siteName) {
            setDeleteModal(false)
            const user = loggedInUser
            const wapIndex = user.waps.findIndex(wap => wap._id === site._id)
            user.waps.splice(wapIndex, 1)
            dispatch(updateUser(user))
            showSuccessMsg('Website has been deleted!')

        }

    }

    const onPublish=()=>{
        if(site.isPublished) window.open(`/publish/${site._id}`,'_blank')
        else {
            let user = loggedInUser
            let siteIndex = loggedInUser.waps.findIndex(wap => wap._id === site._id)
            let newSite = loggedInUser.waps[siteIndex]
            newSite.isPublished = true
            user.waps.splice(siteIndex,1,newSite)
            dispatch(updateUser(user))
            setSite(newSite)
            showSuccessMsg('Website has been published!')
        }
    }
    if(!loggedInUser) return
    if (!site) return <section className="no-sites"><h1 >No sites to show...</h1> <button onClick={() => { navigate('/templates') }}>Let's build some!</button></section>
    return (
        <section className="dashboard-page">
            {deleteModal && <div className="delete-modal-container">
                <div onClick={() => setDeleteModal(false)} className="black-screen"></div>
                <div className="delete-modal">
                    <h1>To delete the website, Write "{site.siteName}" in the text field and submit:</h1>
                    <form onSubmit={onDelete}><input maxLength={14} type="text" placeholder="Website name here..." /> <button>Delete</button></form>
                </div>
            </div>}
            <div className="sites-nav">
                <h1 className="list-title">My Sites</h1>
                <ul className="site-list">
                    {loggedInUser.waps.map(wap => {
                        return <div key={wap._id} className="list-item"> <img src={require('../assets/img/icons/website-icon.svg').default} alt="website-icon" /> <li onClick={() => setSite(wap)} key={wap._id} className={wap._id}>{wap.siteName}</li></div>
                    })}
                </ul>

            </div>
            <div className="action-btns">
                <button  onClick={onPublish} className="visit-btn">{site.isPublished ? 'Visit' : 'Publish'}</button>
                <button onClick={() => { onEdit() }} className="edit-btn">Edit</button>
                <button onClick={() => { setDeleteModal(true) }} className="delete-btn">Delete website</button>
            </div>
            <div className="details-grid">
                <div className="site-name">
                    <h1>{site.siteName}</h1>
                    <h1>Website name</h1>
                    <img src={require('../assets/img/icons/dash-website-icon.svg').default} alt="website-icon" />
                </div>
                <div className="site-edits">

                    <h1>      {site.editCount}</h1>
                    <h1>Edit count</h1>
                    <img src={require('../assets/img/icons/dash-edit-icon.svg').default} alt="edit-icon" />
                </div>
                <div className="site-views">
                    <h1>{site.viewCount}</h1>
                    <h1>Views count</h1>
                    <img src={require('../assets/img/icons/dash-views-icon.svg').default} alt="views-icon" />

                </div>
                <div className="site-creation-date">
                    <h1>{site.createdAt}</h1>
                    <h1>Website creation date</h1>
                    <img src={require('../assets/img/icons/dash-calendar-icon.svg').default} alt="calendar-icon" />

                </div>
            </div>
        </section>
    )
}