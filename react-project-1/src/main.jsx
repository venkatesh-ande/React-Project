import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import Footer from "./components/footer.jsx"
import Header from "./components/header.jsx"
import eren from "./images/eren-2.webp"
import mikasa from "./images/mikasa.jpeg"
import itachi from "./images/itachi.jpeg"
import obito from "./images/obito.jpeg"
import ichigo from "./images/ichigo.jpeg"
import luffy from "./images/luffy.jpeg"
import zoro from "./images/zoro.jpeg"
import sasuke from "./images/sasuke.jpeg"
import madara from "./images/madara.jpeg"

const root = createRoot(document.getElementById("root")).render(
  <>
    <Main />
  </>
  )
  
  function Main(){
  return(
    <>
    <Header />
     <App
    src={eren}
    name="Eren Yeager"
    nickname="Devil of Eldiea"
    anime="Attack on Titan"
    catagory="Fiction"
    />
    <App
    src={mikasa}
    name="Mikasa Ackerman"
    nickname="One Man Army"
    anime="Attack on Titan"
    catagory="Fiction"
    />
    <App
    src={itachi}
    name="Itachi Uchia"
    nickname="Clan killer"
    anime="Naruto"
    catagory="Action"
    />
    <App
    src={obito}
    name="Obito Uchia"
    nickname="Hacker Uchia"
    anime="Naruto"
    catagory="Action"
    />
    <App
    src={ichigo}
    name="Ichigo kurasiki"
    nickname="Substitute Soal Reaper"
    anime="Bleach"
    catagory="Action"
    />
    <App
    src={luffy}
    name="Monkey D Luffy"
    nickname="Joy Boy"
    anime="One piece"
    catagory="Action"
    />
        <App
    src={zoro}
    name="Roranavo Zoro"
    nickname="Pirate Hunter"
    anime="one piece"
    catagory="Action"
    />
        <App
    src={sasuke}
    name="Sasuke Uchia"
    nickname="The last  Uchia"
    anime="Naruto"
    catagory="Action"
    />
        <App
    src={madara}
    name="Madara Uchia"
    nickname="The Ghost of the Uchia"
    anime="Naruto"
    catagory="Action"
    />
    <Footer />
      
    </>
    
    )
    
  }
  