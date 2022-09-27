import { Link } from 'react-router-dom'

export const TemplatesPreview = ({ example }) => {

    return (
        <section className="template-preview">
            <div className="templates-preview-img">
                <img src={example.imgUrl} alt={example.name} />
                <div className="category">
                    <span>{example.name}</span>
                    <p>{example.subcategory}</p>
                </div>
            </div>
            <div className='overlay'>
                <div className='overlay-screen'></div>
                <div className='overlay-btns'>
                    <Link target={'_blank'} to={`/preview/${example._id}`} className='preview-btn'>Preview</Link>
                    <Link className='select-btn' to={`/editor/${example._id}`}>Select</Link>
                </div>
            </div>

        </section>
    )
}