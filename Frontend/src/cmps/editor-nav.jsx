import { useState } from "react"
import { EditElements } from './edit-elements/edit-elements'
import { ThemesList } from "./themes-list"
import { AddOptions } from "./add-options"
import { useSelector } from 'react-redux'
import { NavLink } from "react-router-dom"

export const EditorNav = ({ addElement,setOptionList }) => {

    // const { wap } = useSelector(state => state.wapModule)
    const [isMenu, setMenu] = useState(false)
    
    const [isOptionsMenu, setOptionsMenu] = useState({ isOpen: false, cmpType: null })
    const [isEditMenu, setEditMenu] = useState(false)
    const [isThemesMenu, setThemesMenu] = useState(false)

    const cmpTypes = ['Headers', 'Galleries', 'Heroes', 'Maps', 'Footers', 'Cards', 'Missions', 'Forms']

    const toggleOptionsMenu = (cmp) => {
        if (!isOptionsMenu.cmpType) setOptionsMenu(prevState => ({ isOpen: !prevState.isOpen, cmpType: cmp }))
        else if (isOptionsMenu.cmpType === cmp) setOptionsMenu({ isOpen: false, cmpType: null })
        else setOptionsMenu({ isOpen: true, cmpType: cmp })
        if (isEditMenu)
            setEditMenu(false)
    }

    const toggleEditMenu = () => {
        setEditMenu(prevState => !prevState)
        if (isOptionsMenu.isOpen)
            setOptionsMenu({ cmpType: null, isOpen: false })
    }

    const toggleThemesMenu = () => {
        setThemesMenu(true)
        setEditMenu(false)
        setOptionsMenu({ cmpType: null, isOpen: false })
    }

    return (

        <section className="editor-nav">
            <div className="side-bar">
                <div>
                    <button className="edit-btn" onClick={() => { toggleEditMenu() }}>
                        <img src={require('../assets/img/icons/edit-icon.svg').default} alt="edit-icon" />
                    </button>
                    <button className="themes-btn" onClick={toggleThemesMenu}>
                        <img src={require('../assets/img/icons/themes-icon.svg').default} alt="" />
                    </button>
                    <button onClick={() => { setMenu(!isMenu) }}><img src={require('../assets/img/icons/add-icon.svg').default} alt="add-icon" /></button>
                    {isMenu && <div  >
                        {cmpTypes.map(cmp => <h1   key={cmp} onClick={() => { toggleOptionsMenu(cmp) }} >{cmp}</h1>)}
                    </div>}
                </div>
                <div className="side-bar-features">
                    <button><img src={require('../assets/img/icons/work-together-icon.svg').default} alt="" /></button>
                    <button><img src={require('../assets/img/icons/puslish-icon.svg').default} alt="" /></button>
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