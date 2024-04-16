// // const users = fetch('https://jsonplaceholder.typicode.com/users')
// // .then((response) => response.json())
// // .then((json) => 
// // {json.forEach(json => (console.log(json)))});

// // const myUser = {
// //     userId:[]
// // }

// // const user = async () => {
// //     const response = await fetch('./data.json')
// //     const userData = await response.json()
// //     console.log(userData)
// //     return userData
// // }

// // const anotherFunction = async () =>{
// //     const data = await user()
// //     myUser.userId = data

// //     return data
// // }
// // anotherFunction()
// // console.log(myUser)



// // const Ename = document.getElementById('name')
// // const Erole = document.getElementById('role')
// // const Efeedback = document.getElementById('feedback')
// // const update = document.getElementById('update')
// // const submitbut = document.getElementById('getbutton')
// // const tabb = document.getElementById('formTable')

// // const API_URL  = "http://localhost:3000/users"

// // submitbut.addEventListener('click' , () => {
// //     handleGet()
// //     const tableRow = `<tr>
// //                          <td>${data.name}</td>
// //                          <td>${data.role}</td>
// //                          <td>${data.feedback}</td>
// //                          <td><button>Edit<button>Delete</button>
// //                        </tr>`
// //     tabb.innerHTML += tableRow
// // })

// // const handleGet  = async () => {
// //     try
// //     {
// //         const response = await fetch(API_URL, {
// //             method : 'GET' ,
// //             headers : {
// //                 Accept : "application/json"
// //             }
// //         })
// //         const data = await response.json()
// //         return data
// //     }
// //         catch(err){
// //             console.log(err)
// //         }
    
// // }



// const Ename = document.getElementById('name');
// const Erole = document.getElementById('role');
// const Efeedback = document.getElementById('feedback');
// const update = document.getElementById('update');
// const submitbut = document.getElementById('getbutton');
// const tabb = document.getElementById('formTable');

// const API_URL = "http://localhost:3000/users";

// submitbut.addEventListener('click', async () => {
//     const data = await handleGet(); // Wait for data before updating the table
//     if (data) {
//         const tableRow = `<tr>
//                              <td>${data.Ename}</td>
//                              <td>${data.Erole}</td>
//                              <td>${data.Efeedback}</td>
//                              <td><button>Edit</button><button>Delete</button></td>
//                            </tr>`;
//         tabb.innerHTML += tableRow;
//     }
// });

// const handleGet = async () => {
//     try {
//         const response = await fetch(API_URL, {
//             method: 'GET',
//             headers: {
//                 Accept: "application/json"
//             }
//         });
//         const data = await response.json();
//         return data;
//     } catch (err) {
//         console.log(err);
//         return null; // Return null if there's an error
//     }
// };
const myName = document.getElementById('name')
const myRole = document.getElementById('role')
const button = document.getElementById('btn')
const updateButton = document.getElementById('upbtn')
const table = document.getElementById('table')
const dataButton = document.getElementById('getdata')
const API_URL = "http://localhost:3000/users" // Local JSON server url running at port 3000 run the server by 'npx json-server -p 3000 db.json'
var uid


button.addEventListener('click', () => {
    const id = Math.floor(Math.random()*100) // Giving random id to the user using random function
    const user = {
        id: `${id}`,
        name: `${myName.value}`,
        role: `${myRole.value}`
    }
    handlePost(user) // Calling post function to post the users at the json server 
})

dataButton.addEventListener('click', async () => {
    const data = await handleGet() // Calling get function to get the users from the json server and it takes time to convert the data to json so await is used
    data.forEach( e => { // data is an array so forEach is used for all the users stored in the array
        const newRow = `<tr>
                        <td>${e.id}</td>
                        <td>${e.name}</td>
                        <td>${e.role}</td>
                        <td><button onclick="handleEdit(${e.id},'${e.name}','${e.role}')">Edit</button><button onclick="handleDelete(${e.id})">Delete</button></td>
                    </tr>`
        table.innerHTML += newRow
    })
})

const handleGet = async () => {
    try
    {
        const response = await fetch(API_URL, {
            method:'GET',
            headers: {
                'Accept': 'Application/json' // Accepting the response as json
            }
        }) 
        const data = await response.json() // converting the response into json it takes time so await is used. If await is not used it will return a promise with state pending
        return(data)
    }
    catch(err)
    {
        console.log(err)
    }
}

const handlePost = async(user) => {
    try
    {
        const response = await fetch(API_URL,{
            method:'POST',
            headers: {
                'Content-Type' : 'Application/json' // posting the data into json server so the content type is mentioned as json 
            },
            body: JSON.stringify(user) // converting the object user into json using stringify method. the content inside the body will be posted at the server
        })
    }
    catch(err)
    {
        console.log(err)
    }
}

const handleDelete = async (id) => {
    try
    {
        const response = await fetch(`${API_URL}/${id}`, { // The url of the json server is constructed again using the id that of the user wanted to be deleted 
            method: 'DELETE'
        })
    }
    catch(err)
    {
        console.log(err)
    }
}

const handleEdit = (id,name,role) => {
    uid = id
    myName.value = name
    myRole.value = role
    button.style.display = 'none'
    updateButton.style.display = 'block'
}

updateButton.addEventListener('click', (e) => {
    e.preventDefault()
    const editedUser = {
        id: `${uid}`,
        name : `${myName.value}`,
        role : `${myRole.value}`
    }
    console.log(editedUser)
    handleJsonEdit(editedUser)
    myName.value = ''
    myRole.value = ''
})

const handleJsonEdit = async (user) => {
    try
    {
        const response = await fetch(`${API_URL}/${uid}`,{ // The url of the json server is constructed again using the id that of the user wanted to be updated
            method: 'PUT',
            headers: {
                'Content-Type' : 'Application/json'
            },
            body : JSON.stringify(user)
        })
    }
    catch(err)
    {
        console.log(err)
    }
}

