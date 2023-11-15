import {data} from "./recipes";

export async  function seedRecipes() {

 await fetch ("https://restapi.fr/api/recipes",{

    method: 'POST',
    headers: {
        "content-type":"application/json"
    },
    body: JSON.stringify (data),
 });

}