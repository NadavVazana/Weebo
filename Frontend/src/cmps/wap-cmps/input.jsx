import React from "react"
export const Input = ({ cmp, onEditElement,isPublished }) => {
    const handleInput = (ev)=>{
        console.log(ev.target.value);
        console.log(cmp);
    }
    return (
        <React.Fragment>
        {/* EDIT MODE */}
        {!isPublished ? <section>
            <input
                type={cmp.input_type}
                placeholder={cmp.info.placeholder}
                onClick={() => onEditElement(cmp)}
                className={cmp.name} />
        </section>
        // PUBLISH MODE
        :<section>

              <input
                type={cmp.input_type}
                placeholder={cmp.info.placeholder}
                onChange={handleInput}
                className={cmp.name} />

        </section>}
        </React.Fragment>
    )
}