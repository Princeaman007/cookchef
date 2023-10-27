import Header from "./compoments/Header";
import Content from "./compoments/content";
import Footer from "./compoments/footer";
import style from "./App.module.scss";

function App() {
  return(
    <div className= {`d-flex flex-column ${style.appContenair}`}>
      <Header/>
      {
      <Content/> }
      <Footer/>
      
    
    
    </div>
  )
  
}

export default App;
