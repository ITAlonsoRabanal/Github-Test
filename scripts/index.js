class Activity {
    constructor(id, title, description, imgUrl) {
        // Usando llaves se mandaria un objeto, entonces se manda un solo parametro, 
        // y no importa el orden
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;

    }

}    

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

// Funcion que hace el mapeo

const mapActivities = () => {
    newActivitiesContainer.innerHTML = ``;
    const allAct = repository.getAllActivities();
    const mapeo = allAct.map(activityToHtml);
        mapeo.forEach(element => {
            newActivitiesContainer.appendChild(element);
    })

}

// handler del boton

const handlerActivities = () => {                                      
    const newTitle = document.getElementById("boxTitulo");
    const newDescription = document.getElementById("boxDescription");
    const newUrl = document.getElementById("boxUrl");
    const valueTitle = newTitle.value;
    const valueDescription = newDescription.value;
    const valueUrl = newUrl.value;
    if(valueTitle =="" || valueDescription =="" || valueUrl ==""){
            alert(`Completa todos los campos por favor`);
    }
     else {
        repository.createActivity(valueTitle, valueDescription, valueUrl);
        // newTitle.value = '';
        // newDescription.value = '';
        // newUrl.value = '';
        mapActivities();
    
    }


}


botonFinal.addEventListener("click", handlerActivities);