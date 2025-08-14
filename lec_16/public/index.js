async function getCommentData() {
    try{
        let response = await axios.get("https://jsonplaceholder.typicode.com/comments");
        console.log(response.data);
    }
    catch(error){
        console.log(error);
    }
}

getCommentData();

function addUser(email,password) {
    axios.post('/user', {
    email: email,
    password: password
    })
    .then((res)=>{
        console.log(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
}

addUser("Parv@gmail.com","1223");