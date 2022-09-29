import { useSelector } from 'react-redux'
import { logoutUser, updateUser } from '../store/user/user.action'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getDraft, setDraft } from '../store/draft/draft.action'
import { useState } from 'react'
import { utilService } from '../services/util.service'
import { eventBusService, showSuccessMsg } from '../services/event-bus.service'
import { UserMsg } from './user-msg'
import { DesktopNav } from './desktop-nav'
import { MobileNav } from './mobile-nav'
import { siteService } from '../services/site-service'


export const AppHeader = () => {
    const navigate = useNavigate()
    const [isNameModal, setNameModal] = useState(false)
    const [isMenuOpen, setMenuOpen] = useState(false)
    const { loggedInUser } = useSelector(state => state.userModule)
    const [siteName, setSiteName] = useState('')
    const dispatch = useDispatch()
    let draftId
    let draft = useSelector(state => state.draftModule.draft)
    if (!draft) draftId = 'empty'
    else draftId = draft._id



    // Saves wap to user
    const saveWapToUser =async  (ev) => {
        ev.preventDefault()
        setNameModal(false)
        const name = ev.target[0].value
        const draft = dispatch(getDraft())
        draft.siteName = name
        draft.editCount = 0
        draft.viewCount = 0
        draft.usersData=[]
        draft.owner =loggedInUser._id
        var date = new Date()
        draft.createdAt = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        const user = loggedInUser
        
        // user.waps.push(draft)
        const site = await siteService.addSite(draft)
        console.log(site);
        


        

        // dispatch(updateUser(user))
        dispatch(setDraft(draft))
        showSuccessMsg(`New site has been saved!`)
        window.open(`/publish/${site._id}`, '_blank')
    }



    const handleInput = ({ target }) => {
        setSiteName(target.value)
    }

    // Save the edited site 
    const onSave =async () => {
        const draft = dispatch(getDraft())
        if (!draft.siteName)
            setNameModal(true)
        else {
            const user = loggedInUser
            // const wapIndex = user.waps.findIndex(wap => wap._id === draft._id)
            // user.waps[wapIndex] = draft
            const site = await siteService.updateSite(draft)
            dispatch(updateUser(user))
           
            showSuccessMsg(`Site has been saved!`)
        }
    }

    const onPublish =async  ()=>{
        const draft = dispatch(getDraft())
        draft.isPublished = true
        dispatch(setDraft(draft))
        
       setNameModal(true)
       
    }


    return (
        <section className={`app-header`}>
            {isNameModal && <section className='modal-section'>
                <div className='site-name-modal'>
                    <h1>Enter the name of your site:</h1>
                    <form onSubmit={saveWapToUser}>
                        <input autoFocus maxLength={10} value={siteName} required onChange={handleInput} type="text" placeholder='Enter the name here...' />
                        <button>Submit!</button>
                    </form>
                </div>
                <div onClick={() => setNameModal(false)} className='black-screen'></div>
            </section>}
            <Link to={'/'} onClick={() => { setMenuOpen(false) }}>
                <h1 className='main-logo'><span className='w'>W</span>eebo<span className='dot'>.</span>
                    <span className='underline'></span>
                </h1>
            </Link>
            <UserMsg />
            <DesktopNav
                onPublish={onPublish}
                loggedInUser={loggedInUser}
                dispatch={dispatch}
                logoutUser={logoutUser}
                draftId={draftId}
                onSave={onSave}
                setMenuOpen={setMenuOpen} />
            <MobileNav
            onPublish={onPublish}
                loggedInUser={loggedInUser}
                dispatch={dispatch}
                logoutUser={logoutUser}
                draftId={draftId}
                onSave={onSave}
                isMenuOpen={isMenuOpen}
                setMenuOpen={setMenuOpen} />

            <div className={`menu-btn ${isMenuOpen ? 'open' : 'close'}`} onClick={() => { setMenuOpen(!isMenuOpen) }}>
                <div className={`menu-btn-burger`}></div>
            </div>
        </section>
    )
}