import { DynamicCmp } from "./dynamic-cmp"


export function Container({ cmp, onEditElement }) {
    const { cmps, name } = cmp

    return (
        <section>
            <div className={`container ${name}`} onClick={onEditElement}>
                {cmps.map((cmp) => <DynamicCmp key={cmp.id} cmp={cmp} onEditElement={onEditElement} />)}
            </div>
        </section>
    )
}