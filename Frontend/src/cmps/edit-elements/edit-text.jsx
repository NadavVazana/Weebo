import { Pallete } from './pallete'
import { useSelector, useDispatch } from 'react-redux'
import { setElement, updateDraft } from '../../store/draft/draft.action'

export const EditText = () => {

    const { currElement } = useSelector(state => state.draftModule)
    const { draft } = useSelector(state => state.draftModule)
    const dispatch = useDispatch()

    const handleFontSize = (ev) => {
        const { value } = ev.target
        let copyCurrElement = { ...currElement }
        const fontSize = value + 'px'
        copyCurrElement = {
            ...copyCurrElement, styles: { ...copyCurrElement?.styles, fontSize }
        }

        dispatch(setElement(copyCurrElement))
        dispatch(updateDraft(draft, copyCurrElement))
    }

    const handleTextShadow = (ev) => {
        const { value } = ev.target
        let copyCurrElement = { ...currElement }
        const textShadow = Number(value) ? `${value}px ${value}px #fff` : 'unset'
        copyCurrElement = {
            ...copyCurrElement, styles: { ...copyCurrElement?.styles, textShadow }
        }
        dispatch(setElement(copyCurrElement))
        dispatch(updateDraft(draft, copyCurrElement))
    }

    const onSelectBackground = (ev) => {
        const backgroundColor = ev.target.id
        let copyCurrElement = { ...currElement }
        copyCurrElement = {
            ...copyCurrElement, styles: { ...copyCurrElement?.styles, backgroundColor }
        }

        dispatch(setElement(copyCurrElement))
        dispatch(updateDraft(draft, copyCurrElement))
    }

    const onSelectFontColor = (ev) => {
        console.log('ev', ev)
        const color = ev.target.id
        let copyCurrElement = { ...currElement }
        copyCurrElement = {
            ...copyCurrElement, styles: { ...copyCurrElement?.styles, color }
        }

        dispatch(setElement(copyCurrElement))
        dispatch(updateDraft(draft, copyCurrElement))
    }

    return (
        <section className="edit-elements">
            <div>
                <span>Align</span>
                <input className="slider" type="range" name="" id="" />
            </div>
            <div>
                <span>Decoration</span>
                <input className="slider" type="range" name="" id="" />
            </div>
            <div>
                <span>Font Size</span>
                <input className="slider" type="range"
                    name="fontSize"
                    id=""
                    min="10"
                    max="48"
                    step="1"
                    value={Number(currElement?.styles?.fontSize?.slice(0, 2) || 14)}
                    onChange={handleFontSize}
                />
            </div>
            <div>
                <span>Border Radius</span>
                <input className="slider" type="range" name="" id="" />
            </div>
            <div>
                <span>Font</span>
                <input className="slider" type="range" name="" id="" />
            </div>
            <div>
                <span>Text Shadow</span>
                <input className="slider"
                    type="range"
                    name="textShadow"
                    id=""
                    min="0"
                    max="9"
                    step="1"
                    value={Number(currElement?.styles?.textShadow?.slice(0, 1)) || 0}
                    onChange={handleTextShadow}
                />

            </div>
            <div className="pallete-container">
                <span>Font Color</span>
                <Pallete onSelect={onSelectFontColor} />
            </div>
            <div className="pallete-container">
                <span>Backgroud Color</span>
                <Pallete onSelect={onSelectBackground} />
            </div>
            <div>
                <span>Link</span>
                <input type="url" name="" id="" placeholder="URL" />
            </div>

            <div>
                <button>Delete</button>
                <h1>Duplicate</h1>
                <h1>Undo</h1>
            </div>
        </section>
    )
}