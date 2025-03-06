/*
    RegisterPage Function:
    (i)-This function collects user input from an HTML form.
    (ii)-It validates the input fields to ensure required data is provided.
    (iii)-If validation fails, it displays an error message.
    (iv)-If validation succeeds, it saves the registered data and displays the date and time.
*/

function RegisterPage(){
  // Retrieving values from input fields using their IDs
    const Name= document.getElementById("nameId").value;
    const Email= document.getElementById("emailId").value;
    const DOB= document.getElementById("dobId").value;
    const Phno= document.getElementById("phnoId").value;
    const Pass1= document.getElementById("passId1").value;
    const Pass2= document.getElementById("passId2").value;

    let ErrorMsg = "";

    try{
    // Input validation checks
      if(!Name ) throw "Please Provide a Name !!";
      if(!Email) throw "Please Provide a Email !!";
      if(!Phno) throw "Please Provide a Phone Number !!";
      if(!Pass1) throw "Password is Required !!";
      if(Pass1 != Pass2) throw "Passsword does not match !!";
    }catch(error){
    // Assigning error message
        ErrorMsg = error;

    }
      // Getting the error message element
      const Erros = document.getElementById("error");

    if(ErrorMsg){
      // Display error message if any validation fails
       Erros.textContent= ErrorMsg;
       return false;// Prevents form submission
    }
   else{
        // If validation is successful, proceed with form submission
        Erros.textContent ="Form submitted Successfully";
        console.log({Name,Email,DOB,Phno,Pass1});

       // Save the registered data asynchronously
       saveRegisterdData({Name,Email,DOB,Phno,Pass1})
          .then(function (message){
          console.log(message);
          displayDateTime(Name);// Display current date and time
        })
          .catch(function (error){
          Erros.textContent=error;
          console.error(error);// Display error if data saving fails
        });
         return false;//Prevents default form submission behavior
} 
}
/*
    displayDateTime Function:
       *This function gets the current time and displays it with the user's name.
*/
      displayDateTime= (Name)=> {
         const currentdate = new Date();
         const dataTime = `${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;
         // Display the user's name along with the current time in the given HTML element
         document.getElementById("datetimeId").textContent = `${Name} - ${dataTime}`;
}

/*
    saveRegisterdData Function:
       * This function simulates saving user data.
       * It returns a promise that resolves if data contains Name and Email.
       * It rejects the promise if required data is missing.
*/
saveRegisterdData=(data)=>{
    console.log("Saved Data" , data);
    return new Promise(function(resolve,reject){
       const SettingTime = setTimeout(()=>{
            if(data.Name && data.Email){
                resolve("Data saved Successfully");// Resolve promise if Name and Email exist
                clearTimeout(SettingTime);
            }
            else{
                reject("Data is not saved");// Reject promise if Name or Email is missing
            }
        }, 1000);// Simulate a delay of 1 second
    });
    

}


