let nomVoiture = "Peugeot";
let x = 50;
let z = 5;
let w = 10;
let d = z + w;


document.getElementById("demo").innerHTML = "z vaut " + z + " , w vaut " + w + " z+w = " + parseInt(z+w);
alert(d);

let prenom = "John", nom = "Doe",  age = 35;

alert(10*5);
alert(10/2);
alert(15%9);

let l = 10;
let k = 5;
l+=5;

function alertMess(mess){
    alert(mess);
}

alertMess("Salut tout le monde !");

function maFonctionDeRetour(){
    document.getElementById("demoRetour").innerHTML = "Bonjour!";
}

maFonctionDeRetour();

document.getElementById("monbouton").addEventListener("click",function(){
    alert("bouton");
})

document.getElementById("changeSurOver").addEventListener("mouseover",function (){
    this.style.backgroundColor = "red";
})

let txt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolor dolore officia ratione rem. Accusantium blanditiis dolores eveniet itaque nisi perferendis repudiandae sed, unde? Assumenda exercitationem expedita nisi rem repellat!";
let lentxt = txt.length;
alert(lentxt);

let str1 = "bonjour";
let str2 = " le monde";

alert(str1 + str2);

let tab = ["Renault","Volvo","Citroen"];
let mavoiture = tab[1];
tab[0] = "Ford";
alert(tab.length);
tab.pop();
console.log(tab);
tab.push("ferarie");

let rNumber = Math.random();
let fNumber = Math.trunc(17.3);

let nb1 = 15;
let nb2 = 10;

if(nb1 > nb2){
    alert("nb1 > nb2");
}

let nb3 = 10;
let nb4 = 10;

if (nb3 === nb4){
    alert("nb3 = nb4");
}


if(nb1 !== nb2){
    alert("nombreUn n'est pas égal à nombreDeux");
}


for(let i =0 ; i< 10; i++){
    console.log(i)
}

let tab2 = ["pomme","banane","poire"];

for(let i of tab2){
    console.log(i);
}

let o = 0;
while(o < 10){
    console.log(o);
    o++;
}

let t = 0;
while(t < 10){
    console.log(t);
    t+=2;
}

let m = 0;
while(t < 10){
    if(m === 5){
        alert("m = 5");
    }
    m++;
}
