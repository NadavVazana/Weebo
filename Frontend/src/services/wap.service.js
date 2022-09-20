import { storageService } from "./async-storage.service"
import { httpService } from "./http.service"
import {utilService} from './util.service'

export const wapService = {
    getWaps,
    getById,
    addWap,
    removeWap,
    editWap,
    getDraft,
    setDraft,
    updateDraft,
    removeElement,
    duplicateElement
}

const WAP = 'wap/'
const WAP_KEY = 'waps_DB'
const DRAFT_KEY = 'draft_DB'

async function getWaps(exampleId) {
    try {
        const waps = await httpService.get(WAP, exampleId)
        return waps
    } catch (err) {
        console.log('oops! could not fetch waps:', err)
    }
}

async function getById(wapId) {
    try {
        let wap = await httpService.get(WAP + wapId)
        return wap
    } catch (err) {
        console.log('oops! could not fetch wap:', err)
    }
}
function setDraft(wap) {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(wap))
}

function getDraft() {
    const draft = JSON.parse(localStorage.getItem(DRAFT_KEY))
    return draft

}


async function addWap(wap) {
    try {
        return await storageService.post(DRAFT_KEY, wap)

    } catch (err) {
        console.log('oops! could not fetch wap:', err)
    }
}

async function removeWap(wapId) {
    try {
        await storageService.remove(WAP_KEY, wapId)
        return wapId
    } catch (err) {
        console.log('oops! could not fetch wap:', err)
    }
}

async function editWap(editedWap) {
    try {
        let updatedWap = await storageService.put(WAP_KEY, editedWap)
        return updatedWap
    } catch (err) {
        console.log('oops! could not fetch wap:', err)
    }
}

function removeElement(draft, element) {
    let copyDraft = { ...draft }

    copyDraft.cmps = _removeById(draft.cmps, element.id)
    return copyDraft

}

function _removeById(arr, targetId) {
    return arr.reduce((acc, cmp) => {
        if (cmp.id === targetId) {
            return acc
        } else {
            return [...acc,
            {
                ...cmp,
                ...(cmp.cmps && { cmps: [..._removeById(cmp.cmps, targetId)] })
            }
            ]
        }
    }, [])
}

function duplicateElement(draft, element) {
    let copyDraft = { ...draft }

    copyDraft.cmps = _duplicateById(draft.cmps, element.id)
    return copyDraft

}

function _duplicateById(arr, targetId) {
    return arr.reduce((acc, cmp) => {

        if (cmp.id === targetId) {
            let copyCmp = { ...cmp }
            copyCmp.id = copyCmp.id + utilService.makeId()
            console.log('copyCmp', copyCmp);
            return [...acc, cmp, copyCmp]
        } else {
            return [...acc,
            {
                ...cmp,
                ...(cmp.cmps && { cmps: [..._duplicateById(cmp.cmps, targetId)] })
            }
            ]
        }
    }, [])
}

function updateDraft(draft, element) {
    let copyDraft = { ...draft }

    if (draft.cmps) {
        copyDraft.cmps = draft.cmps.map(cmp => {
            if (cmp.id === element.id) {
                return { ...element }
            } else {
                return updateDraft(cmp, element)
            }
            return cmp
        })

    }

    return copyDraft
}




