const slider = [`img/01.webp`,`img/02.webp`,
 `img/03.webp`, `img/04.webp`, `img/05.webp` ]

 let i = 0;
 const itemContainer = document.querySelector(".item-container")

 for(i;i<slider.length;i++){

    let arrayElement = slider[i]

    const newItem = document.createElement("img")

    newItem.setAttribute("src", ` ${arrayElement} `)

    newItem.classList.add("item")

    itemContainer.append(newItem)

    if(slider[i] == slider[0]){
        newItem.classList.add("active")
    }
    
 }

