const firebaseConfig = {
    apiKey: "AIzaSyDnRNlSLs-R9ONwLKIYqxfYI-oUpcDJeVs",
    authDomain: "kwitter-app-61e52.firebaseapp.com",
    databaseURL: "https://kwitter-app-61e52-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-61e52",
    storageBucket: "kwitter-app-61e52.appspot.com",
    messagingSenderId: "252252245221",
    appId: "1:252252245221:web:cabd1771a6ab73e78b580c"
  };
  firebase.initializeApp(firebaseConfig);

  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
    }
  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });
  
    document.getElementById("msg").value = "";
  }