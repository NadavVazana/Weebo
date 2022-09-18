import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { loadWaps } from "../../store/wap/wap.action.js"
import { TemplatesPreview } from "./templates-preview.jsx"

export const TemplatesList = () => {
    const dispatch = useDispatch()
    const { waps } = useSelector(state => state.wapModule)

    useEffect(() => {
        dispatch(loadWaps())
    }, [])

    if (!waps) return <section></section>
    return (
        <section className="templates-list">
            {waps.map(wap => <TemplatesPreview key={wap._id} example={wap} />)}
        </section>
    )
}

