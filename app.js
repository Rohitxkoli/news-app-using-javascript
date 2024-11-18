let img = document.querySelector("#news-image");
let heading = document.querySelector("#heading");
let para = document.querySelector("#para");
let url = document.querySelector("#url");
let nextbtn = document.querySelector("#next");
let author = document.querySelector("#autor");
let para2 = document.querySelector("#para2")
let submitbtn = document.querySelector("#submit");
let b = document.querySelector("#time");
let previousBtn = document.querySelector("#prev");



let i=0;

 window.onload = function(){
  nextbtn.click();
 }

nextbtn.addEventListener("click",()=>{

const api = 'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json';

let promise = fetch(api);

promise.then((a)=>{
  return a.json()
}).then((data)=>{
    
   
  img.src = data.articles[i].urlToImage;
  author.innerText =  `Author : ${data.articles[i].author}`;
  para2.innerText = data.articles[i].content;
 let rowtext = `${Date(Date.now()).toString()}`;
 let newtext = rowtext.substring(0,16);

   b.innerText = newtext;
 

  heading.innerText = data.articles[i].title;
  para.innerText = data.articles[i].description;
  url.href = data.articles[i].url;

})
.catch((a)=>{
  console.log(a);
  
}).finally(()=>{
  console.log('something is wrong');
  
});
i++;
})

previousBtn.addEventListener("click",()=>{
  const api = 'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json';

let promise = fetch(api);

promise.then((a)=>{
  return a.json()
}).then((data)=>{
   console.log(data);
   
  img.src = data.articles[i].urlToImage;
  author.innerText =  `Author : ${data.articles[i].author}`;
  para2.innerText = data.articles[i].content;
 let rowtext = `${Date(Date.now()).toString()}`;
 let newtext = rowtext.substring(0,16);

   b.innerText = newtext;

 

  heading.innerText = data.articles[i].title;
  para.innerText = data.articles[i].description;
  url.href = data.articles[i].url;

 if(i<=0)
 {
  i = Number(data.articles.length-1);
 }
 
  

})

i--;

})