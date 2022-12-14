//______________________________________________________________
//Quick example of a very poorly protected password login system.
//______________________________________________________________

function LoginSubmitOnClick() {
    var userPass = EncryptString(document.getElementById("passwordInput").value);
    window.alert(ComparePasswords(userPass));
}

var password = [
    80,
    97,
    115,
    115,
    119,
    111,
    114,
    100,
    49,
    50,
    51,
    52];

function EncryptString(str) {
    var encryptedArray = [];
    for (var i = 0; i < str.length; i++) {
        encryptedArray.push(str.charCodeAt(i));
    }
    return encryptedArray;
}

function ComparePasswords(userPassword) {
    return userPassword.join() == password.join() ?  "Access Granted!" : "Access Denied!";
}


