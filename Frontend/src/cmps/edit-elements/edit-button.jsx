import { Pallete } from './pallete'
import { useSelector, useDispatch } from 'react-redux'
import { setElement, updateDraft, getDraftFromHistory } from '../../store/draft/draft.action'

export const EditButton = () => {

    const { currElement } = useSelector(state => state.draftModule)
    const { draft } = useSelector(state => state.draftModule)
    const dispatch = useDispatch()
    const actions = ['Delete', 'Copy', 'Undo']

    // Selecting Background
    const onSelectBackground = (ev) => {
        const backgroundColor = ev.target.id
        let copyCurrElement = { ...currElement }
        copyCurrElement = {
            ...copyCurrElement, styles: { ...copyCurrElement?.styles, backgroundColor }
        }
        dispatch(setElement(copyCurrElement))
        dispatch(updateDraft(draft, copyCurrElement))
    }

    // Changing Font color
    const onSelectFontColor = (ev) => {
        const color = ev.target.id
        let copyCurrElement = { ...currElement }
        copyCurrElement = {
            ...copyCurrElement, styles: { ...copyCurrElement?.styles, color }
        }

        dispatch(setElement(copyCurrElement))
        dispatch(updateDraft(draft, copyCurrElement))
    }

    // Border radius changes the element radius
    const handleBorderRadius = (ev) => {
        const { value } = ev.target
        let copyCurrElement = { ...currElement }
        const borderRadius = `${value}px`
        copyCurrElement = {
            ...copyCurrElement, styles: { ...copyCurrElement?.styles, borderRadius }
        }

        dispatch(setElement(copyCurrElement))
        dispatch(updateDraft(draft, copyCurrElement))
    }

    // Toggle actions
    const toggleActions = (ev) => {
        const { id } = ev.target

        let copyCurrElement = { ...currElement }
        dispatch(setElement(copyCurrElement))
        if (id === 'Undo') {
            dispatch(getDraftFromHistory())
        } else {
            dispatch(updateDraft(draft, copyCurrElement, id))
        }
    }

    return (
        <section className="edit-elements">

            {/* Font color pallete */}
            <div className="pallete-container underline">
                <span>Font Color</span>
                <Pallete onSelect={onSelectFontColor} />
            </div>

            {/* Background Color */}
            <div className="pallete-container underline">
                <span>Background Color</span>
                <Pallete onSelect={onSelectBackground} />
            </div>

            {/* Border radius */}
            <div className="space-between underline">
                <span>Border Radius: <output>{currElement?.styles?.borderRadius ? currElement?.styles?.borderRadius.slice(0, 2) : ''}</output></span>
                <input
                    className="slider"
                    type="range"
                    name="borderRadius"
                    id=""
                    min="10"
                    max="50"
                    step="2"
                    value={Number(currElement?.styles?.borderRadius?.slice(0, 2) || 25)}
                    onChange={handleBorderRadius} />
            </div>

            {/* element actions-delete, duplicate, undo */}
            <div className='space-between element-control'>
                {actions.map(action =>
                    <div
                        className='element-control-container'
                        id={`${action}`}
                        onClick={toggleActions}
                        key={`${action}div`}>
                        <img key={action}
                            id={`${action}`}
                            src={require(`../../assets/img/icons/${action}-icon.svg`)}
                            alt={`${action}`} />
                        <span className={`${action.toLowerCase()}`}>{action}</span>
                    </div>)}
            </div>
        </section>
    )
}