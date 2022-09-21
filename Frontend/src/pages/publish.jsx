import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { DynamicCmp } from "../cmps/dynamic-cmp"

export const Publish=()=>{
    const {loggedInUser} = useSelector(state=> state.userModule)
    const {siteId} = useParams()
    const site = loggedInUser.waps.find(wap=> wap._id === siteId)




    return (
        <section>
            {site.cmps.map(cmp=><DynamicCmp key={cmp.id} cmp={cmp} isPublished={true}/>)}
            
        </section>
    )
}