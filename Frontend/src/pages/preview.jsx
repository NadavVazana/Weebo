import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { DynamicCmp } from "../cmps/dynamic-cmp"
import { wapService } from "../services/wap.service"

export const Preview=()=>{
    const {templateId} = useParams()
    const [template,setTemplate]= useState(null)
    useEffect(()=>{
        loadTemplate()
        

    },[])

    const loadTemplate=async ()=>{
        const template =await wapService.getById(templateId)
        setTemplate(template)

    }
    if(!template) return
    return (
        <section className="preview">
            {templateId === 'empty'? <section>
                                        <h1 className='guide-title'>Let's learn how to do it!</h1>
                                        <div className='guide-video-container'>
                                        <video className='guide' style={{border:'none'}} autoPlay loop src={require('../assets/img/guide.mp4')}></video>
                                        </div>
                                       
                                    </section> : template.cmps.map(cmp=><DynamicCmp key={cmp.id} cmp={cmp} isPreview={true} isPublished={true}/>)}
           
        </section>
    )
}