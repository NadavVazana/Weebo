import { useSelector, useDispatch } from 'react-redux'
import { updateDraftTheme } from '../store/draft/draft.action'


export function ThemesList() {

    const { draft } = useSelector(state => state.draftModule)
    const dispatch = useDispatch()
    const themes = [
        { title: 'Blue Lagoon', color: 'Blue', description: 'Calm & Peaceful', backgroundColor: ['#274c77', '#6096ba', '#a3cef1'], fontFamily: 'GreatVibes' },
        { title: 'Pink Mood', color: 'Pink', description: 'Rosy & Blushing', backgroundColor: ['#604d53', '#db7f8e', '#ffdbda'], fontFamily: 'GreatVibes' },
        { title: 'Soft Spirit', color: 'Soft', description: 'Pastel & Hazy', backgroundColor: ['#cbc0d3', '#efd3d7', '#feeafa'], fontFamily: 'GreatVibes' },
        { title: 'Go Green', color: 'Green', description: 'Rural & Pastoral', backgroundColor: ['#6b9080', '#a4c3b2', '#cce3de'], fontFamily: 'GreatVibes' }
    ]

    const changeTheme = (theme) => {
        dispatch(updateDraftTheme(draft, theme))
    }

    return (
        <div className="themes-list" >
            {themes.map(theme =>
                <div key={theme.color} className="theme" onClick={() => changeTheme(theme)}>
                    <div className="theme-inner-text" key={theme.title}>
                        <span>{theme.title}</span>
                        <p>{theme.description}</p>
                            <img src={require(`../assets/img/themes/${theme.color}.PNG`)}
                                alt={`${theme.title}`} />
                        </div>
                </div>)}


        </div>
    )
}