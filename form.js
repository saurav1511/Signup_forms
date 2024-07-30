 
 function emailtest() {
    let emailAdd = document.querySelector(".email").value;

    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(emailAdd)

 }
 
 function onclicki() {

if(emailtest() == true) {    

window.location.href = "./thankyou.html";
return false;

} else {

    let label23 = document.querySelector(".err");
    label23.innerText = "Invalid email address"; 

    let emailInput = document.querySelector(".email");
    emailInput.style.border = "1px solid red";
    emailInput.style.color = "red";
    emailInput.style.backgroundColor = "pink"; 

    }

    document.querySelector(".email").addEventListener("input", function() {
        let emailInput = document.querySelector(".email");
        let errorMessageElement = document.querySelector(".err");
  
        if (emailInput.value === "") {
          emailInput.style.border = ""; // Reset border style
          emailInput.style.color = ""; // Reset text color
          emailInput.style.backgroundColor = ""; // Reset background color
          errorMessageElement.innerText = ""; // Clear error message
        }

});


}