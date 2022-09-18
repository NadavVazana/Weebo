import { Link } from 'react-router-dom'

export const TemplatesPreview = ({ example }) => {
    return (
        <section className="template-preview">
            <div className="templates-preview-img">
                <Link to={`/editor/${example._id}`}>
                    <img src={example.imgUrl} alt={example.name} />
                </Link>
                <div className="category">
                    <span>{example.name}</span>
                    <p>{example.subcategory}</p>
                </div>
            </div>
        </section>
    )
}