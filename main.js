const myform = document.querySelector("form")
const myname = document.querySelector(".input")
const myemail = document.querySelector(".input1")
const mymsg = document.querySelector(".msg")
const myuser = document.querySelector(".users")



myform.addEventListener("submit" ,onSubmit);

function onSubmit(e){
  e.preventDefault();
  
if (myname.value === "" || myemail.value === ""){
mymsg.innerHTML = "please enter name and email"
setTimeout(() => mymsg.remove(), 1000)
}
else{
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(`${myname.value}:
   ${myemail.value}`))

   myuser.appendChild(li)

   myname.value = ""
   myemail.value = ""
}}


  












