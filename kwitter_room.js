
const firebaseConfig = {
      apiKey: "AIzaSyC2Wk7I9xbzCao_ZcqhWo6YoFZi-mmkSrU",
      authDomain: "data-base-c586b.firebaseapp.com",
      databaseURL: "https://data-base-c586b-default-rtdb.firebaseio.com",
      projectId: "data-base-c586b",
      storageBucket: "data-base-c586b.appspot.com",
      messagingSenderId: "843205340010",
      appId: "1:843205340010:web:121fa5d67ef40d5314d313",
      measurementId: "G-REJGWGLC2M"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    
    
    var username=localStorage.getItem("username");
    document.getElementById("username").innerHTML="Welcome "+username;

    function addRoom() {
      var room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"add room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+Room_names+"</div> <hr>"
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();


function redirectToRoomName(name){
 localStorage.setItem("room_name", name);
 window.location="kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}