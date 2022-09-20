'../../as'
import React from "react"


export const Image = ({ cmp, onEditElement,isPublished }) => {
    return (
        <React.Fragment>
    {!isPublished ? <section className='image'>
        <img className={cmp.name}
            src={require(`../../assets/img/${cmp.info.image}`)}
            alt={cmp.name}
            onClick={() => onEditElement(cmp)} />
    </section> : 
    <setction className="image">
             <img className={cmp.name}
            src={require(`../../assets/img/${cmp.info.image}`)}
            alt={cmp.name}
            />
        </setction>}
    </React.Fragment>
    )
    }
