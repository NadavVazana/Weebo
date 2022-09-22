import React, { useState } from "react"
import { EditElements } from './edit-elements/edit-elements'
import { ThemesList } from "./themes-list"
import { AddOptions } from "./add-options"


export const EditorNav = ({ addElement, setOptionList, isEdit, isEditToggle }) => {
    const _ = require('lodash')
    const [isEditMenu, setEditMenu] = useState(false)
    const [isThemesMenu, setThemesMenu] = useState(false)
    const [isAddMenu, setAddMenu] = useState(false)
    const [isOptionsMenu, setOptionsMenu] = useState({ isOpen: false, cmpType: null })
    const [activeOption, setActiveOption] = useState(null)
    const cmpTypes = ['All', 'Headers', 'Galleries', 'Heroes', 'Maps', 'Footers', 'Cards', 'Missions', 'Forms']

    // toggle options menu
    const toggleOptionsMenu = (event, cmp) => {
        if (!isOptionsMenu.cmpType) setOptionsMenu(prevState => ({ isOpen: !prevState.isOpen, cmpType: cmp }))
        else if (isOptionsMenu.cmpType === cmp) setOptionsMenu({ isOpen: false, cmpType: null })
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

    const closeSideBar = () =>{
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
                    <button className={`edit-btn ${isEditMenu && 'active'}`} onClick={openEditMenu}>
                        <img src={require('../assets/img/icons/edit-icon.svg').default} alt="edit-icon" />
                        <span>Edit</span>
                    </button>

                    <button className={`themes-btn ${isThemesMenu && 'active'}`} onClick={openThemesMenu}>
                        <img src={require('../assets/img/icons/themes-icon.svg').default} alt="themes-icon" />
                        <span>Themes</span>
                    </button>

                    <button className={`add-btn ${isAddMenu && 'active'}`} onClick={openAddMenu}>
                        <img src={require('../assets/img/icons/add-icon.svg').default} alt="add-icon" />
                        <span>Add</span>
                    </button>
                </div>

            </div>
            <div className={`side-bar-actions ${((isEditMenu || isEdit) || isAddMenu || isThemesMenu || isOptionsMenu.isOpen) ? 'open' : ''} `}>
                <button onClick={closeSideBar}>Close Edit Menu</button>
                {(isEditMenu || isEdit) && <EditElements/>}
                {isThemesMenu && !isEdit && <ThemesList />}
                {isAddMenu && !isEdit &&
                    <React.Fragment>{cmpTypes.map(cmp => {
                        let cls = cmp === activeOption ? 'active' : ''
                        return <h1 key={cmp} className={cls} onClick={(event) => { toggleOptionsMenu(event, cmp) }} >{cmp}</h1>
                    })}
                    </React.Fragment>}
                {isOptionsMenu.isOpen && <AddOptions setOptionList={setOptionList} addElement={addElement} isOptionsMenu={isOptionsMenu} />}
            </div>

        </section>
    )
}