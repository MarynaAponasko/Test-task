const refs = {
  form: document.querySelector('.form-js'),
  input: document.querySelectorAll('.input'),
};

refs.form.addEventListener('submit', handleSubmit);
refs.input.forEach(item => {
  item.addEventListener('change', onInputChange);
});

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { username, phone, email, order, comment },
  } = event.currentTarget;

  if (phone.value === '' || email.value === '' || comment.value === '') {
    return console.log('Please fill in all the fields!');
  }

  console.log(
    `Username: ${username.value}, Phone: ${phone.value}, Username: ${email.value}, Username: ${order.value}, Username: ${comment.value},`
  );
  event.currentTarget.reset();
  clearValidClass();
}

function onInputChange(event) {
  if (event.currentTarget.value !== '') {
    event.currentTarget.classList.add('valid');
  } else {
    event.currentTarget.classList.remove('valid');
  }
}

function clearValidClass() {
  refs.input.forEach(item => {
    if (item.classList.contains('valid')) {
      item.classList.remove('valid');
    }
  });
}
