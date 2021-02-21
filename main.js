const collapsibles=document.querySelectorAll(".collapsible")

collapsibles.forEach((c)=>{
    c.addEventListener("click",function(){
        this.classList.toggle("collapsible__expanded")
    })
})