const sname = document.getElementById('name')
const role = document.getElementById('role')
const feedback = document.getElementById('feedback')
const submit = document.getElementById('submit')

const API_URL  = "http://localhost:3000/users"

submit.addEventListener('click' , () => {
    const user = {
        id : '1',
        Name : sname.value,
        Role : role.value,
        feedback : feedback.value
    }
    handlePost(user)
})

const handlePost  = async (user) => {
    try
    {
        const response = await fetch(API_URL, {
            method : 'POST' ,
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(user)
        })
        alert('Data posted')

    }
        catch(err){
            console.log(err)
        }
    
}

