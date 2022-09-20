import { useState, useEffect } from "react"
import { EditElements } from './edit-elements/edit-elements'
import { ThemesList } from "./themes-list"
import { AddOptions } from "./add-options"
import { useSelector } from 'react-redux'


export const EditorNav = ({ addElement, setOptionList}) => {
    const [isMenu, setMenu] = useState(false)
    const [isOptionsMenu, setOptionsMenu] = useState({ isOpen: false, cmpType: null })
    const [isEditMenu, setEditMenu] = useState(false)
    const [isThemesMenu, setThemesMenu] = useState(false)
    const [activeOption, setActiveOption] = useState(null)
    const currElement = useSelector(state => state.draftModule.currElement)
    const cmpTypes = ['All', 'Headers', 'Galleries', 'Heroes', 'Maps', 'Footers', 'Cards', 'Missions', 'Forms']
    const [currentElement, setCurrentElement] = useState({})
    const _ = require('lodash')


    const toggleOptionsMenu = (cmp, event) => {
        if (!isOptionsMenu.cmpType) setOptionsMenu(prevState => ({ isOpen: !prevState.isOpen, cmpType: cmp }))
        else if (isOptionsMenu.cmpType === cmp) setOptionsMenu({ isOpen: false, cmpType: null })
        else setOptionsMenu({ isOpen: true, cmpType: cmp })
        if (isEditMenu) setEditMenu(false)
        if (cmp === activeOption) setActiveOption(null)
        else setActiveOption(cmp)
    }


    const toggleEditMenu = () => {
        if (currElement.id !== currentElement.id) {
            setEditMenu(true)
            
            return
        }
        setEditMenu(prevState => !prevState)
        if (isOptionsMenu.isOpen)
            setOptionsMenu({ cmpType: null, isOpen: false })
    }

    const toggleThemesMenu = () => {
        setThemesMenu(true)
        // setEditMenu(false)
        setOptionsMenu({ cmpType: null, isOpen: false })
    }

    // console.log('currElement:', !_.isEmpty(currElement))
    return (
        <section className="editor-nav">
            <div className="side-bar">
                <div>
                    <button className="edit-btn" onClick={() => { toggleEditMenu() }}>
                        <img src={require('../assets/img/icons/edit-icon.svg').default} alt="edit-icon" />
                        <span>Edit</span>
                    </button>


                    <button className="themes-btn" onClick={toggleThemesMenu}>
                        <img src={require('../assets/img/icons/themes-icon.svg').default} alt="themes-icon" />
                        <span>Themes</span>
                    </button>


                    <button onClick={() => { setMenu(!isMenu) }}>
                        <img src={require('../assets/img/icons/add-icon.svg').default} alt="add-icon" />
                        <span>Add</span>
                    </button>

                    {isMenu && <div  >
                        {cmpTypes.map(cmp => {
                            let cls
                            cls = cmp === activeOption ? 'active' : ''
                            return <h1 key={cmp} className={cls} onClick={(event) => { toggleOptionsMenu(cmp, event) }} >{cmp}</h1>
                        })}
                    </div>}
                </div>

            </div>
            <div className={`side-bar-actions ${(isOptionsMenu.isOpen || isEditMenu || isThemesMenu) ? 'open' : ''} `}>
                {isOptionsMenu.isOpen && !isEditMenu && <AddOptions setOptionList={setOptionList} addElement={addElement} isOptionsMenu={isOptionsMenu} />}
                {isEditMenu && <EditElements isEditMenu={isEditMenu} />}
                {isThemesMenu && <ThemesList />}
            </div>

        </section>
    )
}