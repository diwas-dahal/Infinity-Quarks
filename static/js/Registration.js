let submitButton = document.querySelector('.button');
let ServerResponse = document.querySelector('.serverResponse')


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateNumber(number) {
    re = /^(\+|-)?[1-9][0-9]*(\.[0-9]*)?$/
    return re.test(number)
}

function validateText(text) {
    text += ""
    if (text.length > 2) {
        return true
    }else {
        return false
    }
}


function sendDataToServer(data, csrftoken) {
    RegistrationUrl = 'http://127.0.0.1:8000/registration/data/'
    let xhr = new XMLHttpRequest();
    xhr.open("POST", RegistrationUrl)

    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader("X-CSRFToken", csrftoken);

    xhr.onload = function() {
            if (xhr.status == 201) {
                ServerResponse.style.display = "initial";
                ServerResponse.style.color = "green"
                ServerResponse.innerText = "Data received Successfully"
            }else {
                ServerResponse.style.display = "initial";
                ServerResponse.style.color = "red";
                ServerResponse.innerText = "Submission Failed"
            }
    }
    let urlEncodedData = new URLSearchParams(Object.entries(data)).toString()
    xhr.send(urlEncodedData)
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}




submitButton.addEventListener("click", (e) => {
    e.preventDefault()

    let username =  document.querySelector('.username');
    let email =  document.querySelector('.email');
    let phone = document.querySelector('.phone');
    let text = document.querySelector('.textIn');
    let valid = true




    if (validateText(username.value)) {
        username.parentElement.classList.remove('warning')
    }else {
        username.parentElement.classList.add('warning')
        valid = false
    }
    if (validateEmail(email.value)) {
        email.parentElement.classList.remove('warning')
    }else {
        email.parentElement.classList.add('warning')
        valid = false
    }
    if (validateNumber(phone.value)) {
        phone.parentElement.classList.remove('warning')
    }else{
        phone.parentElement.classList.add('warning')
        valid = false
    }
    if (validateText(text.innerText)) {
        text.parentElement.classList.remove('warning')
    }else{
        text.parentElement.classList.add('warning')
        valid = false
    }

    const csrftoken = getCookie('csrftoken');

    if (valid) {
        sendDataToServer({'username': username.value, 'email': email.value, 'phoneNumber': phone.value, 'bio': text.innerHTML}, csrftoken)
    }
})
