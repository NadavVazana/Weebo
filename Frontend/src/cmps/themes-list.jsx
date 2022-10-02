import { useSelector, useDispatch } from 'react-redux'
import { updateDraftTheme, getDraftFromHistory } from '../store/draft/draft.action'


export function ThemesList() {

    const { draft } = useSelector(state => state.draftModule)
    const dispatch = useDispatch()
    const themes = [
        { title: 'Blue Lagoon', color: 'Blue', description: 'Calm & Peaceful', backgroundColor: ['#274c77', '#6096ba', '#a3cef1', '#274c77'], fontFamily: 'Satisfy-Regular' },
        { title: 'Pink Mood', color: 'Pink', description: 'Rosy & Blushing', backgroundColor: ['#604d53', '#db7f8e', '#ffdbda', '#604d53'], fontFamily: 'GreatVibes' },
        { title: 'Soft Spirit', color: 'Soft', description: 'Pastel & Hazy', backgroundColor: ['#cbc0d3', '#efd3d7', '#feeafa', '#cbc0d3'], fontFamily: 'IndieFlower' },
        { title: 'Go Green', color: 'Green', description: 'Rural & Pastoral', backgroundColor: ['#6b9080', '#a4c3b2', '#cce3de', '#6b9080'], fontFamily: 'LobsterTwo' }
    ]

    const changeTheme = (theme) => {
        dispatch(updateDraftTheme(draft, theme))
    }

    // Toggle actions
    const handleUndo = () => {
        dispatch(getDraftFromHistory())
    }

    return (
        <section className="edit-themes">

            <div className="themes-list" >
                {themes.map(theme =>
                    <div key={theme.color} className="theme" onClick={() => changeTheme(theme)}>
                        <div className="theme-inner-text" key={theme.title}>
                            <span style={{ fontFamily: theme.fontFamily }}>{theme.title}</span>
                            <p>{theme.description}</p>
                            <img src={require(`../assets/img/themes/${theme.color}.PNG`)}
                                alt={`${theme.title}`} />
                        </div>
                    </div>)}
            </div>
            <div className="themes-action-menu">
                <span className="header-title">Choose your theme!</span>
                <span className="undo-theme" onClick={handleUndo}>
                    <img className="undo-img" src={require('../assets/img/icons/Undo-icon.svg').default} alt={`Undo`} />
                    <span>Undo</span>
                </span>
            </div>

        </section >
    )
}