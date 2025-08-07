const signup = document.querySelector('#signup');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

function adduser(email,password) {
    let newUser = {
        email:email,
        password:password
    }
    fetch('/adduser', {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            "content-type":"application/json"
        }
    }).then((response) => {
        return response.json();
    }).then((data)=>{
        console.log(data);
        if(data.success) {
            alert(data.message);
            signup.reset();
        }
        else {
            alert(data.message);
            signup.reset();
        }
    }).catch((err)=>{
        console.log(err);
    })
}

signup.addEventListener('submit',function (e) {
    e.preventDefault();
    adduser(email.value, password.value);
});