
function Product ({productImage, productName, price, isBestSeller}) {


    return ( <article>
                <span>{isBestSeller}</span>
                <img src={productImage}/>
                <p>{productName}</p>
                <h4>€{price},-</h4>
            </article>
    );
}
export default Product;