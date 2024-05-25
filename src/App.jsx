import './App.css'
import Button from "./components/button/Button.jsx";
import bagOne from './assets/bag_1.png';
import bagTwo from './assets/bag_2.png';
import bagThree from './assets/bag_3.png';
import bagFour from './assets/bag_4.png';
import Product from "./components/product/Product.jsx";
import brandPic from './assets/brand.png';
import storyPic from './assets/our_story.png';
import Tile from "./components/tile/Tile.jsx";


function App () {
    const handleClick = (e) => {
        console.log(e.target.value);
    };
  return (
    <>
        <nav>
          <Button id="to-collection" name="to-collection" value="To the collection" onClick={handleClick} />
          <Button id="shop-all-bags" name="shop-all-bags" value="Shop all bags" onClick={handleClick} />
          <Button id="pre-orders" name="pre-orders" value="Pre-orders" disabled onClick={handleClick} />
        </nav>
        <main>
            <Product
                isBestSeller='Best seller'
                productImage={bagOne}
                productName='The handy bag'
                price={400}
            />
            <Product
                isBestSeller='Best seller'
                productImage={bagTwo}
                productName='The stylish bag'
                price={250}
            />
            <Product
                isBestSeller='Best seller'
                productImage={bagThree}
                productName='The simple bag'
                price={300}
            />
            <Product
                isBestSeller='Best seller'
                productImage={bagFour}
                productName='The trendy bag'
                price={150}
            />
        </main>
        <footer>
            <Tile title='The brand'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur maiores necessitatibus reiciendis vitae. Ad architecto aspernatur cum cupiditate error, eveniet ipsum itaque minima, nihil praesentium, quas quisquam ratione reiciendis?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias, asperiores consectetur cum dignissimos dolorem et explicabo fugiat incidunt libero natus nihil odio officiis, perspiciatis rem temporibus tenetur? Est, porro!</p>
            </Tile>
            <Tile>
                <img src={brandPic} alt='brand-pic'/>
            </Tile>
            <Tile>
                <img src={storyPic} alt='story-pic'/>
            </Tile>
            <Tile title='our story'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores ea eaque enim harum in laborum non quo sequi voluptas! Adipisci consequuntur deleniti dolore eum hic tempore ut vel voluptatem.</p>
            </Tile>
        </footer>
    </>
  )
}

export default App
