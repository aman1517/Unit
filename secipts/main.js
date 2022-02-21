
async function makeAPICall(url){
    try{
        let res= await fetch(url);
        let data= await res.json();
        return data;
    }catch(error){
       console.log("error:",error)
    }
}
function appendPic(data,parent){
    data.forEach(element => {
        let div=document.createElement("div")
        let title=document.createElement("p")
        title.innerText=element.title
        let content=document.createElement("p")
        content.innerText=element.content
        let image=document.createElement("img")
        image.src=element.urlToImage
        div.append(title,content,image);

        div.onclick=()=>{
            localStorage.setItem("clicked_image",JSON.stringify(element));
            window.location.href="info.html"
        }
        parent.append(div)



    });
}



export {makeAPICall,appendPic}