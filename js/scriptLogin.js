// script verifikasi username dan passwordnya
function checkForm(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username == "Admin" && password == "Admin" || username == "User" && password == "User"){
        if(username == "Admin"){
            alert('Selamat datang Admin, semoga harimu cerah');
        } else {
            alert('Selamat datang User, semoga harimu cerah');
        }
        window.open("");
    }
    else if(username == "Admin" && password != "Admin" || username == "User" && password != "User"){
        alert("Maaf, password yang anda masukkan salah!");
    }
    else if(username != "Admin" && password == "Admin" || username != "User" && password == "User"){
        alert("Maaf, username yang anda masukkan salah!");
    }
    else if(username != "Admin" && password != "Admin" || username != "User" && password != "User"){
        alert("Maaf, username dan password yang anda masukkan salah!")
    }
    else {
        alert("Maaf, form tidak boleh kosong");
    }
}

// script menampilkan password dalam bentuk simbol
function passForm(){
    var x = document.getElementById("password");
    
    if (x.type === "password"){
        x.type = "text";
    } else {
        x.type = "password";
    }
}