import { Pallete } from './pallete'
import { useSelector, useDispatch } from 'react-redux'
import { setElement, updateDraft, getDraftFromHistory } from '../../store/draft/draft.action'

export const EditText = () => {

    const { currElement, draft } = useSelector(state => state.draftModule)
    const dispatch = useDispatch()


    const fonts = ['IndieFlower', 'Bahnschrift', 'Poppins', 'Eurofurence', 'Greatvibes', 'Lato', 'LobsterTwo', 'Madefor', 'Montserrat', 'Satisfy-Regular', 'Shrikhand', 'Orbitron']
    const decorOpts = ['fontWeight', 'fontStyle', 'textDecoration']
    const actions = ['Delete', 'Copy', 'Undo']



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
        let copyCurrElement = { ...currElement }

        switch (alt) {
            case 'textDecoration':
                value = copyCurrElement?.styles?.textDecoration === 'underline' ? 'none' : 'underline'
                break
            case 'fontWeight':
                value = copyCurrElement?.styles?.fontWeight === '700' ? '300' : '700'

                break
            case 'fontStyle':
                value = copyCurrElement?.styles?.fontStyle === 'italic' ? 'normal' : 'italic'
                break
            default: break
        }


        copyCurrElement = {
            ...copyCurrElement, styles: { ...copyCurrElement?.styles, [name]: value }
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

    const getTextShadow = (value) => {
        if (value !== 'unset') return value.slice(0, 1)
        else return 0
    }

    return (
        <section className="edit-elements">
            {/* Font Size */}
            <div className='space-between underline'>
                <span>Font size: <output>{currElement?.styles?.fontSize ? currElement?.styles?.fontSize : ''}</output></span>

                <input className="slider" type="range"
                    name="fontSize"
                    id="num"
                    min="10"
                    max="48"
                    step="1"
                    value={Number(currElement?.styles?.fontSize?.slice(0, 2) || 18)}
                    onChange={handleFontSize}
                />

            </div>

            {/* Text Decoration */}
            <div className='space-between underline'>
                <span>Decoration: </span>
                <div className='decoration'>
                    {decorOpts.map(decorOpt =>
                        <img key={decorOpt}
                            src={require(`../../assets/img/icons/${decorOpt}.svg`)}
                            alt={`${decorOpt}`} onClick={(ev) => toggleDecoration(ev)} />)}
                </div>
            </div>

            {/* Border Radius */}
            <div className='space-between underline'>
                <span>Border Radius: <output>{currElement?.styles?.borderRadius ? currElement?.styles?.borderRadius.slice(0, 2) : ''}</output></span>
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
            <div className="space-between custom-select underline" >
                <label htmlFor='styledSelect'>Font: </label>
                <select className='select-font' id="styledSelect" name='options' onChange={handleFont}>
                    {fonts.map(font => <option key={font} value={font}>{font}</option>)}
                </select>
            </div>

            {/* Text Shadow */}
            <div className="space-between underline">
                <span>Text Shadow: <output>{currElement?.styles?.textShadow ? getTextShadow(currElement?.styles?.textShadow) : ''}</output></span>
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
            <div className="pallete-container underline">
                <span>Font Color:</span>
                <Pallete onSelect={onSelectFontColor} />
            </div>

            {/* Background color */}
            <div className="pallete-container underline">
                <span>Background Color:</span>
                <Pallete onSelect={onSelectBackground} />
            </div>

            {/* element actions-delete, duplicate, undo */}
            {/* <div className='edit-element-control'> */}
                {/* <span className='header-element-control'>Edit your website</span> */}
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
            {/* </div> */}
        </section >
    )
}