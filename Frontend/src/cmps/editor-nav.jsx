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
    const toggleEditMenu = () => {
        setEditMenu(!isEditMenu)
        setThemesMenu(false)
        setAddMenu(false)
        setOptionsMenu(!isOptionsMenu.isOpen)
        isEditToggle(false)
    }

    // toggle themes menu
    const toggleThemesMenu = () => {
        setEditMenu(false)
        setThemesMenu(!isThemesMenu)
        setAddMenu(false)
        setOptionsMenu(!isOptionsMenu.isOpen)
        isEditToggle(false)
    }

    // toggle add menu
    const toggleAddMenu = () => {
        setEditMenu(false)
        setThemesMenu(false)
        setAddMenu(!isAddMenu)
        isEditToggle(false)
    }

    return (
        <section className="editor-nav">
            <div className="side-bar">
                <div>
                    <button className={`add-btn ${isAddMenu && 'active'}`} onClick={toggleAddMenu}>
                        <img src={require('../assets/img/icons/add-icon.svg').default} alt="add-icon" />
                        <span>Add</span>
                    </button>
                    <button className={`edit-btn ${isEditMenu && 'active'}`} onClick={toggleEditMenu}>
                        <img src={require('../assets/img/icons/edit-icon.svg').default} alt="edit-icon" />
                        <span>Edit</span>
                    </button>

                    <button className={`themes-btn ${isThemesMenu && 'active'}`} onClick={toggleThemesMenu}>
                        <img src={require('../assets/img/icons/themes-icon.svg').default} alt="themes-icon" />
                        <span>Themes</span>
                    </button>

                </div>

            </div>
            <div className={`side-bar-actions ${((isEditMenu || isEdit) || isAddMenu || isThemesMenu ) ? 'open' : ''} `}>
                {(isEditMenu || isEdit) && <EditElements isEditMenu={isEditMenu} />}
                {isThemesMenu && !isEdit && <ThemesList />}
                {isAddMenu && !isEdit &&
                    <React.Fragment>
                    <AddAccordion setOptionList={setOptionList} key={'accordion'} setOptionsMenu={setOptionsMenu} toggleOptionsMenu={toggleOptionsMenu} addElement={addElement} isOptionsMenu={isOptionsMenu}  />

                    </React.Fragment>}
            </div>

        </section>
    )
}