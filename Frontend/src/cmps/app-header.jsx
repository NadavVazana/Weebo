import { useSelector } from 'react-redux'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

export const AppHeader = () => {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location.pathname.split('/'));
    let draftId
    let draft = useSelector(state => state.draftModule.draft)
    if (!draft) draftId = 'empty'
    else draftId = draft._id

    return (
        <section className="app-header">
            <Link to={'/'}>
                <h1 className='main-logo'>weebo<span className='dot'>.</span>
                    <span className='underline'></span>
                </h1>

            </Link>
            <nav className='app-header-nav'>
                <NavLink to="/templates">Templates</NavLink>
                <NavLink to={`/editor/${draftId}`}>Editor</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
            </nav>
            <div className='right-header-btns'>
                {location.pathname.split('/')[1] === 'editor' &&<button className='save-btn'>Save</button>}
                {location.pathname.split('/')[1] === 'editor' &&<button className='together-btn'>Work Together</button>}
                <button className='login-btn' onClick={() => { navigate('/login') }}>LOGIN</button>
            </div>
        </section>
    )
}