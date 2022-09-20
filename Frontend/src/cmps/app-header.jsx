import { useSelector } from 'react-redux'
import { logoutUser, updateUser } from '../store/user/user.action'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getDraft } from '../store/draft/draft.action'
import { useState } from 'react'
import { utilService } from '../services/util.service'
import { eventBusService, showSuccessMsg } from '../services/event-bus.service'
import { UserMsg } from './user-msg'

export const AppHeader = () => {
    const [isNameModal, setNameModal] = useState(false)
    const { loggedInUser } = useSelector(state => state.userModule)
    const [siteName, setSiteName] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    let draftId
    let draft = useSelector(state => state.draftModule.draft)
    if (!draft) draftId = 'empty'
    else draftId = draft._id



    const saveWapToUser = (ev) => {
        ev.preventDefault()
        setNameModal(false)
        const name = ev.target[0].value
        const draft = dispatch(getDraft())
        draft.siteName = name
        draft.editCount = 0
        draft.viewCount = 0
        var date = new Date()
        draft.createdAt = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
        draft._id = utilService.makeId(15)
        const user = loggedInUser
        user.waps.push(draft)
        dispatch(updateUser(user))
        showSuccessMsg(`New site has been saved!`)
    }



    const handleInput = ({ target }) => {
        setSiteName(target.value)
    }

    const onSave = () =>{
        const draft = dispatch(getDraft())
        if(!draft.siteName)
        setNameModal(true)
        else{
            const user = loggedInUser
            const wapIndex = user.waps.findIndex(wap=> wap._id === draft._id)
            user.waps[wapIndex] = draft
            dispatch(updateUser(user))
            showSuccessMsg(`Site has been saved!`)

        }
        
    }



    return (

        <section className='app-header'>
            {isNameModal && <section className='modal-section'>
                <div className='site-name-modal'>
                    <h1>Enter the name of your site:</h1>
                    <form onSubmit={saveWapToUser}>
                        <input maxLength={14} value={siteName} required onChange={handleInput} type="text" placeholder='Enter the name here...' />
                        <button>Submit!</button>
                    </form>
                </div> <div onClick={()=>setNameModal(false)} className='black-screen'></div></section>}
            <Link to={'/'}>
                <h1 className='main-logo'>WEEBO<span className='dot'>.</span>
                    <span className='underline'></span>
                </h1>

            </Link>
            <nav className='app-header-nav'>
                <NavLink to="/templates">Templates</NavLink>
                <NavLink to={`/editor/${draftId}`}>Editor</NavLink>
                {loggedInUser && <NavLink to="/dashboard">Dashboard</NavLink>}
            </nav>
            <UserMsg />
            <div className='right-header-btns'>
                {(location.pathname.split('/')[1] === 'editor' && loggedInUser) && <button onClick={onSave} className='save-btn'>Save</button>}
                {(location.pathname.split('/')[1] === 'editor' && loggedInUser) && <button className='together-btn'>Work Together</button>}
                {!loggedInUser ? <button className='login-btn' onClick={() => { navigate('/login') }}>LOGIN</button>
                    : <button onClick={() => { dispatch(logoutUser()) }} className='login-btn'>LOGOUT <img className='logout-icon' src={require('../assets/img/icons/log-out-icon.svg').default} alt="logout-icon" /></button>}
            </div>
        </section>
    )
}