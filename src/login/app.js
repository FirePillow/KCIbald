require('./style.css');

const config = require('../lib/config')
const alertlib = require('../lib/alertlib');

let siteKey = '6LepWGkUAAAAAOuDkXsDYx5ohu-kas5-As7x047v';
let location = window.location.href;


window.onload = () => {
    grecaptcha.render('login', {
        'sitekey': siteKey,
        'callback': startLogin,
        'expired-callback':recap_expired,
        'error-callback':recap_error
    });
    if(location.includes("?wrongpas=True")){
        alertlib.user_err("Invalid password.")
    }
    if(location.includes("?recap=exp")){
        alertlib.user_err("Recaptcha expired")
    }
};

document.onkeyup = (keyEvent) => {
    if (keyEvent.key === 'Enter')
        document.getElementById('login').click();
};

function recap_expired() {
    window.location = "/login?recap=exp"
}

function recap_error() {
    alertlib.user_err("Internet failed! Please check your Internet.")
}

function loginRequestFailed(failure) {
//    Exception logic
    console.log(failure);
    window.location = "/login?wrongpas=True"
}

function loginException(exception) {
    alertlib.unexpected_err('3333');
    console.log(exception);
}

function loginSuccess(value) {
    if(!config.ontest){
        window.location.href="https://www.kcibald.com"
    }else{
        window.location.href="https://raw.develop.kcibald.com/forum/openpage/index.html"
    }
}

function validusr(username) {
        return username === 'string' && !(username.length > 20 || username.length < 2);
    }

function validpwd(password) {
        return password === 'string' && /^(?=.*?[a-z])(?=.*?[0-9]).{8,20}$/.test(password);
}

function startLogin(token) {
    try {

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        console.log(`login with user: ${username}, password: ${password}`);
        console.log(`recaptcha token: ${token}`);

        if (validusr(username) || validpwd(password)) {
            alertlib.user_err("Invalid username or password.");
            return
        };

        data={"account": username,"password": password,"captcha": token};
        fetch(config.apiurl("login"),
            {body: JSON.stringify(data),
            method:"POST", cache: 'no-cache', 
            headers: {'Accept': 'application/json','Content-Type': 'application/json'},
        }).then(rsp => rsp.status==204 ? loginSuccess(rsp) : loginRequestFailed(rsp))
        .catch(exception => loginException(exception))

    } catch (e) {
        //Recaptcha do not handle error from our callable
        layer.alert(e.name + ": " + e.message, {icon: 2});
        console.error(e);
    }
}


//TODO: login logic