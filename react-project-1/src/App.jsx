
export default function App(prop){
  return(
  <>
    
    <div className="list-container">
      
    <img src={prop.src} className = "char-image"/>
    
        <div>
          
       <h1> {prop.name}</h1>
      <p>Nick Name : {prop.nickname} </p>
      <p>Anime : {prop.anime}</p>
      <p>Catagory : {prop.catagory}</p>

        </div>
    </div>
    <hr />
        
  </>
  
  )
}