import React, { useState } from "react"
import { EditElements } from './edit-elements/edit-elements'
import { ThemesList } from "./themes-list"
import { AddOptions } from "./add-options"
import { AddAccordion } from "./accordion"


export const EditorNav = ({ addElement, setOptionList, isEdit, isEditToggle }) => {
    const _ = require('lodash')
    const [isEditMenu, setEditMenu] = useState(false)
    const [isThemesMenu, setThemesMenu] = useState(false)
    const [isAddMenu, setAddMenu] = useState(false)
    const [isOptionsMenu, setOptionsMenu] = useState({ isOpen: false, cmpType: null })
    const [activeOption, setActiveOption] = useState(null)

    // toggle options menu
    const toggleOptionsMenu = (event, cmp) => {

        if (!isOptionsMenu.cmpType) setOptionsMenu(prevState => ({ isOpen: !prevState.isOpen, cmpType: cmp }))
        else setOptionsMenu({ isOpen: true, cmpType: cmp })

        if (cmp === activeOption) setActiveOption(null)
        else setActiveOption(cmp)
    }

    // toggle edit menu
    const openEditMenu = () => {
        setEditMenu(true)
        setThemesMenu(false)
        setAddMenu(false)
        setOptionsMenu(false)
        isEditToggle(false)
    }

    // toggle themes
    const openThemesMenu = () => {
        setEditMenu(false)
        setThemesMenu(true)
        setAddMenu(false)
        setOptionsMenu(false)
        isEditToggle(false)
    }

    // toggle add menu
    const openAddMenu = () => {
        setEditMenu(false)
        setThemesMenu(false)
        setAddMenu(true)
        isEditToggle(false)
    }

    const closeSideBar = () => {
        setEditMenu(false)
        setThemesMenu(false)
        setAddMenu(false)
        setOptionsMenu(false)
        isEditToggle(false)
    }

    return (
        <section className="editor-nav">
            <div className="side-bar">
                {/* <div className="side-bar-buttons"> */}
                <button className={`add-btn ${isAddMenu && !isEdit && 'active'}`} onClick={openAddMenu}>
                    <img className={`add-img`} src={require('../assets/img/icons/add-icon.svg').default} alt="add-icon" />
                    <span>Add</span>
                </button>
                <button className={`themes-btn ${isThemesMenu && !isEdit && 'active'}`} onClick={openThemesMenu}>
                    <img className={`themes-img`} src={require('../assets/img/icons/themes-icon.svg').default} alt="themes-icon" />
                    <span>Themes</span>
                </button>
                <button className={`edit-btn ${(isEditMenu || isEdit) && 'active'}`} onClick={openEditMenu}>
                    <img className={`edit-img`} src={require('../assets/img/icons/edit-icon.svg').default} alt="edit-icon" />
                    <span>Edit</span>
                </button>
                {/* </div> */}
            </div>
            <div className={`side-bar-actions ${((isEditMenu || isEdit) || isAddMenu || isThemesMenu) ? 'open' : ''} `}>
                <div className={`side-bar-header`}>
                    <span>
                        {(!(isEditMenu || isEdit) && !isThemesMenu && isAddMenu && `Add Something!`) ||
                            (!isAddMenu && !(isEditMenu || isEdit) && isThemesMenu && `Choose your theme`) ||
                            (!isThemesMenu && !isAddMenu && (isEdit || isEditMenu) && `Edit your website`) || 'Edit your website'}
                    </span>
                </div>
                {(isEditMenu || isEdit) && <EditElements />}
                {isThemesMenu && !isEdit && <ThemesList />}
                {isAddMenu && !isEdit &&
                    <div className="add-options">
                        <AddAccordion setOptionList={setOptionList} key={'accordion'} setOptionsMenu={setOptionsMenu} toggleOptionsMenu={toggleOptionsMenu} addElement={addElement} isOptionsMenu={isOptionsMenu} />
                    </div>}
            </div>
            {((isEditMenu || isEdit) || isAddMenu || isThemesMenu) &&
                <div className={`side-bar-close`}>
                    <button onClick={closeSideBar} className={`side-bar-close-narrow`}>
                        <img className="close-img" src={require('../assets/img/icons/left-arrow.svg').default} alt="" />
                    </button>
                    <button onClick={closeSideBar} className={`side-bar-close-mobile`}>
                        <img className="close-img" src={require('../assets/img/icons/down-icon.svg').default} alt="" />
                    </button>
                </div>}
        </section >
    )
}