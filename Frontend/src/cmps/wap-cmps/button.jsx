export const Button = ({ cmp, onEditElement }) => {
    return (
        <section className="button">
            <button 
                className={cmp.info.class}
                onClick={() => onEditElement(cmp)}>
                 <a className="btn-link" href="#">   {cmp.info.value}</a>
            </button>
        </section>
    )
}