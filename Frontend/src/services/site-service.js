import { httpService } from "./http.service"

export const siteService = {
    addSite,
    updateSite,
    getSitesByUserId,
    deleteSite
}

const SITE = 'site'
async function addSite(site){
    const newSite =  await httpService.post(SITE,site)
    return newSite
}


async function getSitesByUserId(filterBy){
    const sites= await httpService.get(`${SITE}`,filterBy)
    return sites
}

async function getSiteById(siteId){
    const site = await httpService.get(`${SITE}/${siteId}`)
}


async function updateSite(site){
      await httpService.put(SITE,site)
}

async function deleteSite(siteId){
    return await httpService.delete(`${SITE}/${siteId}`)
}