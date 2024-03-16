let btn1 = document.querySelector("#btn1")

//btn1.onclick =(evt) => {
   // console.log(evt)
    //console.log(evt.type)
    //console.log(evt.target)
    //console.log(evt.clientX)
    //console.log(evt.clientY)
    //console.log("btn1 was clicked");
    //let a = 24;
    //console.log(a)}

    btn1.addEventListener("click",(evt) =>{
     console.log("button1 was clicked")
     console.log(evt.type)
     console.log(evt.target)
     console.log(evt.clientX)
    console.log(evt.clientY)
    })

    btn1.addEventListener("click",() =>{
        console.log("button2 was clicked")
       })

       btn1.addEventListener("click",() =>{
        console.log("button3 was clicked")
       })

let btn2 = document.querySelector("#btn2");
//btn2.dblclick =() => {
   // console.log("btn2 is double click");
   div.addEventListener("div",(evt) => {
    console.log("inside the div")
     console.log(evt.type)
     console.log(evt.target)
     console.log(evt.clientX)
    console.log(evt.clientY)
   })
 
//}

let div = document.querySelector("div");

//div.onmouseover =(evt) =>{
    //console.log('you are inside div')
   // console.log(evt)
    //console.log(evt.type)
    //console.log(evt.target)
    //console.log(evt.clientX)
    //console.log(evt.clientY)}