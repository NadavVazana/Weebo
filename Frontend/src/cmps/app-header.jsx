import { useSelector } from 'react-redux'
import { logoutUser } from '../store/user/user.action'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export const AppHeader = () => {
    const {loggedInUser} = useSelector(state=> state.userModule)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    let draftId
    let draft = useSelector(state => state.draftModule.draft)
    if (!draft) draftId = 'empty'
    else draftId = draft._id

    return (
        <section className="app-header">
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
            <div className='right-header-btns'>
                {location.pathname.split('/')[1] === 'editor' &&<button className='save-btn'>Save</button>}
                {location.pathname.split('/')[1] === 'editor' &&<button className='together-btn'>Work Together</button>}
                {!loggedInUser ? <button className='login-btn' onClick={() => { navigate('/login') }}>LOGIN</button>
                : <button onClick={()=>{dispatch(logoutUser())}} className='login-btn'>LOGOUT</button>}
            </div>
        </section>
    )
}