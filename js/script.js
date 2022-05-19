/*
    Our Team js
*/

// costanti del DOM
const teamContainer = document.querySelector('.team-container');
// array oggetti card team
const teamCardArr = [
    {
        'nome' : 'Angela Caroll',
        'ruolo' : 'Chief Editor',
        'foto' : 'img/angela-caroll-chief-editor.jpg'
    },
    {
        'nome' : 'Walter Gordon',
        'ruolo' : 'Office Manager',
        'foto' : 'img/walter-gordon-office-manager.jpg'
    },
    {
        'nome' : 'Angela Lopez',
        'ruolo' : 'Social Media Manager',
        'foto' : 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        'nome' : 'Scott Estrada',
        'ruolo' : 'Developer',
        'foto' : 'img/scott-estrada-developer.jpg'
    },
    {
        'nome' : 'Barbara Ramos',
        'ruolo' : 'Graphic Designer',
        'foto' : 'img/barbara-ramos-graphic-designer.jpg'
    }
];
for(let i=0; i<teamCardArr.length; i++){
    addTeamCardDom(teamCardArr[i]);
}

// funzioni del programma
function addTeamCardDom(teamCardObject){
    const teamCard = document.createElement('div');
    teamCard.classList.add('team-card');
    const cardImage = document.createElement('div');
    cardImage.classList.add('card-image');
    const img = document.createElement('img');
    const cardText = document.createElement('div');
    cardText.classList.add('card-text');
    img.src = teamCardObject.foto;
    cardText.innerHTML = `<h3>${teamCardObject.nome}</h3><p>${teamCardObject.ruolo}</p>`;
    cardImage.append(img);
    teamCard.append(cardImage);
    teamCard.append(cardText);
    teamContainer.append(teamCard);
}

/*
    parte bonus del form
*/
// costanti del DOM
const nameMember = document.getElementById('name');
const roleMember = document.getElementById('role');
const imgMember = document.getElementById('image');
const addButton = document.getElementById('addMemberButton');
addButton.addEventListener('click',addTeamCardObject);

// funzioni del programma
function addTeamCardObject(){
    let cardObject = {
        'nome' : nameMember.value,
        'ruolo' : roleMember.value,
        'foto' : imgMember.value
    };
    nameMember.value = '';
    roleMember.value = '';
    imgMember.value = '';
    teamCardArr.push(cardObject);
    addTeamCardDom(cardObject);
}