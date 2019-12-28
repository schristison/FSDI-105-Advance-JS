//object literal as it's one salon

const salon = {
    name:"The Fashion Pets",
    phone:"5567893",
    address:{
        street:"Boughton Rd",
        number:"135-A"
    },
    workingHours:{
        days:"Mon - Fri",
        open:"9:00 am",
        close:"5:00 pm"
    },
    //to link the pets to the salon, add the following attribute
    //create an array to contain the pets
    pets:[],
    count:function(){
        alert("We have: "  + salon.pets.length + " pets registered.");
    }
}

//object destructuring

let {name,phone,address:{street,number},workingHours:{days,open,close}}=salon;
//console.log(name,phone,street);
document.getElementById("col1").innerHTML=`<h2 class="display-4"> ${name}</h2> <p class="lead">Phone Number: ${phone} </p>`;

document.getElementById("col2").innerHTML=`<p class="lead"> Address Information</p> <p class="lead"> Street: ${street} ${number}</p>`;

document.getElementById("col3").innerHTML=`<p class="lead"> It is open ${days} from ${open} to ${close}.</p>`;

//object constructor
class Pet{
    constructor(name,age,breed,gender,service,ownerName,phoneContact){
        this.name=name;
        this.age=age;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.ownerName=ownerName;
        this.phoneContact=phoneContact;  
        this.hunger=10;
        this.happiness=5;      
    }
    ownerInfo = function(){
        console.log("Owner Name: " + this.ownerName + "\n" + "Contact Phone: " + this.phoneContact);
        // \n is for a break line
    }
    feed = function(){
        this.hunger-=10;
        this.happiness+=10;
        console.log("Feeding ...");        
    }
    status = function(){
        console.log("Hunger: " + this.hunger + "\n" + "Happiness: " + this.happiness);
    }
    
}
const pet1 = new Pet("Shaggy",2,"Boxer","Male","Shower","Sandie","32968");
const pet2 = new Pet("Gentle",5,"Terrier","Male","Clipping","Mr Harris","365271");
const pet3 = new Pet("Bonnie",8,"Yorkie","Female","Spa","Emma","478378"); 

console.log(salon);

/*this  will print on the console:
console.log(pet1.ownerInfo());
Owner Name: Sandie
Contact Phone: 32968 */

//linking the salon and pets, we will use the push action into the array
salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);

console.log(salon);
console.table(salon.pets);

//display in alert message the number of pets using (length) - see count function in the object literal
salon.count();


//alert ("display the message here");
/* function (length.6){
    return()
}
alert("The number of pets is: " + (salon.pets.length)); */


//print in a division the information of the pets using a for loop
var text = " ";
for(var i=0;i<salon.pets.length;i++){
    
    console.log(salon.pets[i].name);
    console.log(salon.pets[i].age);
    console.log(salon.pets[i].breed);
    console.log(salon.pets[i].gender);
    console.log(salon.pets[i].service);
    console.log(salon.pets[i].ownerName);
    console.log(salon.pets[i].phoneContact);
    console.log("------------------");

   text += `<p> Name: ${salon.pets[i].name}<br> Age: ${salon.pets[i].age} <br> Breed: ${salon.pets[i].breed} <br> Gender: ${salon.pets[i].gender} <br> Service: ${salon.pets[i].service} <br> Owner: ${salon.pets[i].ownerName} <br> Phone Number: ${salon.pets[i].phoneContact} </p>`;

}

document.getElementById("content").innerHTML=text;



/* this console will print on the console, the pets details
console.log(pet1);
console.log(pet2);
console.log(pet3);
console.log(pet4);

Pet {name: "Shaggy", age: 2, ownerInfo: ƒ, feed: ƒ, status: ƒ, …}
myscript.js:63 Pet {name: "Sadie", age: 3, ownerInfo: ƒ, feed: ƒ, status: ƒ, …}
myscript.js:64 Pet {name: "Toby", age: 8, ownerInfo: ƒ, feed: ƒ, status: ƒ, …}
*/
 
/* pet1.feed();
pet1.status();
pet1.feed();
pet1.status();
pet1.feed();
pet1.status();

The above will show the Feeding and Status ...
myscript.js:54 Hunger: 0
Happiness: 15
myscript.js:51 Feeding ...
myscript.js:54 Hunger: -10
Happiness: 25
myscript.js:51 Feeding ...
myscript.js:54 Hunger: -20
Happiness: 35*/

