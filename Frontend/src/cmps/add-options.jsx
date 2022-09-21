import { useEffect, useState } from "react"
import { Draggable, Droppable } from "react-beautiful-dnd"
import { Headers, Footers, Cards, Maps, Galleries, Heroes, Forms, All } from "../assets/templates"

export const AddOptions = ({ isOptionsMenu, addElement, setOptionList,name }) => {
    const [items, setItems] = useState('')
    useEffect(() => {
        switch (isOptionsMenu.cmpType) {
            case 'Headers':
                setItems(Headers)
                break
            case 'Footers':
                setItems(Footers)
                break
            case 'Cards':
                setItems(Cards)
                break

            case 'Maps':
                setItems(Maps)
                break
            case 'Galleries':
                setItems(Galleries)
                break
            case 'Heroes':
                setItems(Heroes)
                break
            case 'Forms':
                setItems(Forms)
                break
            case 'All':
                setItems(All)
                break
            default: break

        }
    }, [isOptionsMenu.cmpType])

    setOptionList(items)

    return (
        <Droppable isDropDisabled droppableId={isOptionsMenu.cmpType}>
            {(provided) => {
                return <section ref={provided.innerRef} {...provided.droppableProps} >
                    {Object.values(items).map((cmp, index) => {
                        return <Draggable key={cmp.name} index={index} draggableId={cmp.name}>
                            {(provided) => {
                                return (
                                    <div ref={provided.innerRef}
                                        {...provided.dragHandleProps}
                                        {...provided.draggableProps}
                                        onClick={() => addElement(isOptionsMenu.cmpType)}>
                                        <img className={`mini-cmp ${cmp.name}-mini`}
                                            src={require(`../assets/img/templates/example elements/${cmp.name}.png`)}
                                            alt={`${cmp.name}`} />
                                    </div>)
                            }}
                        </Draggable>
                    })}
                    {provided.placeholder}
                </section>
            }}
        </Droppable>

    )
}