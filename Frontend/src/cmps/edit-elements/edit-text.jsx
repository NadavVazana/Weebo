import { Pallete } from './pallete'
import { useSelector, useDispatch } from 'react-redux'
import { setElement, updateDraft, duplicateElement, setDraft, setDuplicate } from '../../store/draft/draft.action'
import { useState } from 'react'


export const EditText = () => {

    const { currElement, draft, duplicate } = useSelector(state => state.draftModule)
    const dispatch = useDispatch()

    const [isUnderline, setIsUnderline] = useState(false)
    const [isBold, setIsBold] = useState(false)
    const [isItalic, setIsItalic] = useState(false)
    const fonts = ['Bahnschrift', 'Bebas', 'Eurofurence', 'Greatvibes', 'Lato', 'Madefor', 'Montserrat', 'Mercedes', 'Opensans', 'Orbitron']
    const decorOpts = ['textDecoration', 'fontWeight', 'fontStyle']
    const textControls = ['Delete', 'Copy', 'Undo']


    // Change Font
    const handleFont = (ev) => {
        const { value } = ev.target
        let copyCurrElement = { ...currElement }
        const fontFamily = value
        copyCurrElement = {
            ...copyCurrElement, styles: { ...copyCurrElement?.styles, fontFamily }
        }

        dispatch(setElement(copyCurrElement))
        dispatch(updateDraft(draft, copyCurrElement))
    }

// Change Font Size
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

    // Change Text shadow 
    const handleTextShadow = (ev) => {
        const { value } = ev.target
        let copyCurrElement = { ...currElement }
        const textShadow = Number(value) ? `${value}px ${value}px  ${value}px #000000` : 'unset'
        copyCurrElement = {
            ...copyCurrElement, styles: { ...copyCurrElement?.styles, textShadow }
        }
        dispatch(setElement(copyCurrElement))
        dispatch(updateDraft(draft, copyCurrElement))
    }

    // Change Background color
    const onSelectBackground = (ev) => {
        const backgroundColor = ev.target.id
        let copyCurrElement = { ...currElement }
        copyCurrElement = {
            ...copyCurrElement, styles: { ...copyCurrElement?.styles, backgroundColor }
        }

        dispatch(setElement(copyCurrElement))
        dispatch(updateDraft(draft, copyCurrElement))
    }

    // Change Font color
    const onSelectFontColor = (ev) => {
        const color = ev.target.id
        let copyCurrElement = { ...currElement }
        copyCurrElement = {
            ...copyCurrElement, styles: { ...copyCurrElement?.styles, color }
        }

        dispatch(setElement(copyCurrElement))
        dispatch(updateDraft(draft, copyCurrElement))
    }


    // Change Border Radius
    const handleBorderRadius = (ev) => {
        ev.preventDefault()

        const { value } = ev.target
        let copyCurrElement = { ...currElement }
        const borderRadius = `${value}px`
        copyCurrElement = {
            ...copyCurrElement, styles: { ...copyCurrElement?.styles, borderRadius }
        }

        dispatch(setElement(copyCurrElement))
        dispatch(updateDraft(draft, copyCurrElement))
    }

    // Toggle Text Decoration
    const toggleDecoration = (ev) => {
        const { alt } = ev.target
        let name = alt
        let value = ''

        switch (alt) {
            case 'textDecoration':
                setIsUnderline(!isUnderline)
                value = isUnderline ? 'underline' : 'none'
                break
            case 'fontWeight':
                setIsBold(!isBold)
                value = isBold ? 700 : 300
                break
            case 'fontStyle':
                setIsItalic(!isItalic)
                value = isItalic ? 'italic' : 'normal'
                break
            default: break
        }

        let copyCurrElement = { ...currElement }
        copyCurrElement = {
            ...copyCurrElement, styles: { ...copyCurrElement?.styles, [name]: value }
        }

        dispatch(setElement(copyCurrElement))
        dispatch(updateDraft(draft, copyCurrElement))
    }

    // Toggle Text actions
    const toggleTextControl = (ev) => {
        const { id } = ev.target

        const copyDuplicate = { ...draft }
        dispatch(setDuplicate(copyDuplicate))

        switch (id) {
            case 'Delete':
                removeElement()
                break
            case 'Copy':
                copyElement()
                break
            case 'Undo':
                dispatch(setDraft(duplicate))
                break
            default:
                break
        }
    }

    // Remove element
    const removeElement = () => {
        let copyCurrElement = { ...currElement }
        dispatch(setElement(copyCurrElement))
        dispatch(updateDraft(draft, copyCurrElement, true))
    }

    // Duplicate element
    const copyElement = () => {
        let copyCurrElement = { ...currElement }
        dispatch(setElement(copyCurrElement))
        dispatch(duplicateElement(draft, copyCurrElement))
    }

    return (
        <section className="edit-elements">
            
            {/* Text Decoration */}
            <div>
                <span>Decoration</span>
                <div className='align-image'>
                    {decorOpts.map(decorOpt =>
                        <img key={decorOpt}
                            src={require(`../../assets/img/icons/${decorOpt}.svg`)}
                            alt={`${decorOpt}`} onClick={toggleDecoration} />)}
                </div>
            </div>

            {/* Font Size */}
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

            {/* Border Radius */}
            <div>
                <span>Border Radius</span>
                <input
                    className="slider"
                    type="range"
                    name="borderRadius"
                    id=""
                    min="10"
                    max="50"
                    step="1"
                    value={Number(currElement?.styles?.borderRadius?.slice(0, 2) || 0)}
                    onChange={handleBorderRadius} />
            </div>

            {/* Font Select */}
            <div className="custom-select" >
                <label htmlFor='styledSelect'>Font</label>
                <select id="styledSelect" name='options' onChange={handleFont}>
                    {fonts.map(font => <option key={font} value={font}>{font}</option>)}
                </select>
            </div>

            {/* Text Shadow */}
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

            {/* Font Color */}
            <div className="pallete-container">
                <span>Font Color</span>
                <Pallete onSelect={onSelectFontColor} />
            </div>

            {/* Background color */}
            <div className="pallete-container">
                <span>Backgroud Color</span>
                <Pallete onSelect={onSelectBackground} />
            </div>

            {/* Control elements */}
            <div className='element-control'>
                {textControls.map(textControl =>
                    <div
                        className='element-control-container'
                        id={`${textControl}`}
                        onClick={toggleTextControl}
                        key={`${textControl}div`}>
                        <img key={textControl}
                            id={`${textControl}`}
                            src={require(`../../assets/img/icons/${textControl}-icon.svg`)}
                            alt={`${textControl}`} />
                        {textControl}
                    </div>)}
            </div>
        </section >
    )
}