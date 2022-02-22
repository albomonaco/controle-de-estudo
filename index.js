function diaDaSemana(){
    let time = new Date().getTime()/(1000*60*60*24);
    let timeFixed = Math.floor(time);
    let listaDeDias = ["Quinta","Sexta","Sábado","Domingo", "Segunda", "Terça", "Quarta"];
    
    return listaDeDias[timeFixed%7];   
}

function materiasAEstudar(dict, dia){
    return dict[`${dia}`];
}

let dia = diaDaSemana();

let materias = {
    Quinta: "Matemática, Filosofia e Sociologia",
    Sexta: "Física e Biologia",
    Sábado: "Química e Português", 
    Domingo: "Nada", 
    Segunda:  "Matemática e Português",
    Terça: "Física, História e Geografia", 
    Quarta: "Química e Português"
};

console.log(`As matérias que você tem que estudar hoje, ${diaDaSemana()}, são:\n${materiasAEstudar(materias, dia)}`);

