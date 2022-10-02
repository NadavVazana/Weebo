import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { SubscribersTable } from "../cmps/subscribers-table"
// import { PublishChart } from "../cmps/publish-chart"
import { eventBusService, showSuccessMsg } from "../services/event-bus.service"
import { siteService } from "../services/site-service"
import { socketService } from "../services/socket.service"
import { userService } from "../services/user.service"
import { setDraft } from "../store/draft/draft.action"
import { updateUser } from "../store/user/user.action"
import { utilService } from "../services/util.service"
import { ViewsChart } from "../cmps/view-chart"
import { SubscribersChart } from "../cmps/subscribers-chart"

export const Dashboard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { loggedInUser } = useSelector(state => state.userModule)
    const [deleteModal, setDeleteModal] = useState(false)
    const [sites, setSites] = useState()
    const [site, setSite] = useState(null)
    const [siteMenu, setSiteMenu] = useState(false)
    const [details, setDetails] = useState({})
    const useForceUpdate=()=>{
        const [forceValue,setForce] = useState()
        return ()=> setForce(!forceValue)

    }
    const handleForce = useForceUpdate()
    useEffect(() => {

        loadSites()
        socketService.on('update-contact-list', updateDetails)
        socketService.on('increase-views-on-dashboard', updateViews)



    }, [])
    useEffect(() => {
        if (!site) return
        socketService.emit('set-up-socket-site', site._id)


    }, [site])

    const updateDetails = async ({ details, siteId }) => {
        const site = await siteService.getSitesByUserId({ siteId })
        setSite(site[0])



    }

    const updateViews = (site) => {
        setSite(site)
    }



    const loadSites = async () => {
        const sites = await siteService.getSitesByUserId({ owner: loggedInUser._id })
        setSites(sites)
        if (!site) {
            setSite(sites[0])
        }
    }


    if (!loggedInUser) {
        navigate('/')
        return <></>
    }


    // NAVIGATES TO THE SITE'S EDIT PAGE
    const onEdit = async () => {
        await siteService.updateSite(site)
        console.log(site._id);
        navigate(`/editor/${site._id}`)
    }



    const onDeleteClick= async ()=>{
        if(!site.isPublished) setDeleteModal(true)
        else {
            site.isPublished = false
            await siteService.updateSite(site)
            handleForce()
            showSuccessMsg('Site has been unpublished!')

        }

    }





    // DELETE THE SITE FROM THE USER'S WAP LIST
    const onDelete = async (ev) => {
        ev.preventDefault()
        const name = ev.target[0].value
        if (name === site.siteName) {
            setDeleteModal(false)
            const currSiteIndex = sites.findIndex(currSite => currSite._id === site._id)
            if (currSiteIndex === 0) setSite(sites[currSiteIndex + 1])
            else setSite(sites[currSiteIndex - 1])
            await siteService.deleteSite(site._id)
            loadSites()

            showSuccessMsg('Website has been deleted!')
        }
    }

    const onSiteClick = (wap) => {
        setSite(wap)
        setSiteMenu(false)
    }

    // PUBLISH THE SITE IF NOT PUBLISH 
    // AND NAVIGATES TO THE PUBLISHED VERSION IS PUBLISHED
    const onPublish = async () => {
        if (site.isPublished) window.open(`/publish/${site._id}`, '_blank')
        else {
            const newSite = sites.find(currSite => site._id === currSite._id)
            newSite.isPublished = true
            await siteService.updateSite(newSite)
            loadSites()

            showSuccessMsg('Website has been published!')
        }
    }
    if (!loggedInUser) return
    if (!site) return <section className="no-sites"><h1 >No sites to show...</h1> <button onClick={() => { navigate('/templates') }}>Let's build some!</button></section>
    return (
        <section className="dashboard-page">

            {/* DELETE MODAL */}
            {deleteModal && <div className="delete-modal-container">
                <div onClick={() => setDeleteModal(false)} className="black-screen"></div>
                <div className="delete-modal">
                    <h1>To delete the website, Write <span>"{site.siteName}"</span> in the text field and submit:</h1>
                    <form onSubmit={onDelete}><input autoFocus maxLength={14} type="text" placeholder="Website name here..." /> <button>Delete</button></form>
                </div>
            </div>}


            {/* LIST OF THE SITES */}

            <div className={siteMenu ? 'site-menu-open' : 'sites-nav'}>
                <h1 className="list-title">My Sites</h1>
                <ul className="site-list">
                    {sites.map(wap => {
                        return <div key={wap._id} className="list-item"> <img src={require('../assets/img/icons/website-icon.svg').default} alt="website-icon" /> <li onClick={() => onSiteClick(wap)} key={wap._id} className={wap._id}>{wap.siteName}</li></div>
                    })}
                </ul>
            </div>
            {siteMenu && <div onClick={() => { setSiteMenu(false) }} className="black-screen"></div>}
            <img onClick={() => { setSiteMenu(true) }} className="hamburger" src={require('../assets/img/icons/hamburger.png')} alt="hamburger-icon" />


            {/* MAIN VIEW OF THE DASHBOARD (LEFT SIDE) */}
            <section className="main-dashboard">
                <p className="header">Welcome back, {loggedInUser.username}</p>

                <div className="dashboard-header">
                    <div className="publish-title-container">
                        {site.isPublished ? <img className="published-icon" src={require(`../assets/img/icons/published-icon.svg`).default} alt="publish-icon" />
                            : <img className="not-published-icon" src={require(`../assets/img/icons/not-published-icon.svg`).default} alt="publish-icon" />}
                        <h1 className={site.isPublished ? 'published-title' : 'not-published-title'}>{`This website is ${site.isPublished ? `published` : `not published`}`}</h1>
                    </div>
                    <div className="action-btns">
                        <button onClick={onPublish} className="btn visit-btn">{site.isPublished ? 'Visit' : 'Publish'}</button>
                        <button onClick={() => { onEdit() }} className="btn edit-btn">Edit</button>
   
                    </div>
                </div>

                {/* DETAILS SQUARES  */}
                <div className="details-grid">
                    <div className="site-dtl site-name">
                        <img className="dtl-img" src={require('../assets/img/icons/dash-website-icon.svg').default} alt="website-icon" />
                        <h1 className="title">Website name</h1>
                        <h1 className="website-name">{site.siteName}</h1>
                        <div className="divider"></div>
                    </div>

                    {/* SITE CREATION DATE */}
                    <div className="site-dtl site-creation-date">
                        <img className="dtl-img" src={require('../assets/img/icons/dash-calendar-icon.svg').default} alt="calendar-icon" />
                        <h1 className="title">Creation date</h1>
                        <div className="divider"></div>
                        <h1 className="detail-line"><span className="detail">{site.createdAt}</span></h1>
                    </div>

                    {/* VIEW COUNT */}
                    <div className="site-dtl site-views">
                        <img className="dtl-img" src={require('../assets/img/icons/dash-views-icon.svg').default} alt="views-icon" />
                        <h1 className="title">Views</h1>
                        <div className="divider"></div>
                        <h1 className="detail-line"><span className="detail">{site.viewCount} </span>
                            
                        </h1>

                    </div>

                    {/* Subscriber count */}
                    <div className="site-dtl site-subscriber-count">
                        <img className="dtl-img" src={require('../assets/img/icons/dashboard-sub-icon.png')} alt="calendar-icon" />
                        <h1 className="title">Subscribers</h1>
                        <div className="divider"></div>
                        <h1 className="detail-line"><span className="detail">{site.usersData.length} </span> </h1>
                    </div>


                    {/* USER SUBSCRIBERS LIST
                    <table className="subscribers">
                        {site.usersData.map(contact => {
                            return <tbody className='contact-details'>
                                {Object.keys(contact).map(key => {
                                    return <th key={contact[key]}> <span className="details-key"> {key}</span> : {contact[key]}</th>
                                })}
                            </tbody>
                        })}
                    </table> */}
                    <section className="table-subscribers" style={{ padding: '20px' }}>
                        <h4>Subscription List</h4>

                        {site.usersData.length > 0 ?
                            <SubscribersTable subscribers={site.usersData} />
                            : <h2>No Subscribers Yet!</h2>}
                    </section>
                    <section className="views-subs-ratio">
                        <p className="title">
                            Subscribers | Views Ratio
                        </p>
                        <p className="detail">
                            {site.usersData.length === 0 ? '0.00%' : `${((site.usersData.length / site.viewCount) * 100).toFixed(2)}%`}
                        </p>

                    </section>

                    <section className="chart-views" style={{ padding: '20px' }}>
                        <ViewsChart />
                    </section>
                    <section className="chart-subscribers" style={{ padding: '20px' }}>
                        <SubscribersChart />
                    </section>
                    <div className=" delete-container">
                    <button  onClick={() => { onDeleteClick() }}  className="btn delete-btn">{!site.isPublished ? 'Delete website' : 'Unpublish'}</button>
                    </div>

                </div>


            </section>
        </section>
    )
}