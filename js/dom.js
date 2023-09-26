// Obtener elementos 
//Id
//Clase <-- obtenemos varios elementos que coinciden
// querySelector solo regresa el primero nodo que coincida (ID, Class)
// querySelectorAll obtiene una lista de nodos

const title = document.getElementById('title1')

const subtitle = document.getElementsByClassName('subtitulo')

const secondTitle = document.querySelector('.subtitulo'); 

const subtitles = document.querySelectorAll('.subtitulo');

console.log(title, subtitle, secondTitle);

secondTitle.value = "DOM API";

// Creacion del perfil del usuario
const user = {
    name: 'Jane Doe',
    age: 25,
    email: 'jane@mail.com',
    favFilms: ['Spencer', 'Ice Age 3', 'Se7en', 'Inception', 'SAW']
}

function createuser(user){
    
    document.getElementById('username').textContent = user.name;
    document.getElementById('age').textContent = user.age;
    document.getElementById('mail').textContent = user.email;
    
    const ul = document.getElementById('fav-films');
    
    user.favFilms.forEach(film => {
        const li = document.createElement('li');
        li.textContent = film;
        ul.appendChild(li);
    })
    
}

createuser(user);

//Eventos 
const inputName = document.getElementById('name');
const userName = document.getElementById('username');

// inputName.addEventListener('input', e =>{
//     console.log(e.target.value);
//     userName.textContent = e.target.value;
// })

const profileBtn = document.getElementById('profileBtn');

profileBtn.addEventListener('click', () =>{ // Cada que den click se ejecuta
    userName.textContent = inputName.value; //la funcion anonima
})

const users = [
    {
        id: 1,
        user_name: 'Zabdiel Diaz',
        description: 'Me gustan los conejos',
        age: '25',
        fav_music: {
            bands: [
                'Rammstein', 'Interpol', 'TOOL', 'Black Sabbath'
            ]
        }
    },
    {
        id: 2,
        user_name: 'Fernando Aguilar',
        description: 'Me gusta el calor',
        age: '22',
        fav_music: {
            bands: [
                'Los Temerarios', 'Grupo Frontera', 'Conjunto Primavera', 'Tigres del Norte'
            ]
        }
    }
]



////////////////////////////////////////
// - Obtener la info
// -Crear un contenedor para perfil clase = profile
// -Crear elemento para user_name
// -Crear elemento para descripcion
// -Crear elemento para age
// -Crear lista de bandas. --> iterar por cada banda

const CARD_SECTION = document.getElementById('profiles');

const createCard = () => {
    const card = document.createElement('div');
    card.classList.add('profile', 'container');
    return card;
}


const createDescription = () => {
    const userElements = {
        user_name: document.createElement('h2'),
        age: document.createElement('h3'),
        description: document.createElement('p'),
        bands: [],
    }
    return userElements;
}

const populateElements = (user, userElements) => {
    userElements.user_name.textContent = user.user_name;
    userElements.age.textContent = user.age;
    userElements.description.textContent = user.description;

    const bandList = user.fav_music.bands.map(e => {
        const pElement = document.createElement('p');
        pElement.textContent = e;
        return pElement;
    })

    userElements.bands = bandList;
    return userElements;
}


const renderElements = (card, elements) => {
    card.append(elements.user_name, elements.age, elements.description);
}

users.forEach(user => {
    const card = createCard();
    const userElements = createDescription();

    const elementsWithData = populateElements(user, userElements);
    renderElements(card, elementsWithData);
    CARD_SECTION.append(card);
    
})


// EJERCICIO
// 1. Agregar las bandas
// PUSH
// evitar las bandas para el ejercicio 2
// 2. Obtener la info del usuario desde inputs y mostrar en tarjetas
// Al menos debe tener 2 commits -- 17 lineas 