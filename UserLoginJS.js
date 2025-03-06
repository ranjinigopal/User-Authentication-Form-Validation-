/*
    LoginValidation Function:
     (i)-This function retrieves login credentials from input fields.
     (ii)-It validates whether the user has provided a username (or email/phone) and password.
     (iii)-If validation fails, an error message is displayed.
     (iv)-If validation succeeds, it attempts to validate the login credentials.
*/
LoginValidation = () => {
    // Getting user input values from the HTML form
    const Login = document.getElementById("loginInput").value;
    const Password = document.getElementById("passwordId").value;

    // Variable to store error messages
    let LoginError = ""; 

    try {
        // Input validation checks
        if (!Login) throw "Please provide Name, Phone Number, or Email !!";
        if (!Password) throw "Password is required !!";
    } catch (error) {
        // Assigning error message
        LoginError = error; 
    }

    // Getting the error display element
    const lError = document.getElementById("error"); 

    if (LoginError) {
        // Display error message if validation fails
          lError.textContent = LoginError;
          return false; // Prevents form submission
    } else {
        // If validation succeeds, proceed with login
             lError.textContent = "Logged In Successfully";

        // Call ValidatedData function to check login credentials asynchronously
             ValidatedData({ Login, Password })
                  .then((message) => {
                      console.log(message);
                      // Redirect user to another page upon successful login
                      window.location.href = "file:///C:/Users/91938/Desktop/Html/BMS/UserRegistrationHTML.html";
                    })
                  .catch((error) => {
                     lError.textContent = error; // Display error if login validation fails
                   });

                return false; // Prevents default form submission behavior
    }
};

/*
    ValidatedData Function:
    - This function simulates checking login data.
    - It returns a promise that resolves if Login and Password are provided.
    - It rejects the promise if any of the fields are missing.
*/
ValidatedData = (VData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulating validation process
            if (VData.Login && VData.Password) {
                // Resolve promise if data is valid
                resolve("Login Data is Saved Successfully");
            } else {
                // Reject promise if any field is missing
                reject("Login Data is not saved "); 
            }
        }, 1000); // Simulating a 1-second delay
    });
};
