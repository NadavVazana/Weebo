import { Pallete } from './pallete'
import { useSelector, useDispatch } from 'react-redux'
import { setElement } from '../../store/draft/draft.action'

export const EditText = () => {

    const { currElement } = useSelector(state => state.draftModule)
    const dispatch = useDispatch()

    const handleFontSize = (ev) => {
        const { value } = ev.target
        let copyCurrElement = { ...currElement }
        copyCurrElement.info = {...copyCurrElement.info, styles: { fontSize:  value + 'px'  }
    }

    dispatch(setElement(copyCurrElement))
}

const handleTextShadow = (ev) => {
    const { value } = ev.target
    currElement.info.styles.textShadow = Number(value) ? `${value}px ${value}px #fff` : 'unset'
    dispatch(setElement(currElement))
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
                name=""
                id=""
                min="10"
                max="48"
                step="1"
                value={Number(currElement?.info?.styles?.fontSize?.slice(0, 2) || 14)}
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
                name=""
                id=""
                min="0"
                max="10"
                step="1"
                value={Number(currElement?.info?.styles?.textShadow?.slice(0, 2)) || 0}
                onChange={handleTextShadow}
            />
        </div>
        <div className="pallete-container">
            <span>Font Color</span>
            <Pallete onClick={() => { }} />
        </div>
        <div className="pallete-container">
            <span>Backgroud Color</span>
            <Pallete onClick={() => { }} />
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