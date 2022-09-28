import { useSelector } from 'react-redux'
import { EditText } from '../edit-elements/edit-text'
import { EditButton } from '../edit-elements/edit-button'
import { EditImage} from '../edit-elements/edit-image'
import { EditContainer } from './edit-container'

export const EditElements = () => {

    const { currElement } = useSelector(state => state.draftModule)

    switch (currElement.type) {
        case 'container':
            return <EditContainer />
        case 'text':
            return <EditText />
        case 'button':
            return <EditButton />
        case 'image':
            return <EditImage/>
        default: return <h1>Click on element to edit</h1>
    }
}