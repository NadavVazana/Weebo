import { useSelector } from 'react-redux'
import { EditText } from '../edit-elements/edit-text'
import { EditButton } from '../edit-elements/edit-button'
import { EditContainer } from './edit-container'

export const EditElements = () => {

    const { currElement } = useSelector(state => state.draftModule)

    //EditElementsText
    switch (currElement.type) {
        case 'container':
            return <EditContainer />
        case 'text':
            return <EditText />
        case 'button':
            return <EditButton />
        // case 'image':
        //     return <EditImage/>
        // case 'video':
        //     return <EditVideo/>
        // case 'input':
        //     return <EditInput/>
        // case 'map':
        //     return <EditMap/>
        // case 'card':
        //     return <EditContainer/>
        default: return <h1>Click on element to edit</h1>
    }

}