
homeuser.innerHTML=`Welcome ${name}`;
let balance=0;
//for deposit an amount

function deposit(){
    const amount=parseInt(document.getElementById('amount').value);
    const password = document.getElementById('password').value;


    if(name in localStorage){
        const account_detail=JSON.parse(localStorage.getItem(name))
        // console.log(account_detail);
       if(account_detail.password==password){
        //check if the account already has a balance
        if(account_detail.balance){
            balance=account_detail.balance
        }

        //update the balance
        balance+=amount;
        account_detail.balance=balance

        //save the updated details back to local storage

        localStorage.setItem(name,JSON.stringify(account_detail));

        //notify the user and displayed the successfull message
        // depo.innerHTML=`current balance is ${balance}`

        depo.innerHTML=`<div class="card" style="width: 18rem;">
                        
                        <div class="card-body">
                            <h5 class="card-title">Current balance is ${balance}</h5>
                            
                        </div>`

       }
       else{
        alert("incorrect password");
       }
        
       
      }
   
    
    else{
        alert("user doesnot exist");
    }
    
}

//to withdraw an amount


function withdraw(){
   const amount=parseInt(document.getElementById('withdraw_amount').value);
    const password=document.getElementById('withdraw_password').value;
    if(name in localStorage){

        const withdraw_detail=JSON.parse(localStorage.getItem(name))
        // console.log(withdraw_detail);     
      
        if(withdraw_detail.password==password){

            //check if account already has balance or not
            if(withdraw_detail.balance){
                balance=withdraw_detail.balance
            }

            //update the balance
            balance-=amount;
            withdraw_detail.balance=balance

            //save the updated details to local storage

            localStorage.setItem(name,JSON.stringify(withdraw_detail))

            //display the available balance
            depo1.innerHTML=`<div class="card" style="width: 18rem;">
                        
            <div class="card-body">
                <h5 class="card-title">Current balance is ${balance}</h5>
                
            </div>`
        }
        else{
            alert("incorrect password")
        }
    }
    else{
        alert("user doesn't exist")
    }
}
