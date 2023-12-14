import Header from "./compoments/Header/Header";
import Homepage from "./page/homepage/Homepage";
import Footer from  "./compoments/Footer/Footer";
import style from "./App.module.scss";
import {seedRecipes} from "./data/seed";
import { useState } from "react";
import Admin from "./Admin/Admin";

seedRecipes();

function App() {
  const [page,setPage ] = useState("Homepage")
  return(
    <div className= {`d-flex flex-column ${style.appContenair}`}>
      <Header setPage = {setPage} />
      {page === 'Homepage' && <Homepage/> }
      {page === "Admin" && <Admin/>}
      <Footer/>
      
    
    
    </div>
  )
  
}

export default App;
