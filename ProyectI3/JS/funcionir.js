function login(){
    var user = document.getElementById("usuario").value;
    var pass = document.getElementById("contraseña").value;

    if (user === "AumaChi" && pass === "Reportes2024Boc") {
      window.location.href = "home,html";
    } else if (user === "AumaQro" && pass === "Reportes2024Boc") {
      window.location.href = "home.html";
    } else if (user === "AumaSal" && pass === "Reportes2024Boc")
      window.location.href ="home.html"
    } else if (user === "AumaSlp" && pass === "Reportes2024Boc")
      window.location.href ="home.html"  
    } else if (user === "ComLerma" && pass ==="Reportes2024Boc")
      window.location.href = "home.html
    } else if (user === "AumaCoy" && pass ==="Reportes2024Boc")
      window.location.href = "home.html"
    }else {
      alert("Por favor ingresa un nombre de usuario y contraseña válidos.");
    }      


}
