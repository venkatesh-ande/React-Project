
export default function App(prop){
  return(
  <>
    
    <div className="list-container">
      <b>#{prop.id}</b>     
    <img src={prop.src} className = "char-image"/>
    
        <div>
          
       <h1> {prop.name}</h1>
      <p> <span>Nick Name :</span> {prop.nickname} </p>
      <p><span>Anime :</span> {prop.anime}</p>
      <p><span>Catagory :</span> {prop.catagory}</p>

        </div>
    </div>
    <hr />
        
  </>
  
  )
}