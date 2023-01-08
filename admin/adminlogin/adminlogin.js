let inputfield=document.querySelector(".inputfield")
let button=document.querySelector(".button")
var adminpassword="muhammedsirajudeen"
button.addEventListener("click",()=>{
    let password=inputfield.value
    if(password===adminpassword){
        console.log("success")
        window.location.href = "/home/vava/Programming/Projects/ShaheerCollege/admin/adminpage/adminpage.html";
    }
})