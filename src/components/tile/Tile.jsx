function Tile (props) {

    console.log(props)
    return (
        <section className='imageOrText'>
            <h2>{props.title}</h2>
            {props.children}
        </section>

    );
}

export default Tile;