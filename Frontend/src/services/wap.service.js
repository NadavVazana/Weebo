import { storageService } from "./async-storage.service"
import { httpService } from "./http.service"
import { socketService } from "./socket.service"
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
    uploadImage,
    setDraftHistory,
    changeDraftHistory, 
}

const WAP = 'wap/'
const WAP_KEY = 'waps_DB'
const DRAFT_KEY = 'draft_DB'
const DRAFT_HISTORY = 'history_DB'


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


function setDraftHistory(draft, draftHistory) {
    const copyDraftHistory = [...draftHistory]
    copyDraftHistory.push(draft)
    return copyDraftHistory
}

function changeDraftHistory(draftHistory) {
    let copyDraftHistory = [...draftHistory]
    copyDraftHistory.pop()
    return copyDraftHistory
}

// Update function
function updateDraft(draft, element, action) {
    const copyDraft = { ...draft }

    copyDraft.cmps = _updateById(draft.cmps, element, action)
    socketService.emit('change_draft',copyDraft)
    return copyDraft

}

function _updateById(arr, element, action) {
    return arr.reduce((acc, cmp) => {
        if (cmp.id === element.id) {
            if (action === 'Delete') {
                return acc
            } else if (action === 'Copy') {
                let copyCmp = { ...cmp }
                copyCmp.id = utilService.makeId()
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


function getCmpWithStyles(cmp, theme, index) {
    return {
        ...cmp, styles: {
            ...cmp?.styles,
            background: theme.backgroundColor[index],
            backgroundColor: theme.backgroundColor[index],
            fontFamily: theme.fontFamily,
        }
    }
}


// Change Theme
function updateDraftTheme(draft, theme) {
    const copyDraft = getCmpWithStyles({ ...draft }, theme, 0)

    if (copyDraft.cmps) {
        copyDraft.cmps = copyDraft.cmps.map(cmp => {
            let copyCmp = { ...cmp }
            const backgroundNum = (cmp.name.includes('footer') ||
                cmp.name.includes('header') || cmp.name.includes('map')) && 3 ||
                (cmp.name.includes('form') || cmp.name.includes('gallery')) && 1 ||
                (!cmp.styles?.backgroundImage && cmp.name.includes('hero') || cmp.name.includes('card')) && 2

            if (backgroundNum) {
                copyCmp = getCmpWithStyles(copyCmp, theme, backgroundNum)
            }
            
            return { ...copyCmp }
        })

    }
    socketService.emit('change_draft',copyDraft)
    return copyDraft
}

function uploadImage(currElement, image) {
    let copyCurrElement = { ...currElement }

    if (currElement.type === 'container') {
        const backgroundImage = `url(${image})`
        const backgroundRepeat = `no-repeat`
        const backgroundSize = `cover`
        const backgroundPosition= `center`
        copyCurrElement = {
            ...copyCurrElement, styles: { ...copyCurrElement?.styles, backgroundImage, backgroundRepeat, backgroundSize, backgroundPosition }
        }
    } else {
        copyCurrElement = {
            ...copyCurrElement, info: { ...copyCurrElement?.info, image }
        }
    }

    return copyCurrElement
}

