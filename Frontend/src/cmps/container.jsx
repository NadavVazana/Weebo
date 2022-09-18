import { DynamicCmp } from "./dynamic-cmp"




export function Container({ cmp, onEditElement }) {
    let { cmps, cls } = cmp
    return (
        <section>
            <div className={`container ${cls}`}>
                {cmps.map((cmp) => <DynamicCmp key={cmp.id} cmp={cmp} onEditElement={onEditElement} />)}
            </div>

        </section>
    )
}