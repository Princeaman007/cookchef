import { useContext} from "react";
import style from "../recipe.module.scss";
import { ApiContext } from "../../../../Context/ApiContext";

function Recipe({ recipe: {_id, title,image, liked}, toggleLikeRecipe, deleteRecipe, }) {
    const BASE_URL_API = useContext(ApiContext);


   async function handleClickLike(){
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

    async function handleDlickDelete(e){
        e.stopPropagation();
        try{
            const response = await fetch ( `${BASE_URL_API}/${_id}`,
            {method: 'DELETE'}
            );
            if(response.ok){
                deleteRecipe(_id);
            }
            } catch(e){
            console.log('Erreur');
        }


    }
    
           
    
    return (
        <div onClick={handleClickLike} className={style.recipe} >
            <i onClick={handleDlickDelete} className="fa-solid fa-xmark"></i>
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