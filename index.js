// Add your code here
function submitData(name, email) {
const personalData = {
    name: `${name}`,
    email: `${email}`
}
const dataRequest = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(personalData)
}


fetch("http://localhost:3000/users", dataRequest)
.then(res => res.json())
.then(json => (json))
}
submitData("Sam", "sam@sam.com")