
import { NavLink, useNavigate, useLocation } from 'react-router-dom'


export const DesktopNav = ({ loggedInUser, dispatch, logoutUser, draftId, onSave, setMenuOpen ,onPublish}) => {
    const navigate = useNavigate()
    const location = useLocation()


    let isUserInEditor = location.pathname.split('/')[1] === 'editor' && loggedInUser
    return (
        <nav className='desktop-nav'>
            <nav className={`app-header-nav`} >
                <NavLink to="/templates">Templates</NavLink>
                <NavLink to={`/editor/${draftId}`}>Editor</NavLink>
                {loggedInUser && <NavLink to="/dashboard">Dashboard</NavLink>}
            </nav>
            <div className={`right-header-btns`}>
                {isUserInEditor  && <button onClick={onPublish} className='publish-btn'>Publish!</button>}
                {isUserInEditor&& <button onClick={onSave} className='save-btn'>Save</button>}
                {isUserInEditor  && <button className='together-btn'>Work Together</button>}
                {!loggedInUser ? <button className='login-btn' onClick={() => { navigate('/login') }}>LOGIN</button>
                    : <button onClick={() => { dispatch(logoutUser()) }} className='login-btn'>LOGOUT <img className='logout-icon' src={require('../assets/img/icons/log-out-icon.svg').default} alt="logout-icon" /></button>}
            </div>
        </nav>
    )
}