
function creatPost (id,name, body,id2,id3,img,btn){
   


    let newPost = document.createElement("div");
    newPost.className ="post-item"
    newPost.id=id;

    let newPost2 = document.createElement("div");
    newPost2.className ="post-item-2"
    newPost2.id=id;

    

    let title = document.createElement("a")
    title.className ="post-title";
    title.href="newpage.html"
    title.innerHTML = name;

    let descr= document.createElement("p")
    descr.className = "post-text";
    descr.innerHTML = body;

    let newDiv = document.createElement("div");
    newDiv.className ="post-item-3"
    newDiv.id=id3;

    
    let img_photos=document.createElement("img")
    img_photos.src = `./img/img2.svg`
    img_photos.className = "title_img"
    img_photos.innerHTML = img;

    let newButton=document.createElement("a")
    newButton.href="newpage.html?title=a&body=p"
    newButton.className = "btn";
    newButton.appendChild(
        
        document.createTextNode("More")
        
    )
  
    newPost.appendChild(newPost2)

    newPost2.appendChild(title);
    newPost2.appendChild(descr);
    newPost.appendChild(newDiv)
    newDiv.appendChild(img_photos);
    newPost2.appendChild(newButton)
  
    
    document.getElementById("posts").appendChild(newPost);
    
    
    
}






function addPost(){

    const FormData = new FormData();
    FormData.append('title',form.querySelector("[name='title']").value)

    const form = document.querySelector("form");
        let data ={
            title:form.querySelector("[name='title']").value,
            body:form.querySelector("[name='body']").value,
            userId:form.querySelector("[name='number']").value,
        }


    fetch("https://jsonplaceholder.typicode.com/posts",{
        method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: JSON.stringify(data),
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then(response => {return response.json()}).then(response => console.log(response))
  
}

// document.querySelector("form").addEventListener("submit", (e)=>{
//     e.preventDefault();

//     addPost();
// })


const sendRequest = (url, method, data) =>{
    return fetch(url)
}


sendRequest('https://jsonplaceholder.typicode.com/posts', 'GET').then (data =>{
    return data.json();


   
}).then(response =>{
    response.forEach((item) => creatPost(item.id, item.title, item.body))
})
.catch(err =>console.log(err));

let isMainContent = true;




// const image = document.querySelector()
// const urlImg ="http://aws.random.cat/meow";

// async function fetchHandler(){
//     try{
//         const response2 = await fetch(urlImg)
//         const data2 = await response2.json();
        
//     }catch(err){
//         console.log(err)
//     }
// }

// fetchHandler();