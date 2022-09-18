export const Map = ({cmp, onEditElement})=>{
    // const {cls} = cmp

    return (
        <section className="map" onClick={() => onEditElement(cmp)}>
            <h1>Map</h1>
        </section>
    )

}