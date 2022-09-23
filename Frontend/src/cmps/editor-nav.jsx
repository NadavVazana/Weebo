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
                <div>
                    <button className={`add-btn ${isAddMenu && 'active'}`} onClick={openAddMenu}>
                        <img src={require('../assets/img/icons/add-icon.svg').default} alt="add-icon" />
                        <span>Add</span>
                    </button>
                    <button className={`edit-btn ${isEditMenu && 'active'}`} onClick={openEditMenu}>
                        <img src={require('../assets/img/icons/edit-icon.svg').default} alt="edit-icon" />
                        <span>Edit</span>
                    </button>

                    <button className={`themes-btn ${isThemesMenu && 'active'}`} onClick={openThemesMenu}>
                        <img src={require('../assets/img/icons/themes-icon.svg').default} alt="themes-icon" />
                        <span>Themes</span>
                    </button>

                </div>

            </div>
            <div className={`side-bar-actions ${((isEditMenu || isEdit) || isAddMenu || isThemesMenu) ? 'open' : ''} `}>

                {(isEditMenu || isEdit) && <EditElements />}
                {isThemesMenu && !isEdit && <ThemesList />}
                {isAddMenu && !isEdit &&
                    <React.Fragment>
                        <AddAccordion setOptionList={setOptionList} key={'accordion'} setOptionsMenu={setOptionsMenu} toggleOptionsMenu={toggleOptionsMenu} addElement={addElement} isOptionsMenu={isOptionsMenu} />

                    </React.Fragment>}
            </div>
            {((isEditMenu || isEdit) || isAddMenu || isThemesMenu) && <div className={`side-bar-close`}>

                <button onClick={closeSideBar} >
                    <img src={require('../assets/img/icons/less-than.svg').default} alt="" />
                </button>
            </div>}
        </section >
    )
}