
  const firebaseConfig = {
      apiKey: "AIzaSyAMdmD3lR5pyRv1ojxxLXZbFDXgyOg1dvg",
      authDomain: "kwitter-ffd01.firebaseapp.com",
      databaseURL: "https://kwitter-ffd01-default-rtdb.firebaseio.com",
      projectId: "kwitter-ffd01",
      storageBucket: "kwitter-ffd01.appspot.com",
      messagingSenderId: "1004176608624",
      appId: "1:1004176608624:web:f0f721398995fc1215d3b5"
    };
    
  
    const app = initializeApp(firebaseConfig);


    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+ user_name + "!";

function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
localStorage.setItem("room_name"),room_name;
window.location="kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name-"- Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row;


      
      });});}
getData();
 
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="letschat_page.html";

}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}