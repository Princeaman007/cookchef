import Loading from "../../compoments/Loading/Loading";
import style from "./Homepage.module.scss";
import Recipe from "./components/Recipe/Recipe";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { ApiContext } from "../../Context/ApiContext";


function Homepage(){
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // filter
    const [filter, setFliter] =useState('');
    const BASE_URL_API = useContext(ApiContext);
    
    // charger les articles depuis ma base de bonnée en ligne.

    useEffect(() => {
        let cancel = false;
        async function fetchRecipes(){
            try{
                setIsLoading(true);
                const response = await fetch(BASE_URL_API);
                if(response.ok && !cancel) {
                    const recipes = await response.json();
                    setRecipes(Array.isArray (recipes) ? recipes : [recipes]);
                }
            } catch(e){
                console.log("Erreur")
            } finally{
                if(!cancel){
                    setIsLoading(false);
                }
                
            }
        }
        fetchRecipes();
        return () => (cancel = true);
    }, [BASE_URL_API]);





    // function 

    function handleIpunt(e){
        const filter =e.target.value;
        setFliter(filter.trim().toLowerCase());
    }


    return  <div className=" flex-fill container d-flex flex-column p-20 ">
                <h1 className= "my-30"> Découvez nos nouvelles recettes</h1>
                <div className ={`card d-flex flex-fill  flex-column p-20 mb-20 ${ style.contentCard}`}>
                    <div className={`d-flex flex-rowjustify-content-center align-items-center my-30 ${style.searchBar}`}>
                        <i className="fa-sharp fa-solid fa-magnifying-glass mr-15"></i>
                        <input onInput={handleIpunt} className="flex-fill" type="text" placeholder="Rechercher" />
                    </div>   
                    {isLoading ? (<Loading/>): 
                    <div className={style.grid}>
                    {recipes.filter( r => r.title.toLowerCase().startsWith(filter) ).map((r)=>(
                     <Recipe key={r._id}  title ={r.title} image ={r.image} />
                     ))}
                 </div>}
                    

                </div>
                
            </div>;
}

export default Homepage;