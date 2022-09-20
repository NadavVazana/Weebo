


export const Pallete = ({ onSelect }) => {


    const colors = [
        '#ffffff', '#000000', '#fee440', '#f15bb5', '#9b5de5', '#73d2de',
        '#218380', '#8f2d56', '#d81159', '#ffd670', '#7796cb', '#faf3dd',
         '#d3f8e2', '#7c98b3', '#00f5d4', '#00bbf9'
    ]

    return <div className="pallete">
        {colors.map((color) => <div
            key={color}
            style={{ backgroundColor: color }}
            id={color}
            className="color"
            onClick={onSelect} />)}
    </div>
}