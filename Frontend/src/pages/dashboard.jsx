import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export const Dashboard = () => {
    const navigate = useNavigate()
    const {loggedInUser} = useSelector(state=> state.userModule)
    if(!loggedInUser) {
        navigate('/')
        return
    }


    return (
        <section className="dashboard-page">
        <h1 className="title">Dashboard</h1>
        </section>
    )
}