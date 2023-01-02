function validate() {
    let firstName = document.getElementById('firstName').value
    let valid = false;
    if (firstName.includes('$')) {
        valid = false;
        error();
    }else {
        valid = true;
        success();
    }
}
function success() {
    document.getElementById('success').style.display = 'block';
    document.getElementById('error').style.display = 'none';
}
function error() {
    document.getElementById('error').style.display = 'block';
    document.getElementById('success').style.display = 'none';
}