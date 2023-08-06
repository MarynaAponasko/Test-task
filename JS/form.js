const refs = {
  form: document.querySelector('.form-js'),
};

refs.form.addEventListener('submit', handleSubmit);

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
}
