import icon from "../images/user.jpeg"

export default function Header(){
  return(
    <header>
    <div className="header-container">
      <button className="menu-button">&#9776;</button>
      <h1>V-Cart</h1>
      <img src={icon} />
    </div>
    <div className="catagory-div">
      <button>Mobiles</button>
      <button>Headphones</button>
      <button>Mobile covers</button>
      <button>Beauty products</button>
      <button>Smart watches</button>
      <button>Tvs</button>
      <button>Electronics</button>
      <button>Speakers</button>
    </div>
    <div className="search" >
      <input type="search" placeholder="Search" />
    </div>
          


      
    
    </header>
    )
  
}