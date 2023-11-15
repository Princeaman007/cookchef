import Header from "./compoments/Header/Header";
import Homepage from "./page/homepage/Homepage";
import Footer from  "./compoments/Footer/Footer";
import style from "./App.module.scss";
//import {seedRecipes} from "./data/seed";

//seedRecipes();

function App() {
  return(
    <div className= {`d-flex flex-column ${style.appContenair}`}>
      <Header/>
      <Homepage/> 
      <Footer/>
      
    
    
    </div>
  )
  
}

export default App;
