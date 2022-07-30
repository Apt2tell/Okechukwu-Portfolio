// localStorage

const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const displayMsg = document.getElementById('message');

const storeLocal = () => {
  const inputs = {
    fullname: fullname.value,
    email: email.value,
    message: displayMsg.value,
  };
  localStorage.setItem('formInput', JSON.stringify(inputs));
};

fullname.addEventListener('change', () => {
  storeLocal();
});

email.addEventListener('change', () => {
  storeLocal();
});

displayMsg.addEventListener('change', () => {
  storeLocal();
});

const populateForm = () => {
  const storage = localStorage.getItem('formInput');
  fullname.value = JSON.parse(storage).fullname;
  email.value = JSON.parse(storage).email;
  displayMsg.value = JSON.parse(storage).message;
};
populateForm();