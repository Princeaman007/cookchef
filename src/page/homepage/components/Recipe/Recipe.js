import { useContext, useState } from "react";
import style from "../recipe.module.scss";
import { ApiContext } from "../../../../Context/ApiContext";

function Recipe({ recipe: {_id, title,image, liked}, toggleLikeRecipe }) {
    const BASE_URL_API = useContext(ApiContext);


   async function handleClick(){
    try {
        const response = await fetch(`${BASE_URL_API}/${_id}`,{

            method:"PATCH",
            headers : {
                    "content-type": "application/json"
            },
            body: JSON.stringify({
                liked: !liked
            })
        });
        if (response.ok){
            const updatedRecipe = await response.json();
            toggleLikeRecipe(updatedRecipe);
        }
        
    } catch (e) {
        console.log("Erreur");
    }
           
    }
    return (
        <div onClick={handleClick} className={style.recipe}  >
            <div className={style.imageContenair}>
                <img src={image} alt="recipe"/>

            </div>
            <div className={`${style.recipeTitle} d-flex align-items-center justify-content-center flex-column`} >
                <h3 className="mb-10">{title} </h3>
                <i className= {`fa-solid fa-heart ${liked ? "text-primary" :""}`}></i>
            </div>



        </div>

    );
}

export default Recipe;