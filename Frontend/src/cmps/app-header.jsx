import { useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const AppHeader = () => {
    const navigate = useNavigate()
    let draftId
    let draft = useSelector(state=> state.draftModule.draft)
    if(!draft) draftId = 'empty'
    else draftId = draft._id
    
    return (
        <section className="app-header">
            <Link to={'/'}><h1>WEEBO.</h1></Link>
            <nav className='app-header-nav'>
                <NavLink to="/templates">Templates</NavLink>
                <NavLink to={`/editor/${draftId}`}>Editor</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
            </nav>

            <button onClick={()=>{navigate('/login')}}>LOGIN</button>
        </section>
    )
}