const formInput = document.getElementById('form-input');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');
const msg = document.querySelector('.message');
const btn = document.getElementById('form-input');
const userList = document.getElementById('user-list');

function onSubmit(e) {
    e.preventDefault();
    if (nameInput.value === '' || emailInput.value === '') {
        msg.innerHTML = 'Please complete all fields';
        msg.classList.add('allert-message');

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.innerText = `Name: ${nameInput.value} | Email: ${emailInput.value}`;
        userList.appendChild(li);
    }

    nameInput.value = '';
    emailInput.value = '';
}

formInput.addEventListener('submit', onSubmit)