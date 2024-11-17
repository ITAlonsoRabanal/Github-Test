class Activity {
    constructor(id, title, description, imgUrl) {
        // Usando llaves se mandaria un objeto, entonces se manda un solo parametro, 
        // y no importa el orden
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;

    }

}        // [1, 2, null, 4, 5, 6, 7, 8]

class Repository {
    constructor() {
        this.activities = [];
        this.idCounter = 0; 
    }

    getAllActivities() {
        return this.activities;
    }

    createActivity(title, description, imUrl) {
        this.idCounter++;
        let act = new Activity(this.idCounter, title, description, imUrl);
        this.activities.push(act);
    }

    deleteActivity(idToDelete) {
        const idSelected = this.activities.findIndex(activity => activity.id === idToDelete)
                if (idSelected !== -1) {
                    this.activities.splice(idSelected, 1);
                    console.log(`La actividad con id ${this } fue eliminada`);
                }
                else {
                    console.log(`no se encontro la actividad con id ${idSelected}`)
                }
            }
        }


const repository = new Repository();

                                /* TESTING */



// let repo1 = new Repository();

// repo1.createActivity(4, "deporte", "sano y divertido", "url1");
// repo1.createActivity(7, "ajedrez", "concentracion", "url2");
// repo1.createActivity(1, "cine", "satisfactorio", "url3");

// console.log(repo1.getAllActivities());

// repo1.deleteActivity(7);

// console.log(repo1.getAllActivities());


// --------------- ----------------------------

                                    /*   INSTRUCCIONES */

// seleccionar el input de titulo
// seleccionar el input de decripcion
// seleccionar el input de url
// seleccionar el boton

// seleccionar el conteneor de tarjetas

// handler de la actividad

// cuando se aprieta el boton :
    // Tome los valores de los input
    // Checkear que los valores no esten vacios.      Retornar alerta si es necesario
    //repository.createActivity(tilte, desc, imgurl)

// metodo map, recibe una callback que recibe un obj y retorna una tarjeta

// convertir todos los objetos activity a tarjetas de html
// appendear todas las tarjetas al contenedor

// Oprimo el boton
// -------------------------------

                                 /*  Anterior diseño de la logica (SIN USO) */ 
    
                //     const handlerActivities = function() {
                //        const valueTitle = newTitle.value;
                //        const valueDescription = newDescription.value;
                //        const valueUrl = newUrl.value;

                //       if(valueTitle =="" || valueDescription =="" || valueUrl ==""){
                //         console.log(`no creo nada`);
                //       }
                //       else {
                //         repository.createActivity(valueTitle, valueDescription, valueUrl);
                //         const newDiv = document.createElement("div");
                //         const newImage = document.createElement("img");
                //         const newTitulo = document.createElement("h3");
                //         const newDescripcion = document.createElement("p");
                //         newTitulo.textContent = valueTitle;
                //         newDescripcion.textContent = valueDescription;
                //         newImage.classList.add("logo");
                //         newImage.src = valueUrl;
                //         newDiv.classList.add("cards");
                //         // newTitle.value = '';
                //         // newDescription.value = '';
                //         // newUrl.value = '';
                //         newDiv.addEventListener("click", (event) => {             
                //             event.target.remove(); 

                //         })       
                //         newActivitiesContainer.appendChild(newDiv)       
                //         newDiv.appendChild(newTitulo);
                //         newDiv.appendChild(newDescripcion);  
                //         newDiv.appendChild(newImage);

                //             console.log(`creo la actividad`);
                //         }
                //    }

// ---------------------------------------------------------

                                                        /*  Logica definitiva para crear actividades  */

const newActivitiesContainer = document.getElementById("userActivities");
const botonFinal = document.getElementById("actButton");

// Funcion que recibe una instancia de activity y la convierte en elemento HTML

                
const activityToHtml = (Activity) => {
    const {title, description, imgUrl } = Activity;
    const newImage = document.createElement("img");
    const newTitulo = document.createElement("h3");
    const newDescripcion = document.createElement("p");
    newTitulo.innerHTML = title;
    newDescripcion.innerHTML = description;
    newImage.src = imgUrl;
    newImage.alt = title;
    newImage.classList.add("logo");
    newTitulo.classList.add("activityText");
    newDescripcion.classList.add("activityText");
    const newDiv = document.createElement("div");
    newDiv.classList.add("cards"); 
    newDiv.addEventListener("click", () => {             
    newDiv.remove(); 
    repository.deleteActivity(Activity.id);
    if(repository.activities.length === 0) {
        newActivitiesContainer.innerHTML = `<h2>Aqui irán tus actividades</h2>`;
    }
    })         
    newDiv.appendChild(newTitulo);
    newDiv.appendChild(newDescripcion);  
    newDiv.appendChild(newImage);
  return newDiv;
}

                    /* ALTERNATIVA usando solo un innerHTML */ 

/*
const newActivity = document.createElement("div")
    new.Activity.innerHTML = ` 
        <h3 class ="activityText">${title}</h3>       // estas 3 lineas hacen 1 innerHTML que haga todo
        <p>${description}</p>
         <button onclick="eliminarActividad(${id})">Eliminar</button>

    
    `
------------*/

// Funcion que hace el mapeo

const mapActivities = () => {
    newActivitiesContainer.innerHTML = ``;
    const allAct = repository.getAllActivities();
    const mapeo = allAct.map(activityToHtml);
        mapeo.forEach(element => {
            newActivitiesContainer.appendChild(element);
    })
    // Atajo con spreadOperator
    // newActivitiesContainer.apped(...allAct)
}

// handler del boton
// Lo ideal seria hacerlo con un formdata


const handlerActivities = () => {                                      
    const newTitle = document.getElementById("boxTitulo");
    const newDescription = document.getElementById("boxDescription");
    const newUrl = document.getElementById("boxUrl");
    const valueTitle = newTitle.value;
    const valueDescription = newDescription.value;
    const valueUrl = newUrl.value;
    if(valueTitle =="" || valueDescription =="" || valueUrl ==""){
        // Equivalente: if(!valueTitle || !valueDescription || !valueUrl)
        // !valueTitle devuelve true si valueTitle esta vacio 
            alert(`Completa todos los campos por favor`);
    }
     else {
        repository.createActivity(valueTitle, valueDescription, valueUrl);
        newTitle.value = '';
        newDescription.value = '';
        newUrl.value = '';
        mapActivities();
    
    }


}


botonFinal.addEventListener("click", handlerActivities);