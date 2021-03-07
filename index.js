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
        para.style.textAlign = "center"
        para.style.margin = "1em"

        button.replaceWith(para)

        let breaK = document.createElement("br")
        para.appendChild(breaK)

    

        let link = document.createElement("a")
        link.href = "https://github.com/teyannaearle/Snowman-Game"

        let gitLink = document.createElement("button")

        gitLink.textContent = `check it out!`
        gitLink.style.marginTop = "1em"
        gitLink.style.padding = "1%"
        gitLink.style.color = "#e9d3d7"
        gitLink.style.backgroundColor = "#3a033a"
        gitLink.style.borderRadius = "8px"
        gitLink.style.cursor = "pointer"

           
      
        link.appendChild(gitLink)    
        para.appendChild(link)
       
        let breaK2 = document.createElement("br")
        para.appendChild(breaK2)
      

        let lessButton = document.createElement("button")

        lessButton.textContent =`see less`
        lessButton.style.marginTop = "1em"
        lessButton.style.padding = "1%"
        lessButton.style.color = "#e9d3d7"
        lessButton.style.backgroundColor = "#3a033a"
        lessButton.style.borderRadius = "8px"
        lessButton.style.cursor ="pointer"

        para.appendChild(lessButton)



    lessButton.addEventListener("click", () => {
        let ogButton = document.createElement("button")

        ogButton.textContent = "More info"
        ogButton.id = "proj1"
        ogButton.style.marginTop = "1%"
        ogButton.style.padding = "1%"
        ogButton.style.color = "#e9d3d7"
        ogButton.style.backgroundColor = "#3a033a" 
        ogButton.style.borderRadius = "8px"

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
        para.style.textAlign = "center"
        para.style.margin = "1em"

        button.replaceWith(para)

        let breaK = document.createElement("br")
        para.appendChild(breaK)

    

        let link = document.createElement("a")
        link.href = "https://github.com/teyannaearle/Hellington"

        let gitLink = document.createElement("button")

        gitLink.textContent = `check it out!`
        gitLink.style.marginTop = "1em"
        gitLink.style.padding = "1%"
        gitLink.style.color = "#e9d3d7"
        gitLink.style.backgroundColor = "#3a033a"
        gitLink.style.borderRadius = "8px"
        gitLink.style.cursor ="pointer"

      
        link.appendChild(gitLink)
        para.appendChild(link)
       
        let breaK2 = document.createElement("br")
        para.appendChild(breaK2)
      

        let lessButton = document.createElement("button")

        lessButton.textContent =`see less`
        lessButton.style.marginTop = "1em"
        lessButton.style.padding = "1%"
        lessButton.style.color = "#e9d3d7"
        lessButton.style.backgroundColor = "#3a033a"
        lessButton.style.borderRadius = "8px"
        lessButton.style.cursor ="pointer"

        para.appendChild(lessButton)



    lessButton.addEventListener("click", () => {
        let ogButton = document.createElement("button")

        ogButton.textContent = "More info"
        ogButton.id = "proj2"
        ogButton.style.marginTop = "1%"
        ogButton.style.padding = "1%"
        ogButton.style.color = "#e9d3d7"
        ogButton.style.backgroundColor = "#3a033a" 
        ogButton.style.borderRadius = "8px"
        ogButton.style.cursor ="pointer"

        para.replaceWith(ogButton)
        proj2Info()
     


    })    
    




    })

}

function nav(){

   const link = document.querySelectorAll("a")    

    for (let el of link ){ 
            el.addEventListener("mouseover", () => {
            el.style.backgroundColor ="#3a033a"
            el.style.padding = ".5em"
            el.style.borderRadius = "8px"
        })
    
            el.addEventListener("mouseout", () => {
                el.style.backgroundColor = "transparent"
                el.style.padding = ".25em .25em"
                el.style.borderRadius = "0"
            })

           
        } 
       

    
}
