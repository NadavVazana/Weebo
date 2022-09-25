import { storageService } from "./async-storage.service"
import { httpService } from "./http.service"
import { utilService } from './util.service'

export const wapService = {
    getWaps,
    getById,
    addWap,
    removeWap,
    editWap,
    getDraft,
    setDraft,
    updateDraft,
    updateDraftTheme, 
    uploadImage
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
        let updatedWap = await httpService.put(WAP, editedWap)
        console.log(updatedWap);
        return updatedWap
    } catch (err) {
        console.log('oops! could not fetch wap:', err)
    }
}

// Draft Service----------------------------------------------------------------------------------------

function setDraft(wap) {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(wap))
}

function getDraft() {
    const draft = JSON.parse(localStorage.getItem(DRAFT_KEY))
    return draft
}

// Update function
function updateDraft(draft, element, action) {
    let copyDraft = { ...draft }

    copyDraft.cmps = _updateById(draft.cmps, element, action)
    return copyDraft

}

// Update function
function _updateById(arr, element, action) {
    return arr.reduce((acc, cmp) => {
        if (cmp.id === element.id) {
            if (action === 'Delete') {
                return acc
            } else if (action === 'Copy') {
                let copyCmp = { ...cmp }
                copyCmp.id = copyCmp.id + utilService.makeId()
                return [...acc, cmp, copyCmp]
            } else {
                return [...acc, element]
            }
        } else {
            return [...acc,
            {
                ...cmp,
                ...(cmp.cmps && { cmps: [..._updateById(cmp.cmps, element, action)] })
            }
            ]
        }
    }, [])
}

function getCmpWithBackground(cmp, theme, index) {
    return {
        ...cmp, styles: { ...cmp?.styles, backgroundColor: theme.backgroundColor[index] }
    }
}


// Change Theme
function updateDraftTheme(draft, theme) {
    const copyDraft = getCmpWithBackground({ ...draft }, theme, 0)

    if (copyDraft.cmps) {
        copyDraft.cmps = copyDraft.cmps.map(cmp => {
            let copyCmp = { ...cmp }
            const backgroundNum = (cmp.name.includes('header') ||
                cmp.name.includes('footer')) && 1 ||
                cmp.name.includes('card') && 2

            if (backgroundNum) {
                copyCmp = getCmpWithBackground(copyCmp, theme, backgroundNum)
            }

            return { ...copyCmp }
        })

    }

    return copyDraft
}

function uploadImage(currElement, image){
    let copyCurrElement = { ...currElement }
    
    if (currElement.type === 'container') {
        let backgroundImage = `url(${image})`
        copyCurrElement = {
            ...copyCurrElement, styles: {...copyCurrElement?.styles, backgroundImage }
        }
    } else {
        copyCurrElement = {
            ...copyCurrElement, info: { ...copyCurrElement?.info, image }
        }
    }

    return copyCurrElement
}

