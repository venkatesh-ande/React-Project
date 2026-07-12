import Header from "./components/header.jsx"
import Footer from "./components/footer.jsx"
import mobile from "./images/realme-phone.jpeg"
import data from "./components/data.jsx"



export default function App (){
  return(
    <>
      <Header />
      <Data />
      <Footer />
      
    </>
    )
}

function Data(){
  return(
    <div className="grid-container">
          {data.map((data) =>{
      return(
        <Main src={data.src}
      product={data.product}
      price={data.price}
      rating={data.rating}
      
      />)
    })}
    </div>

    
    
    )
}


function Main(props){
  return(
    
     
    <article>
    <div className="item-container">
      <div className="item-subcontainer">
             
     <img className="product-img"src={props.src} />
      <div className="info-div">
        <p className="product-name">{props.product}  </p>
        <span className="product-price">₹{props.price}</span>
        <span className="product-rating">{props.rating}<span>&#9733;</span></span
        
        ></div>
        <div>
          <button className="cart-button">Add to Cart</button>
          <button className="buy-button">Buy Now</button>
        </div>
      </div>
    </div>
      
    </article>
  
)}

function DataList() {
  return (
    /* This wrapper applies the 2-column grid layout */
    <div className="product-grid">
      {productData.map((item, index) => {
        return (
          <Main 
            key={index} 
            src={item.src}
            product={item.product}
            price={item.price}
            rating={item.rating}
          />
        );
      })}
    </div>
  );
}