document.addEventListener("DOMContentLoaded", () =>{
    proj1Info()
    proj2Info()
    nav()


})

function proj1Info(){

    const button = document.getElementById("proj1")
    button.addEventListener("click", () => {
       
        let para = document.createElement("p")

        para.textContent = `A guessing game in which you attempt to guess a word, letter by letter.`
        para.className = "para"


        button.replaceWith(para)

        let breaK = document.createElement("br")
        para.appendChild(breaK)

    

        let link = document.createElement("a")
        link.href = "https://github.com/teyannaearle/Snowman-Game"

        let gitLink = document.createElement("button")

        gitLink.textContent = `Check it out!`
        gitLink.className = `button`

      
        link.appendChild(gitLink)    
        para.appendChild(link)
       
        let breaK2 = document.createElement("br")
        para.appendChild(breaK2)
      

        let lessButton = document.createElement("button")

        lessButton.textContent =`See Less`
        lessButton.className = `button`

        para.appendChild(lessButton)



    lessButton.addEventListener("click", () => {
        let ogButton = document.createElement("button")

        ogButton.textContent = "More Info"
        ogButton.id = "proj1"
        ogButton.className = "button"


        para.replaceWith(ogButton)
        proj1Info()
     


    })    
    

    })


}


function proj2Info(){

    const button = document.getElementById("proj2")
    button.addEventListener("click", () => {
       
        let para = document.createElement("p")

        para.textContent = `Journey into a strange new world and prove that a person's choices can trump fate in this text based adventure.`
        para.className = "para"


        button.replaceWith(para)

        let breaK = document.createElement("br")
        para.appendChild(breaK)

    

        let link = document.createElement("a")
        link.href = "https://github.com/teyannaearle/Hellington"

        let gitLink = document.createElement("button")

        gitLink.textContent = `Check it out!`
        gitLink.className = `button`


      
        link.appendChild(gitLink)
        para.appendChild(link)
       
        let breaK2 = document.createElement("br")
        para.appendChild(breaK2)
      

        let lessButton = document.createElement("button")

        lessButton.textContent = `See Less`
        lessButton.className = `button`


        para.appendChild(lessButton)



    lessButton.addEventListener("click", () => {
        let ogButton = document.createElement("button")

        ogButton.textContent = "More Info"
        ogButton.id = "proj2"
        ogButton.className = "button"

        para.replaceWith(ogButton)
        proj2Info()
     


    })    
    




    })

}

function nav(){

   const link = document.querySelectorAll("a")     
   const width = parseInt(window.innerWidth)


    if (width >= 800){
        for (let el of link ){ 
            el.addEventListener("mouseover", () => {
            el.className = "mouseover"
        })
    
            el.addEventListener("mouseout", () => {
                el.className = "mouseout"
            })

           
        } 
       
    } else if (width < 800){
        for (let el of link ){ 
            
            el.addEventListener("touchstart", () => {
                el.className = "mouseover"
            })
        
            el.addEventListener("touchend", () => {
                el.className = "mouseout"
    
            })
           
           
        }

    }

    
}

