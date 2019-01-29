var config = {
    apiKey: "AIzaSyAZHCLuovX2oNhccuxjetkHNgAcrWcZLGo",
    authDomain: "dhisna-ac7e0.firebaseapp.com",
    databaseURL: "https://dhisna-ac7e0.firebaseio.com",
    projectId: "dhisna-ac7e0",
    storageBucket: "dhisna-ac7e0.appspot.com",
    messagingSenderId: "1079389260336"
};
firebase.initializeApp(config);

function getevents() {
    branch = document.getElementById("branch");
    branch = branch.value;
    sel = document.getElementById("event");
    sel.innerHTML = '<option value="">select...</option>';
    firebase.database().ref('/events/' + branch).once('value').then(function(snapshot) {
        snapshot.forEach(function (child) {

            s = '"'+child.key+'"';
            console.log(s)
            sel = document.getElementById("event");
            sel.innerHTML += '<option value='+s+">"+child.key+"</option>"
        })
        // ...
    });
}


function adduser() {
  user = document.getElementById("userBlock");
  userblock = document.createElement('div')
  userblock.innerHTML = '<label>Name : </label><input type="text" id="name"><br><br><label>Email : </label><input type="text" id="email"><br><br>'
  user.appendChild(userblock)
}

function submituser() {
  event = document.getElementById("event").value;
  branch = document.getElementById("branch").value;
  if (event == ""){
      return
  }


}

function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
    });

}
