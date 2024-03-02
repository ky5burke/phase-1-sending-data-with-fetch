// Add your code here


function submitData(name, email) {
    const formData = {
        name: name,
        email: email
    };

    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
    })

    .then(response => response.json())
    .then(json => {
        const newId = json.id;
        const idElement = document.createElement('p');
        idElement.textContent = newId;
        document.body.append(idElement);
    })

    .catch(error => {
        const errorMessage = error.message;
        document.body.append(errorMessage);
    })
};
//function needs to return fetch()