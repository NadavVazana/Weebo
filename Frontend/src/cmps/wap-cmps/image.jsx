

export const Image = ({cmp, onEditElement}) => {
    return (
    <section className='image'>
        <img className={cmp.name} 
        src={require(`../../assets/img/${cmp.info.image}`)} 
        alt={cmp.name} 
        onClick={() => onEditElement(cmp)}/>
    </section>
    )
}