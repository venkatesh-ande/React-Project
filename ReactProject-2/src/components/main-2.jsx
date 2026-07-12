
import App from "../App.jsx"
import data from "./info.jsx"

export default function Appp(){
  
  const infoElement = data.map((info) => {
    return (
    <App src={info.src}
    name={info.name}
   nickname={info.nickname}
    anime={info.anime}
    catagory={info.catagory}
    id={info.id}
    />) 
  })
  return(
    <main>
      {infoElement}
    </main>
    )
}
