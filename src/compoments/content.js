import style from "./content.module.scss";
import Recipe from "./Recipe";
import {data} from "../data/recipes";
import { useState } from "react";


function Content(){
    const recipes = data;
    // filter
    const [filter, setFliter] =useState('');
    // function 

    function handleIpunt(e){
        const filter =e.target.value;
        setFliter(filter.trim().toLowerCase());
    }


    return  <div className=" flex-fill container p-20 ">
                <h1 className= "my-30"> Découvez nos nouvelles recettes</h1>
                <div className ={`card d-flex flex-column p-20 ${ style.contentCard}`}>
                    <div className={`d-flex flex-rowjustify-content-center align-items-center my-30 ${style.searchBar}`}>
                        <i className="fa-sharp fa-solid fa-magnifying-glass mr-15"></i>
                        <input onInput={handleIpunt} className="flex-fill" type="text" placeholder="Rechercher" />
                    </div>   

                    <div className={style.grid}>
                       { recipes.filter( r => r.title.toLowerCase().startsWith(filter) ).map((r)=>(
                        <Recipe key={r._id}  title ={r.title} image ={r.image} />
                        ))}
                    </div>

                </div>
                
            </div>;
}

export default Content;