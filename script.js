
let name_ele = document.getElementById('name')
let email_ele =document.getElementById("email")
let select_ele = document.getElementById("Employee")
let myForm_ele = document.getElementById("myForm")

name_ele.addEventListener("blur",function(){
    console.log("blur event : when an element loses focus ")
})
email_ele.addEventListener('focus',function(){
    console.log("focus event : when an element ganis focus")
})
select_ele.addEventListener("change",function(){
    console.log("chang event : when the value of an input,select,or textarea element changes")
})
myForm_ele.addEventListener("submit",function(e){
   console.log("function : when a form is submitted") 
   e.preventDefault()
})
