export const Video = ({cmp, onEditElement}) => {
    const {cls} = cmp
    return (
        <section className="video" onClick={() => onEditElement(cmp)}>
            <div className="video-container">
            <video className="video-player" loop autoPlay  style={{border:'none'}} src={cmp.info.video} frameBorder="0" title={cmp.name} ></video>
            </div>
        </section>
    )
}

