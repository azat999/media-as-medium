let data = []

const newpage = fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json => {
    return json.result

})

let pageObject = () => {
    pageObject.then(
        (output)=>{
            for(const page_temp in output){
                if(Object.hasOwnProperty.call(output, page_temp)){
                    const itemspage = output[page_temp]
                    data.push(itemspage)
                }
            }
            return data
        }
    ).then((data) => {let newpageObject = data[page_]})
        let imgBlock = document.getElementById("title-block-page")
        imgBlock.src = `./img/img2.svg`

        let titlePage2 = document.getElementById("title-page2")
        titlePage2.innerText = `${pageObject.name}`;

        let descr2 = document.getElementById(body) 
}   

pageObject()