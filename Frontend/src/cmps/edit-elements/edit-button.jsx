import { Pallete } from './pallete'
import { useSelector, useDispatch } from 'react-redux'
import { setElement, updateDraft } from '../../store/draft/draft.action'

export const EditButton = () => {

    const { currElement } = useSelector(state => state.draftModule)
    const { draft } = useSelector(state => state.draftModule)
    const dispatch = useDispatch()

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
        let copyCurrElement = {...currElement}
        const borderRadius = `${value}px`
        copyCurrElement = {
            ...copyCurrElement, styles: { ...copyCurrElement?.styles, borderRadius }
        }

        dispatch(setElement(copyCurrElement))
        dispatch(updateDraft(draft, copyCurrElement))
    }

    return (
        <section className="edit-elements">
            
            {/* Font color pallete */}
            <div className="pallete-container">
                <span>Font Color</span>
                <Pallete onSelect={onSelectFontColor} />
            </div>

            {/* Background Color */}
            <div className="pallete-container">
                <span>Backgroud Color</span>
                <Pallete onSelect={onSelectBackground} />
            </div>

            {/* Border radius */}
            <div>
                <span>Border Radius</span>
                <input 
                className="slider" 
                type="range" 
                name="borderRadius" 
                id="" 
                min="10"
                max="50"
                step="2"
                value={Number(currElement?.styles?.borderRadius?.slice(0, 2) || 25)}
                onChange={handleBorderRadius}/>
            </div>
        </section>
    )
}