function diaDaSemana(){
    let listaDeDias = ["Quinta","Sexta","Sábado","Domingo", "Segunda", "Terça", "Quarta"];
    return listaDeDias[timeFixed%7]; //returning day of the week based on OS
}

function materiasAEstudar(dict){
    return dict[`${diaDaSemana()}`]; //return subjects from "materias" 
}

let time = new Date().getTime()/(1000*60*60*24); //converting time from miliseconds to days since Jan 1st 1970
let timeFixed = Math.floor(time); //rounding

let materias = {
    Quinta: "Matemática, Filosofia e Sociologia",
    Sexta: "Física e Biologia",
    Sábado: "Química e Português", 
    Domingo: "Nada", 
    Segunda:  "Matemática e Português",
    Terça: "Física, História e Geografia", 
    Quarta: "Química e Português"
}; //subjects

console.log(`As matérias que você tem que estudar hoje, ${diaDaSemana()}, são:\n${materiasAEstudar(materias)}`);

