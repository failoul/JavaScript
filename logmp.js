
    function verifie(form){
        if(form.login.value=="Amesip"){
            if(form.password.value=="Ameur"){
                location="calcil.html"
            } else {
                alert("invalid password")
            }
        } else {
            alert("invalid UsarID")
        }
    }