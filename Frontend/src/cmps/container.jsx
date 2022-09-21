import { useSelector } from "react-redux"
import { DynamicCmp } from "./dynamic-cmp"
import { useState } from "react"

export function Container({ cmp, onEditElement }) {
    const { cmps, name } = cmp
    const currElement = useSelector(state => state.draftModule.currElement)
    const [hover, setHover] = useState(false)

    return (
        // Container element
        <section onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)} onClick={() => onEditElement(cmp)} >
            <div
                className={`container ${name} ${cmp.id === currElement?.id ? 'focus' : ''} ${hover && 'cmp-hovered'}`}
                style={{ ...cmp?.styles }}
            >
                {cmps.map((cmp) => <DynamicCmp key={cmp.id} cmp={cmp} onEditElement={onEditElement} />)}
            </div>
        </section>
    )
}