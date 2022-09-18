export const Button = ({ cmp, onEditElement }) => {

    function handleEditElement(ev, cmp) {
        ev.stopPropagation()
        onEditElement(cmp)
    }
    return (
        <section className="button">
            <button
                className={cmp.info.class}
                onClick={(ev) => handleEditElement(ev, cmp)}>
                <a className="btn-link" href="#">
                    {cmp.info.value}
                </a>
            </button>
        </section>
    )
}