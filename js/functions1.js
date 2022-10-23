function block(id) {
    document.getElementById(id).style.display = 'block';
}

function non(id) {
    document.getElementById(id).style.display = 'none';
}

function check() {
    var l = document.getElementById('key1').value.length;
    //var l2 = document.getElementById('key2').value.length;

    if (l < 5) {
        alert('Введите не меньше пяти символов');
        return false;
    } else {
        return non('open');
    }
}

function ValidMail() {

    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById('key2').value;

    var valid = re.test(myMail);

    if (!valid) {
        alert('Адрес электронной почты введен неправильно!');

    }

    //document.getElementById('message2').innerHTML = output;
    return valid;
}
