import Loading from "../../compoments/Loading/Loading";
import style from "./Homepage.module.scss";
import Recipe from "./components/Recipe/Recipe";
import { useState, useContext } from 'react';
import { ApiContext } from "../../Context/ApiContext";
import Search from "./components/Search/Search";
import { useFetchData } from "../../hooks/useFetchData";


function Homepage() {

    const [filter, setFilter] = useState('');
    const [page, setPage]= useState(1);
    const BASE_URL_API = useContext(ApiContext);
    const [[recipes, setRecipes], isLoading] = useFetchData(BASE_URL_API, page);
    
    // charger les articles depuis ma base de bonnée en ligne.


    function updateRecipe(updatedRecipe){
        setRecipes(recipes.map( r => r._id === updatedRecipe._id ? updatedRecipe : r ))
    }



    // function 

    // charger plus de recette
    


    return  <div className=" flex-fill container d-flex flex-column p-20 ">
                <h1 className= "my-30"> Découvez nos nouvelles recettes <small className={style.small}> -{recipes.length}</small> </h1>
                <div className ={`card d-flex flex-fill  flex-column p-20 mb-20 ${ style.contentCard}`}>
                    <Search setFilter={setFilter}/>
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