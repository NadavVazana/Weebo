import { useSelector } from "react-redux"
import { DynamicCmp } from "./dynamic-cmp"


export function Container({ cmp, onEditElement }) {
    const { cmps, name } = cmp
    const currElement = useSelector(state => state.draftModule.currElement)

    return (
        <section onClick={() => onEditElement(cmp)} >
            <div className={`container ${name} ${cmp.id === currElement?.id ? 'focus' : ''}`}>
                {cmps.map((cmp) => <DynamicCmp key={cmp.id} cmp={cmp} onEditElement={onEditElement} />)}
            </div>
        </section>
    )
}