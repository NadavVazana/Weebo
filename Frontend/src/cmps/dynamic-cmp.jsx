import { Container } from "./container"
import { Text } from "./wap-cmps/text"
import { Button } from './wap-cmps/button'
import { Image } from "./wap-cmps/image"
import { Video } from "./wap-cmps/video"
import { Map } from "./wap-cmps/map"
import { Gallery } from "./wap-cmps/gallery"
import { Input } from "./wap-cmps/input"
import {Form} from './wap-cmps/form'


export const DynamicCmp = ({ cmp, onEditElement, isPublished,isPreview = false }) => {
    switch (cmp.type) {
        case 'container':
            return <Container isPreview={isPreview} isPublished={isPublished} cmp={cmp} onEditElement={onEditElement} />
        case 'text':
            return <Text  isPublished={isPublished} cmp={cmp} onEditElement={onEditElement} />
        case 'button':
            return <Button  isPublished={isPublished} cmp={cmp} onEditElement={onEditElement} />
        case 'image':
            return <Image  isPublished={isPublished} cmp={cmp} onEditElement={onEditElement} />
        case 'video':
            return <Video  isPublished={isPublished} cmp={cmp} onEditElement={onEditElement} />
        case 'input':
            return <Input  isPublished={isPublished} cmp={cmp} onEditElement={onEditElement} />
        case 'map':
            return <Map  isPublished={isPublished} cmp={cmp} onEditElement={onEditElement} />
        case 'gallery':
            return <Gallery  isPublished={isPublished} cmp={cmp} onEditElement={onEditElement} />
        case 'form':
            return <Form isPreview={isPreview} isPublished={isPublished} cmp={cmp} onEditElement={onEditElement}   />    
        default: return
    }

}