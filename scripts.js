
// const skills = document.getElementById("skills");
// const quests = document.getElementById('quests');
// const inventory = document.getElementById('inventory');
// const blueprint = document.getElementById('blueprint');

const skills_p = document.getElementById('pantalla__skills');
const quests_p = document.getElementById('pantalla__quests');
const default_p = document.getElementById('pantalla__default');
const map_p = document.getElementById('pantalla__map');



function selected(selected){
    // const id = document.getElementById(selected);

    if(selected == "skills"){
        skills_p.classList.add('block');
        quests_p.classList.add('none');
        default_p.classList.add('none');
        map_p.classList.add('none')
        skills_p.classList.remove('none');
        quests_p.classList.remove('block');
        default_p.classList.remove('block');
        map_p.classList.remove('block');
    }else if(selected == "quests"){
        skills_p.classList.add('none');
        quests_p.classList.add('block');
        default_p.classList.add('none');
        map_p.classList.add('none');
        skills_p.classList.remove('block');
        quests_p.classList.remove('none');
        default_p.classList.remove('block');
        map_p.classList.remove('block');
    }else if(selected == "map"){
        skills_p.classList.add('none');
        quests_p.classList.add('none');
        default_p.classList.add('none');
        map_p.classList.add('block');
        skills_p.classList.remove('block');
        quests_p.classList.remove('block');
        default_p.classList.remove('block');
        map_p.classList.remove('none');
    }
    else{
        skills_p.classList.add('none');
        quests_p.classList.add('none');
        default_p.classList.add('block');
        map_p.classList.add('none');
        skills_p.classList.remove('block');
        quests_p.classList.remove('block');
        default_p.classList.remove('none');
        map_p.classList.remove('block');
    }
}



// function circulo(numero){
//     const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]

//     array.forEach(valor){
//         if(valor == numero){
//             const si = document.getElementById(numero);
//             si.classList.add('block');
//         }else{
//             const no = document.getElementById(numero);
//             no.classList.add('none');
//         }
//     }
// }