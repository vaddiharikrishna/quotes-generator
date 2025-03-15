const fun = document.getElementById("quote");
const sad = document.getElementById("author");


// API  FETCH IN JS USE FOR  ASYNC AND AWAIT PROCESS
var api = "https://api.quotable.io/random";
async function getquote(url) {
    const res= await fetch(url);
    var data = await res.json();
    fun.innerHTML = data.content;
    sad.innerHTML = data.author;
    
}
getquote(api);


function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + fun.innerHTML  + "----by" + sad.innerHTML,"Tweet Window", "width=600,height=300");  
}
 

  



// API  FETCH IN JS USE FOR  ASYNC AND AWAIT PROCESS
// var api = "https://api.quotable.io/random";
// async function getquote(url) {
//     const res= await fetch(url);
//     var data = await res.json();
//     console.log(data);
// }
// getquote(api);



// PROMISE USES TO FETCH API IN JS
// fetch("https://api.quotable.io/random")
// .then((res) => res.json());
// .then((data) => console.log(data));


