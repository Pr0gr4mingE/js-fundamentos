const dcheros = [

    {name: "Superman", class: "Super", city: "Metropolis"},
    {name: "Batman", class: "Vigilante", city: "Gotham city"},
    {name: "Green Arrow", class: "Vigilante", city: "Star city"},
    {name: "Flash", class: "Super", city: "Central city"},
    {name: "Green Lantern", class: "Super", city: "Coast city"}


]

for (let counter = 0; counter < dcheros.length; counter++) {

let callheros = (dcheros[counter])

if (callheros["class"] == "Vigilante") {

console.log(callheros)

}

}