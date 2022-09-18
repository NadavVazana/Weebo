import { DynamicCmp } from "./dynamic-cmp"




export function Container({ cmp, onEditElement }) {
    let { cmps, name } = cmp
    console.log(cmp);
    return (
        <section  onClick={()=>onEditElement(cmp)}>
            <div className={`container ${name}`}>
                {cmps.map((cmp) => <DynamicCmp key={cmp.id} cmp={cmp} onEditElement={onEditElement} />)}
            </div>

        </section>
    )
}