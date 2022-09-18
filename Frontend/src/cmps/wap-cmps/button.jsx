export const Button = ({ cmp, onEditElement }) => {
    return (
        <section className="button">
            <button
                className={cmp.info.class}
                onClick={() => onEditElement(cmp)}>{cmp.info.value}
            </button>
        </section>
    )
}