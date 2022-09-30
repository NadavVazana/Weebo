import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { DynamicCmp } from "../cmps/dynamic-cmp"
import { showSuccessMsg } from "../services/event-bus.service"
import { siteService } from "../services/site-service"
import { socketService } from "../services/socket.service"

export const Publish=()=>{
    const {siteId} = useParams()
    const [site,setSite]= useState()
    useEffect(()=>{
        loadSite()
    },[])
   const loadSite=async ()=>{
    const site = await siteService.getSitesByUserId({siteId})
    site[0].viewCount++
    socketService.emit('increase-view-to-site',site)
    setSite(site[0])

   }



   if(!site) return
    return (
        <section>
            {site.cmps.map(cmp=><DynamicCmp key={cmp.id} cmp={cmp} isPublished={true}/>)}
            
        </section>
    )
}