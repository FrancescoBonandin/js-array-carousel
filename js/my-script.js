const slider = [`img/01.webp`,`img/02.webp`,
 `img/03.webp`, `img/04.webp`, `img/05.webp` ]

 const imgArray = []

 let i = 0;
 let j = 0;


 const itemCollection = [];
 const overlayCollection = [];

 const itemContainer = document.querySelector(".item-container")

 const previousBtn = document.querySelector(".my-button.previous")
 const nextBtn = document.querySelector(".my-button.next")

 const myContainer = document.querySelector(".my-container")

 const wrapper = document.createElement("div")

 const toggler = document.querySelector(".toggler")

 myContainer.append(wrapper)

 wrapper.append(itemContainer)

 wrapper.classList.add("wrapper")

 const thumbnailGallery = document.createElement("div")
 
 thumbnailGallery.classList.add("thumbnail-gallery")
 
 wrapper.append(thumbnailGallery)


 for(i;i<slider.length;i++){

    let arrayElement = slider[i]

    // imgArray.push( `<img src = "${arrayElement} " class = "item" >`)

    // itemContainer.innerHTML += imgArray[i]
    const newItem = document.createElement("img")
    newItem.setAttribute("src", ` ${arrayElement} `)
    
    
    newItem.classList.add("item")
    
    itemContainer.append(newItem)

    const newThumbnailItemContainer = document.createElement("div")

    const newThumbnailItem = document.createElement("img")
    const overlay = document.createElement("div")

    itemCollection.push(newItem)
    overlayCollection.push(overlay)

    newThumbnailItem.setAttribute("src", `${arrayElement}`)

    
    thumbnailGallery.append(newThumbnailItemContainer)

    
    newThumbnailItemContainer.append(newThumbnailItem)
    newThumbnailItemContainer.append(overlay)

    overlay.classList.add("overlay")

    newThumbnailItemContainer.classList.add("thumbnail-item-container")
    newThumbnailItemContainer.setAttribute("type","button")

    newThumbnailItem.classList.add("thumbnail-item")

    if(slider[i] == slider[0]){

         newItem.classList.add("active")

        // itemContainer.querySelector(".item").classList.add("active")

        newThumbnailItemContainer.querySelector(".overlay").classList.add("hide")
    }
    
    
    
    newThumbnailItemContainer.addEventListener("click",
        function(){
    
        for(let index = 0; index < overlayCollection.length;index++){
    
            if(overlayCollection[index].classList.contains("hide") &&
               itemCollection[index].classList.contains("active")){
                
               
                overlayCollection[index].classList.remove("hide")

                itemCollection[index].classList.remove("active")
                
            }
            
            
            
            
        }
        
        overlay.classList.add("hide")
        newItem.classList.add("active")
    
    }
    )
    
}



//  console.log("imgarray",imgArray)
//  console.log("i",i)




nextBtn.addEventListener("click", function(){
    
  
    //  document.querySelector(`.item-container > img:nth-of-type(${j})`).classList.remove("active")

    //  document.querySelector(`.thumbnail-gallery > 
    //                             div.thumbnail-item-container:nth-of-type(${j}) >
    //                             .overlay`).style.display="block"
        
    for(let index = 0; index < overlayCollection.length;index++){
    
        if(overlayCollection[index].classList.contains("hide") &&
           itemCollection[index].classList.contains("active")){
            
           
            overlayCollection[index].classList.remove("hide")

            itemCollection[index].classList.remove("active")

            j=index

            index = overlayCollection.length
            
        }
        
        j
        
        
    }
 
        j++;

        
        
        if(j > slider.length - 1){
            
            j=0;      
            
        }
        
        itemCollection[j].classList.add("active");
        overlayCollection[j].classList.add("hide");

        



    //  document.querySelector(`.item-container > img:nth-of-type(${j})`).classList.add("active")
     
    //  document.querySelector(`.thumbnail-gallery > 
    //                             div.thumbnail-item-container:nth-of-type(${j}) >
    //                             .overlay`).style.display="none"



 
  }
  )
 
  previousBtn.addEventListener("click", function(){
 
    //  document.querySelector(`.item-container > img:nth-of-type(${j})`).classList.remove("active")

    //  document.querySelector(`.thumbnail-gallery > 
    //                             div.thumbnail-item-container:nth-of-type(${j}) >
    //                             .overlay`).style.display="block"

    for(let index = 0; index < overlayCollection.length;index++){
    
        if(overlayCollection[index].classList.contains("hide") &&
           itemCollection[index].classList.contains("active")){
            
           
            overlayCollection[index].classList.remove("hide")

            itemCollection[index].classList.remove("active")

            j=index

            index = overlayCollection.length
            
        }
        
        j
        
        
    }

     j--

     if(j<0){
        
        j=slider.length - 1 
    
     }

     itemCollection[j].classList.add("active");
     overlayCollection[j].classList.add("hide");


    
    //  document.querySelector(`.item-container > img:nth-of-type(${j})`).classList.add("active")

    //   document.querySelector(`.thumbnail-gallery > 
    //                             div.thumbnail-item-container:nth-of-type(${j}) >
    //                             .overlay`).style.display="none"


  }
  )
 

    toggler.addEventListener("click", function(){

        thumbnailGallery.classList.toggle("show")

    }
    )

   