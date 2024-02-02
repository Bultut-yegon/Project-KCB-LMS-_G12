import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth'
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBbMbTOH3NHv6fp4jAT3HA3vA6-Ur23In4",
  authDomain: "group-12-kcb-lms.firebaseapp.com",
  projectId: "group-12-kcb-lms",
  storageBucket: "group-12-kcb-lms.appspot.com",
  messagingSenderId: "15476877993",
  appId: "1:15476877993:web:1c45be65570b120d48d7b8"
};
const app= initializeApp(firebaseConfig)

export const auth= getAuth(app)

const authenticate = firebase.auth()
const database = firebase.Database()

function signUp(){
  //get input
  userName=document.getElementById("nameField").value;
  email=document.getElementById("email").value;
  password=document.getElementById("password").value;
}


//create user
authenticate.createUserWithEmailAndPassword(email,password)
.then(function(){
  var user = authenticate.currentUser();

  var database_ref = database.ref();

  var user_data={
    userName : userName,
    email : email,
    password : password
  }

  database_ref.child("Users").set(user_data)
})
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  alert(errorMessage);
  //...
});

//validation
function validate_email(email){
  expression=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if(expression.test(email)==true){
    return true;
  }
  else{
    return false;
  }
}

function validate_password(password){
  if(password.length < 6){
    return false;
  }
  else{
    return true;
  }
}

function validate_name(userName){
  if(userName.length < 3){
    return false;
  }
  else{
    return true;
  }
}

//validating fields
if(validate_email(email)==false || validate_password(password)==false){
  alert("Please enter a valid email or password");
}
if(validate_email(email)==false || validate_password(password)==false || validate_name(userName)==false){
  alert("Please enter a valid email, password and name")
  //return false;
}
