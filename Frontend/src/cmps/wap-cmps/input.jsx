
export const Input = ({ cmp, onEditElement }) => {

    return (
        <section>
            <input
                type={cmp.input_type}
                placeholder={cmp.info.placeholder}
                onClick={() => onEditElement(cmp)}
                className={cmp.name} />
        </section>
    )
}