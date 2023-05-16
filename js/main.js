console.log("prova")

const team =[
    {
        name:'Wayne Barnett',
        role:'Founder & CEO',
        image:'wayne-barnett-founder-ceo.jpg',
    },
    {
        name:'Angela Caroll',
        role:'Chief Editor',
        image:'angela-caroll-chief-editor.jpg',
    },
    {
        name:'Walter Gordon',
        role:'Office Manager',
        image:'walter-gordon-office-manager.jpg',
    },
    {
        name:'Angela Lopez',
        role:'Social Media Manager',
        image:'angela-lopez-social-media-manager.jpg',
    },
    {
        name:'Scott Estrada',
        role:'Developer',
        image:'scott-estrada-developer.jpg',
    },
    {
        name:'Barbara Ramos',
        role:'Graphic Designer',
        image:'barbara-ramos-graphic-designer.jpg',
    },		
]

console.log("array team", team)

// for (let i = 0; i < team.length; i++) {
//     const member = team[i];
//     console.log(`il membro numero ${i} è _${member.name}_ con ruolo _${member.role}_ `, member['image'])//con le quadre serve '
// }
for (let i = 0; i < team.length; i++) {
    const member = team[i];

    // console.log(`------- MEMBRO DEL TEAM N°${i} -------`)

    // document.getElementById("content").innerText = member // esce object object: non si puo scrivere un oggetto nel dom

    // for (const key in member) {
    //         console.log(key, member[key])
    // } 
    // const contentHtml= `<div class="card">il membro numero ${i} è _${member.name}_ con ruolo _${member.role}_, immagine a: ${member.image} </div>`
    let contentHtml= `<div class="card">`
    contentHtml+=`<h2>${member.name}</h2>`
    contentHtml+=`<h3>${member.role}</h3>`
    contentHtml+=`<img src="./img/${member.image}" alt="${member.name}" />`
    contentHtml+=`</div>`
    const contentElement=document.getElementById("content")
    if (member.element!=0){
        
    }
    contentElement.innerHTML+=contentHtml
}
