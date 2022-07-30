const email = document.getElementById('mail');
const getInTouch = document.getElementById('contact-btn');
const submitError = document.getElementById('submit-error');

// here's begins function to test for email's validity
function emailCheck(mail) {
  let output = false;

  const emailLowerCase = mail.value.toLowerCase();
  // to check if the input is in lower case
  if (mail.value === emailLowerCase) {
    output = true;
  } else {
    output = false;
  }
  return output;
}

// adding event listner to the submit button

getInTouch.addEventListener('click', (event) => {
  //  if the input is not valid
  if (!emailCheck(email)) {
    event.preventDefault();
    // then display an error message
    submitError.classList.add('err_msg');
    submitError.textContent = 'Entered email should be in lowercase, please try again';
  }
});