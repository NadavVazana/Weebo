import { Container } from "./container"
import { Text } from "./wap-cmps/text"
import { Button } from './wap-cmps/button'
import { Image } from "./wap-cmps/image"
import { Video } from "./wap-cmps/video"
import { Map } from "./wap-cmps/map"
import { Gallery } from "./wap-cmps/gallery"
// import { useEffect, useRef, useState } from "react"
import { Input } from "./wap-cmps/input"


export const DynamicCmp = ({ cmp, onEditElement }) => {
    switch (cmp.type) {
        case 'container':
            return <Container cmp={cmp} onEditElement={onEditElement} />
        case 'text':
            return <Text cmp={cmp} onEditElement={onEditElement} />
        case 'button':
            return <Button cmp={cmp} onEditElement={onEditElement} />
        case 'image':
            return <Image cmp={cmp} onEditElement={onEditElement} />
        case 'video':
            return <Video cmp={cmp} onEditElement={onEditElement} />
        case 'input':
            return <Input cmp={cmp} onEditElement={onEditElement} />
        case 'map':
            return <Map cmp={cmp} onEditElement={onEditElement} />
        case 'gallery':
            return <Gallery cmp={cmp} onEditElement={onEditElement} />
        default: return
    }

}