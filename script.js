function validate_login() {
    let uname, pword;
    uname = document.getElementById('username').value;
    pword = document.getElementById('psw').value;

    if(uname == '') {
        alert('Please enter user name!!!')
    }
    else if(pword == '') {
        alert('Password is mandatory...')
    }
    else {
        confirm('Welcome, '+uname);
        window.location.href='home.html';
    }
}
function validate_register() {
    let uname, pword, repword, mno;
    uname = document.getElementById('username').value;
    pword = document.getElementById('psw').value;
    repword = document.getElementById('rpsw').value;
    mno = document.getElementById('mno').value;

    if(uname == '') {
        alert('Please enter user name!!!')
    }
    else if(pword == '') {
        alert('Password is mandatory...')
    }
    else if(pword.length < 8){
        alert('Password must be of atleast 8 characters')
    }
    else if(repword != pword){
        alert('Enter correct password')
    }
    else if(repword == ''){
        alert('Confirm your password')
    }
    else if(mno == '' || mno.length < 10){
        alert('Enter valid mobile number')
    }
    else {
        confirm('Welcome, ' + uname);
        window.location.href='home.html';
    }
}
