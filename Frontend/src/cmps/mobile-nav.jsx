import { NavLink, useNavigate, useLocation } from 'react-router-dom'

export const MobileNav = ({ loggedInUser, dispatch, logoutUser, draftId, onSave, isMenuOpen, setMenuOpen,onPublish }) => {
    const navigate = useNavigate()
    const location = useLocation()

    const closeMenu = () => {
        setMenuOpen(false)
    }

    let isUserInEditor = location.pathname.split('/')[1] === 'editor'
    return (
        
        <nav className={`mobile-nav ${isMenuOpen ? 'mobile-open' : ''}`}>
            <nav className={`app-header-nav`} >
                <NavLink onClick={onPublish}>Publish</NavLink>
                <NavLink to="/templates" onClick={closeMenu}>Templates</NavLink>
                <NavLink to={`/editor/${draftId}`} onClick={closeMenu}>Editor</NavLink>
                {loggedInUser && <NavLink to="/dashboard" onClick={closeMenu}>Dashboard</NavLink>}
            </nav>
            <div className={`right-header-btns`}>
                {isUserInEditor && <button onClick={onSave} className='save-btn'>Save</button>}
                {isUserInEditor && <button className='together-btn' onClick={closeMenu}>Work Together</button>}
                {!loggedInUser ?
                    <button className='login-btn' onClick={() => { navigate('/login'); closeMenu() }}>LOGIN</button>
                    : <button onClick={() => { dispatch(logoutUser()); setMenuOpen(false) }}
                        className='login-btn'>Logout
                        <img className='logout-icon' src={require('../assets/img/icons/log-out-icon.svg').default} alt="logout-icon" />
                    </button>}
            </div>
        </nav>
    )
}