function addUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("User_name", user_name);
    window.location.replace("kwitter_room.html");
}