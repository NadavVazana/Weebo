import { useSelector } from "react-redux"
import { DynamicCmp } from "./dynamic-cmp"
import { useState }   from "react"
import React from 'react';
export function Container({ cmp, onEditElement,isPublished,isPreview }) {
    const { cmps, name } = cmp
    const currElement = useSelector(state => state.draftModule.currElement)
    const [hover,setHover] = useState(false)

    return (
        <React.Fragment>
            {/* EDIT MODE */}
          {!isPublished ? <section onMouseLeave={()=>setHover(false)} onMouseEnter={()=>setHover(true)} onClick={() => onEditElement(cmp)} >
            <div 
            className={`container ${name} ${cmp.id === currElement?.id ? 'focus' : ''} ${hover && 'cmp-hovered'}`}
            style={{ ...cmp?.styles }}
            >
                {cmps.map((cmp) => <DynamicCmp isPublished={isPublished} key={cmp.id} cmp={cmp} onEditElement={onEditElement} />)}
            </div>
        </section>
        // PUBLISH MODE
        : <section >
            <div 
            
            className={`container ${name}`}
            style={{ ...cmp?.styles }}
            >
                {cmps.map((cmp) => <DynamicCmp isPreview={isPreview}  isPublished={isPublished} key={cmp.id} cmp={cmp} onEditElement={onEditElement} />)}
            </div>
            </section>}
        </React.Fragment>





    )
}