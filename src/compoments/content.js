import style from "./content.module.scss";
import Recipe from "./Recipe";


function Content(){
    return  <div className=" flex-fill container p-20 ">
                <h1 className= "my-30"> Découvez nos nouvelles recettes</h1>
                <div className ={`card p-20 ${ style.contentCard}`}>
                    <div className={style.grid}>
                        <Recipe/>
                        <Recipe/>
                        <Recipe/>
                        <Recipe/>
                        <Recipe/>
                        <Recipe/>
                        <Recipe/>
                        <Recipe/>
                        <Recipe/>
                        <Recipe/>
                        <Recipe/>
                        <Recipe/>
                    </div>

                </div>
                
            </div>;
}

export default Content;