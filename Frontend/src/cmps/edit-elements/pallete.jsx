
export const Pallete = ({ onSelect }) => {

    // Colors
    const colors = [
        '#ffffff', '#000000', '#9b5de5', '#f15bb5', '#fee440', '#00bbf9',
        '#00f5d4', '#e4c1f9', '#fcf6bd', '#d0f4de', '#a9def9', '#fec89a',
        '#ffb5a7', 'transparent'
    ]

    // Color Pallete
    return <div className="pallete">
        {colors.map((color) =>
            <div className="color-container" key={`${color}C`}>
                <div
                    key={color}
                    style={{ backgroundColor: color, border:'1px #D0D0D0 solid' }}
                    id={color}
                    className="color"
                    onClick={onSelect} />
            </div>)}
    </div>

}