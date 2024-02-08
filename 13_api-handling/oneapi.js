fetch('https://regres.in/api/users'), {
method: 'POST',
headers: {
    'Content-Type': 'application/json'
},
body: JSON.stringify({
    name: 'User1'
})
}
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log('error'))