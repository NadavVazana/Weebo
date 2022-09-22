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
    removeElement,
    duplicateElement,
    updateDraftTheme
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
        let updatedWap = await storageService.put(WAP_KEY, editedWap)
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

// Removing function
function removeElement(draft, element) {
    let copyDraft = { ...draft }

    copyDraft.cmps = _removeById(draft.cmps, element.id)
    return copyDraft

}

// Removing function
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

// Duplicating element
function duplicateElement(draft, element) {
    let copyDraft = { ...draft }

    copyDraft.cmps = _duplicateById(draft.cmps, element.id)
    return copyDraft

}

// Duplicating element function
function _duplicateById(arr, targetId) {
    return arr.reduce((acc, cmp) => {

        if (cmp.id === targetId) {
            let copyCmp = { ...cmp }
            copyCmp.id = copyCmp.id + utilService.makeId()
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

// Update draft
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


