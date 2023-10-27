import style from "./recipe.module.scss";
import recipe from "../assets/images/Poulet au curry.jpg";



function Recipe() {
    return (
        <div className={style.recipe}  >
            <div className={style.imageContenair}>
                <img src={recipe} alt="recipe"/>

            </div>
            <div className={`${style.recipeTitle} d-flex align-items-center justify-content-center flex-row`} >
                <h3> Poulet au curry</h3>
            </div>



        </div>

    );
}

export default Recipe;