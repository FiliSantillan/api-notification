var btnNotification = document.getElementById("buttonN"),
    btnPermission = document.getElementById("buttonP")
    title = "Fili Santillán",
    more = {
        icon: "http://filisantillan.com/content/images/2016/01/logo.png",
        body: "Notificación de prueba"
    };

function permission() {
        Notification.requestPermission();
};

function showNotification() {
    if(Notification) {

        if (Notification.permission == "granted"){

            var n = new Notification(title, more);
            setTimeout( function() { n.close() }, 5000);

        }

        else if(Notification.permission == "default") {
            alert("Primero da los permisos de notificación");
        }

        else {
            alert("Bloqueaste los permisos de notificación");
        }
    }

    else {
        alert("Tu navegador no es compatible con API Notification");
    }
};

btnPermission.addEventListener("click", permission)
btnNotification.addEventListener("click", showNotification);