export const Video = ({cmp, onEditElement}) => {
    const {cls} = cmp
    return (
        <section className="video" onClick={() => onEditElement(cmp)}>
            <h1> Video</h1>
        </section>
    )
}