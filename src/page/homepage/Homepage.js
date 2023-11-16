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
    const [page, setPage]= useState(1);
    const BASE_URL_API = useContext(ApiContext);
    
    // charger les articles depuis ma base de bonnée en ligne.

    useEffect(() => {
        let cancel = false;
        async function fetchRecipes(){
            try{
                setIsLoading(true);
                const response = await fetch(`${BASE_URL_API}?skip=${(page-1) * 9}&limit=9`); 
                if(response.ok && !cancel) {
                    const newRecipes = await response.json();
                    setRecipes( x => Array.isArray (newRecipes) ?[...x, ...newRecipes] : [...x, newRecipes]);
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
    }, [BASE_URL_API,page]);

    function updateRecipe(updatedRecipe){
        setRecipes(recipes.map( r => r._id === updatedRecipe._id ? updatedRecipe : r ))
    }



    // function 

    function handleIpunt(e){
        const filter =e.target.value;
        setFliter(filter.trim().toLowerCase());
    }

    // charger plus de recette
    


    return  <div className=" flex-fill container d-flex flex-column p-20 ">
                <h1 className= "my-30"> Découvez nos nouvelles recettes <small className={style.small}> -{recipes.length}</small> </h1>
                <div className ={`card d-flex flex-fill  flex-column p-20 mb-20 ${ style.contentCard}`}>
                    <div className={`d-flex flex-rowjustify-content-center align-items-center my-30 ${style.searchBar}`}>
                        <i className="fa-sharp fa-solid fa-magnifying-glass mr-15"></i>
                        <input onInput={handleIpunt} className="flex-fill" type="text" placeholder="Rechercher" />
                    </div>   
                    {isLoading && !recipes.length ? (<Loading/>): 
                    <div className={style.grid}>
                    {recipes.filter( r => r.title.toLowerCase().startsWith(filter) ).map((r)=>(
                     <Recipe key={r._id}  recipe ={ r } toggleLikeRecipe= {updateRecipe}/>
                     ))}
                 </div>}
                 
                    <div className="d-flex flex-row justify-content-center align-items-center p-20">
                        <button onClick={()=> setPage(page + 1)} className="btn btn-primary"> Charger plus de recettes</button>
                    </div>
                        
                </div>
                
            </div>;
}

export default Homepage;