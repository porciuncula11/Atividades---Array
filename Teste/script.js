//Declaração da variável + colchetes
//const variableName = [];

//Exemplo 01
//const users = ["Ana", "Fernando", "Rafael", "Clara", "Maria"];
//users.push("Roger");

//console.log(users); //output: ['Ana', 'Fernando', 'Rafael', 'Clara', 'Maria', 'Roger'] 

//const person = ["Felipe", 30, "São Paulo", "Masculino", "22233366680"];

//person.pop();

//console.log(person); //output: ['Felipe', 30, 'São Paulo', 'Masculino']


//const fruits = ["Apple", "Orange", "Banana", "Pear"];

//fruits.shift();

//console.log(fruits)

//const jobs = ["Frontend", "Backend", "DevOps", "FullStack"];

//jobs.unshift("Desing");

//console.log(jobs); //output: ['Desing', 'Frontend', 'Backend', 'DevOps', 'FullStack']

//const jobs = ["Frontend", "Backend", "DevOps", "FullStar"];
//let indexOf = jobs.indexOf("Frontend");

//console.log(indexOf); // output: 0

// indexOf(elementoDePesquisa, pontoInicial)
// Ponto inicial, é o índece para iniciar a procura desse elemento dentro do array

//const fruits = ["Apple", "Orange", "Banana", "Pear"];
//let indexOf = fruits.indexOf("Orange", 3);

//console.log(indexOfSearch); //output:


//const jobs = ["Frontend", "Backend", "DevOps", "FullStack"];

//jobs.sort();

//console.log(jobs);


//const colors = ["Red", "Green", "White", "Black"];

//let join = colors.join(", ");

//console.log(join); // output: Red, Gren, White, Black



//A T I V I D A D E !!!!!!

//const colors = ["Red", "Green", "Blue", "Violet"];
//let colorFindIndex = colors.join(", ")

//console.log(colorFindIndex);


//const jobs = ["Letícia", "Felipe", "Gabriel", "Maria", "Paula"];
//users.sort();

//console.log(users);



function myFunction(a, b) {
    let array = [];

    if(a.indexOf(b) !== -1) {
        array.push(b + a);
        return array;
    } else {
        array.push(a + b);
        return array;
    }
}
console.log(myFunction("types", "s"))
