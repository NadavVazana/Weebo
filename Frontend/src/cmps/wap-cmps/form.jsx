import { useState } from "react"
import { useParams } from "react-router-dom"
import { userService } from "../../services/user.service"
import { wapService } from "../../services/wap.service"
import { updateUser } from "../../store/user/user.action"
import { useDispatch } from "react-redux"
import { eventBusService, showSuccessMsg } from "../../services/event-bus.service"
import { UserMsg } from "../user-msg"
import { socketService } from "../../services/socket.service"
import { siteService } from "../../services/site-service"
import { utilService } from '../../services/util.service'

export const Form = ({ cmp, isPublished, isPreview }) => {
    const [details, setDetails] = useState({})
    const params = useParams()
    const dispatch = useDispatch()
    const handleChange = (ev) => {
        if (isPreview) return
        const value = ev.target.value
        const field = ev.target.name

        setDetails(prevState => ({ ...prevState, [field]: value }))
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault()
<<<<<<< HEAD
        console.log(details);
        if (isPreview) return
        const site = await siteService.getSitesByUserId({ siteId: params.siteId })
=======
        if(isPreview) return
        const site = await siteService.getSitesByUserId({siteId:params.siteId})
>>>>>>> 63544432c317b87a69dac966c550b0b11c1d4ab1
        site[0].usersData.push(details)
        socketService.emit('add-contact-details', { details: details, siteId: site[0]._id })
        await siteService.updateSite(site[0])




    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                {Object.values(cmp.info).map(input => {
                    return (
                        input.tag === 'input' ?
                            <input key={cmp.id + utilService.makeId()} className={input.name} name={input.name} onChange={handleChange} type={input.type} placeholder={input.placeholder} />
                            : <textarea key={cmp.id + utilService.makeId()} name={input.name} onChange={handleChange} placeholder={input.placeholder}></textarea>)



                })}
                <button type="submit">Submit</button>
                <UserMsg />

            </form>

        </section>
    )
}

// {
    // dfgbkjndfvkfn: {value: 'fsdfdsf', name:'email address'}
// }

// info:{
//    'input1': {type:'input', placeholder:'fdsfsdv'}
//     {type:'input', placeholder:'fdsfsdv'}
//     {type:'input', placeholder:'fdsfsdv'}
//     {type:'input', placeholder:'fdsfsdv'}
//     {type:'input', placeholder:'fdsfsdv'}
//     {type:'input', placeholder:'fdsfsdv'}
// }