import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import {getAuth, createUserWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import {getDatabase} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'

const appSettings = 'https://kcb-lms-default-rtdb.firebaseio.com/'
const firebaseConfig = {
  apiKey: "AIzaSyBbMbTOH3NHv6fp4jAT3HA3vA6-Ur23In4",
  authDomain: "group-12-kcb-lms.firebaseapp.com",
  projectId: "group-12-kcb-lms",
  storageBucket: "group-12-kcb-lms.appspot.com",
  messagingSenderId: "15476877993",
  appId: "1:15476877993:web:1c45be65570b120d48d7b8"
};
const app= initializeApp(firebaseConfig)

// to be used anywhere for authentication
export const auth= getAuth(app)

const authenticate = firebase.auth()
const database = firebase.Database()


userName=document.getElementById("name")
email=document.getElementById("email")
passWord=document.getElementById("password")
UserId=document.getElementById("userIdentification")

let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinBtn.onclick = function () {
nameField.style.maxHeight = "0";
title.innerHTML = "Sign in";
signupBtn.classList.add("disabled");
signinBtn.classList.remove("disabled");
};

signupBtn.onclick = function () {
nameField.style.maxHeight = "65px";
title.innerHTML = "Sign Up";
signupBtn.classList.remove("disabled");
signinBtn.classList.add("disabled");
};

Window.signUp= function signUp(){
  //get input
  signUp.preventDefault;
var input={
  userName: userName.value,
  email: email.value,
  passWord: passWord.value,
  UserId: UserId.value
}
createUserWithEmailAndPassword(auth, input.email, input.password)
.then(function(success){
  alert('Success')
})
.catch(function(error){
  alert(error.message)
})
console.log("input")
}

/*.then(function(){
  var user = authenticate.currentUser();

  var database_ref = database.ref();

  var user_data={
    userName : userName,
    email : email,
    password : password
  }

}*/


//create user
/*authenticate.createUserWithEmailAndPassword(email,password)
.then(function(){
  var user = authenticate.currentUser();

  var database_ref = database.ref();

  var user_data={
    userName : userName,
    email : email,
    password : password
  }*/
  //validation
 /* ,function validate_email(email){
   let expression=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(expression.test(email)==true){
      return true;
    }
    else{
      return false;
    }
  }
  
  ,function validate_password(password){
    if(password.length < 6){
      return false;
    }
    else{
      return true;
    }
  }
  
  ,function validate_name(userName){
    if(userName.length < 3){
      return false;
    }
    else{
      return true;
    }
  },
  
  //validating fields
  if(validate_email(email)===false && validate_password(password)===false){
    alert("Please enter a valid email or password");
    return ;
  }
  if(validate_email(email)===false || validate_password(password)===false || validate_name(userName)===false){
    alert("Please enter a valid email, password and name")
    return ;
  }


  database_ref.child("Users").set(user_data)
}
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  alert(errorMessage);
  //...
});
*/
