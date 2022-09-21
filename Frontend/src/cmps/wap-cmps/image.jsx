
export const Image = ({ cmp, onEditElement }) => {

let image = ``

    function handleEditElement(ev, cmp) {
        ev.preventDefault()
        ev.stopPropagation()
        onEditElement(cmp)
    }

    image = (cmp?.info?.image?.slice(0,4) === 'http')?  cmp.info.image : require(`../../assets/img/${cmp.info.image}`)
    if(!cmp?.info?.image) return

    return (
        // Image Element
        <section className='image'>
            <img className={cmp.name}
                src={image}
                alt={cmp.name}
                onClick={(ev) => handleEditElement(ev, cmp)} />
        </section>
    )
}
