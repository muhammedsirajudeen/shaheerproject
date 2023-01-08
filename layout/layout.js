let bench=document.querySelectorAll(".bench")
let selectedcontainer=document.querySelector(".selectedcontainer")


let firstrowbutton=document.querySelector(".addfirstrow")
let secondrowbutton=document.querySelector(".addsecondrow")

let firstrowcontainer=document.querySelector(".firstrow") 
let secondrowcontainer=document.querySelector(".secondrow")

var count=0
firstrowbutton.onclick=()=>{
    let bench=document.createElement("div")
    bench.className="bench"
    count+=1;
    bench.id=count
    firstrowcontainer.appendChild(bench)
    console.log(bench)
    bench.addEventListener("click",(element)=>{
        console.log(element.target.id)
        selectedcontainer.textContent=element.target.id
    })

}

secondrowbutton.onclick=()=>{
    let bench=document.createElement("div")
    bench.className="bench"
    count+=1;
    bench.id=count
    secondrowcontainer.appendChild(bench)
    console.log(bench)
    bench.addEventListener("click",(element)=>{
        console.log(element.target.id)
        selectedcontainer.textContent=element.target.id
    })


}

let addseat=document.querySelector(".addseat")
addseat.addEventListener("click",()=>{
    let id=selectedcontainer.textContent
    
    let bench=document.querySelector(`[id='${id}']`)
    console.log(bench)
    let seat=document.createElement("div")
    seat.className="seat"
    bench.appendChild(seat)
})