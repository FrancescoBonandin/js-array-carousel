const slider = [`img/01.webp`,`img/02.webp`,
 `img/03.webp`, `img/04.webp`, `img/05.webp` ]

 const imgArray = []

 let i = 0;
 let j = 1;
 const itemContainer = document.querySelector(".item-container")

 const previousBtn = document.querySelector(".my-button.previous")
 const nextBtn = document.querySelector(".my-button.next")

 for(i;i<slider.length;i++){

    let arrayElement = slider[i]

    // imgArray.push( `<img src = "${arrayElement} " class = "item" >`)

    // itemContainer.innerHTML += imgArray[i]
    const newItem = document.createElement("img")

    newItem.setAttribute("src", ` ${arrayElement} `)


    newItem.classList.add("item")

    itemContainer.append(newItem)

    if(slider[i] == slider[0]){

         newItem.classList.add("active")
        // itemContainer.querySelector(".item").classList.add("active")

    }
    
 }

 console.log("imgarray",imgArray)
 console.log("i",i)
 
  nextBtn.addEventListener("click", function(){
 
     document.querySelector(`img:nth-of-type(${j})`).classList.remove("active")
 
     j++
 
     document.querySelector(`img:nth-of-type(${j})`).classList.add("active")



 
  }
  )
 
  previousBtn.addEventListener("click", function(){
 
     document.querySelector(`img:nth-of-type(${j})`).classList.remove("active")
 
     j--
    
     document.querySelector(`img:nth-of-type(${j})`).classList.add("active")
 
  }
  )
 

