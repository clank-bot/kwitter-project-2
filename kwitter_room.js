
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyABl4XoxmemEUEOylxPrSvbNGmByfwRJhw",
      authDomain: "game-412e2.firebaseapp.com",
      projectId: "game-412e2",
      storageBucket: "game-412e2.appspot.com",
      messagingSenderId: "213792653737",
      appId: "1:213792653737:web:0d3996f0c0f3c6be67c4b8"
    };
    
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout()
{
    window.location = "index.html"
}

function addRoom()
{
      add_Room = document.getElementById("room_name").value
      localStorage.setItem("room_name", add_Room)
}