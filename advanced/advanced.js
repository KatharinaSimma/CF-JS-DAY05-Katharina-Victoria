console.log(mangas);
var mangas = JSON.parse(mangas);
console.table(mangas);

//document.write(mangas[0].author);

for (i=0; i<mangas.length; i++){
    document.getElementById("result").innerHTML += `
    <p> My favorite manga is ${mangas[i].title}!</p>
        <li> ${mangas[i].author}</li>
        <li> ${mangas[i].read} </li>
        <div>
            <img src="${mangas[i].image}" width="250px">
        </div>
    <br> `
    console.log(mangas[i].image)
};

