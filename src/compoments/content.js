import style from "./content.module.scss";
import Recipe from "./Recipe";
import {data} from "../data/recipes";


function Content(){
    const recipes = data;

    return  <div className=" flex-fill container p-20 ">
                <h1 className= "my-30"> Découvez nos nouvelles recettes</h1>
                <div className ={`card p-20 ${ style.contentCard} br`}>
                    <div className={style.grid}>
                       { recipes.map((r)=>(
                        <Recipe key={r._id}  title ={r.title} image ={r.image} />
                        ))}
                    </div>

                </div>
                
            </div>;
}

export default Content;