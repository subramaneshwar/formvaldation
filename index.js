const fname = document.getElementById("fname")
const lastname = document.getElementById("lastname")
const emai = document.getElementById("emai")
const pswd = document.getElementById("pswd")
const mnumb = document.getElementById("mnumb")
const bios = document.getElementById("bios")
const ferr = document.getElementById("ferr")
const lerr = document.getElementById("lerr")
const eerr = document.getElementById("eerr")
const perr = document.getElementById("perr")
const terr = document.getElementById("terr")
const berr = document.getElementById("berr")
const empty = document.getElementById("empty")
const error = {
    first: true,
    last: true,
    email: true,
    pass: true,
    tel: true,
    bios: true
}
function valid() {
    console.log("hi")
    var name = fname.value;
    var lname =lastname.value;
    var emails =emai.value;
    var pswds =pswd.value
    var  mnumbs =mnumb.value
    var  bi =bios.value
    
  if(name.length < 3||name.length > 16){
    error.first=true
     ferr.innerText="First name must be alphanumeric and 3-16 Characters"
   } 
   else{
    error.first=false
     ferr.innerText= ""
   }


   if(lname.length <3||lname.length>16){
    error.last=true
 
    lerr.innerText="Last name must be alphanumeric and 3-16 Characters"
 
  }
  else{
    error.last=false
    lerr.innerText= ""
   }


   if(emails =="" ||!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emails)){
    error.email=true
     eerr.innerText=" Email must be  a valid address.e.g. example@example.com"
 
  }
  else{
    error.email=false
 
     eerr.innerText= ""
   }


   if(pswds =="" || !/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(pswds)){
    error.pass=true
 
     perr.innerText= "Password should contain atleast one number and one special character"
 
  }
  else{
    error.pass=false
     perr.innerText= ""
   }

   if(mnumbs =="" ||!/^\d{10}$/.test(mnumbs)){
    error.tel=true
    terr.innerText=" Please Enter  Valid Telephone Number"
  }
  else{
    error.tel=false
    terr.innerText= ""
   }


  if(bi =="" || !/^[a-z0-9._-\s]{8,50}$/.test(bi)){
    error.bios=true
     berr.innerText="Bio must container only lowercase letters, underscores,hyphens and be 8-50 characters"
  }
  else{
    error.bios=false
     berr.innerText= ""
  }

}
function mysubmit(){
    const data = {
         name : fname.value,
     lname :lastname.value,
     emails :emai.value,
     pswds :pswd.value,
      mnumbs :mnumb.value,
      bi :bios.value,
    }
    if (error.first===true || error.last===true||error.email===true||error.pass===true||error.email===true||error.bios===true||error.tel===true){
        empty.innerHTML="Form values can't be empty"
        empty.style.color="red"
        console.log("hello")
    }
    else{
        empty.innerHTML=""
        alert("Form Submitted")
    }
fname.value=""
lastname.value=""
emai.value=""
pswd.value =""
mnumb.value=""
bios.value=""
    

}

