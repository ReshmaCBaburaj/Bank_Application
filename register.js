function Register(){
  
    const account_details={
        username:uname.value,
        account_no:acc_no.value,
        password:pass.value
    };
    if(account_details.username==""||account_details.account_no==""||account_details.password==""){
        alert("please fill out the form completely")
    }
    else
    {
      if(account_details.username in localStorage){
        alert("account already exists")
      }
      else{
        localStorage.setItem(account_details.username,JSON.stringify(account_details))
        alert("account added successfully");
        window.location="./login.html"

      }
    }
}   