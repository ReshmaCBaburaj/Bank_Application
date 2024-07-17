function Login(){
    username=uname.value;
    password=pass.value;
    if(username in localStorage){
        const stored_acc_details=JSON.parse(localStorage.getItem(username))
        if(stored_acc_details.password==password){
            alert("user logged in successfully");
            name=stored_acc_details.username
           
            window.location="./home.html"
        
        }
        else{
            alert("incorrect password")
        }
             
      
    }
    else{
        alert("user doesn't exist")
    }
}