// const users = fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => response.json())
// .then((json) => 
// {json.forEach(json => (console.log(json)))});

// const myUser = {
//     userId:[]
// }

// const user = async () => {
//     const response = await fetch('./data.json')
//     const userData = await response.json()
//     console.log(userData)
//     return userData
// }

// const anotherFunction = async () =>{
//     const data = await user()
//     myUser.userId = data

//     return data
// }
// anotherFunction()
// console.log(myUser)



// const Ename = document.getElementById('name')
// const Erole = document.getElementById('role')
// const Efeedback = document.getElementById('feedback')
// const update = document.getElementById('update')
// const submitbut = document.getElementById('getbutton')
// const tabb = document.getElementById('formTable')

// const API_URL  = "http://localhost:3000/users"

// submitbut.addEventListener('click' , () => {
//     handleGet()
//     const tableRow = `<tr>
//                          <td>${data.name}</td>
//                          <td>${data.role}</td>
//                          <td>${data.feedback}</td>
//                          <td><button>Edit<button>Delete</button>
//                        </tr>`
//     tabb.innerHTML += tableRow
// })

// const handleGet  = async () => {
//     try
//     {
//         const response = await fetch(API_URL, {
//             method : 'GET' ,
//             headers : {
//                 Accept : "application/json"
//             }
//         })
//         const data = await response.json()
//         return data
//     }
//         catch(err){
//             console.log(err)
//         }
    
// }



const Ename = document.getElementById('name');
const Erole = document.getElementById('role');
const Efeedback = document.getElementById('feedback');
const update = document.getElementById('update');
const submitbut = document.getElementById('getbutton');
const tabb = document.getElementById('formTable');

const API_URL = "http://localhost:3000/users";

submitbut.addEventListener('click', async () => {
    const data = await handleGet(); // Wait for data before updating the table
    if (data) {
        const tableRow = `<tr>
                             <td>${data.Ename}</td>
                             <td>${data.Erole}</td>
                             <td>${data.Efeedback}</td>
                             <td><button>Edit</button><button>Delete</button></td>
                           </tr>`;
        tabb.innerHTML += tableRow;
    }
});

const handleGet = async () => {
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                Accept: "application/json"
            }
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        return null; // Return null if there's an error
    }
};

