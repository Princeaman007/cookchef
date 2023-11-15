import { useState } from "react";
import style from "../recipe.module.scss";

function Recipe({ title , image }) {

    const [liked, setLiked] = useState(false);
    function handleClick(){
            setLiked(!liked);
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