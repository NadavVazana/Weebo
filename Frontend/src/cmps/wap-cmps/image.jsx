import React from "react"
export const Image = ({ cmp, isPublished, onEditElement }) => {


    let image = ``

    function handleEditElement(ev, cmp) {
        ev.preventDefault()
        ev.stopPropagation()
        onEditElement(cmp)
    }

    image = (cmp?.info?.image?.slice(0, 4) === 'http') ? cmp.info.image : require(`../../assets/img/${cmp.info.image}`)
    if (!cmp?.info?.image) return

    // Image elements
    return (
        <React.Fragment>
            {/* EDIT MODE */}
            {!isPublished ? <section className={`image ${cmp.name}`}>
                <img className={cmp.name}
                    src={image}
                    alt={cmp.name}
                    onClick={(ev) => handleEditElement(ev, cmp)}
                />
            </section> :
                // PUBLISH MODE
                <section className={`image ${cmp.name}`}>
                    <img className={cmp.name}
                        src={image}
                        alt={cmp.name}
                        onClick={(ev) => handleEditElement(ev, cmp)} />
                </section>}
        </React.Fragment>
    )
}
