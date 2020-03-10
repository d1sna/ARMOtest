document.addEventListener('DOMContentLoaded', async (event) => {
    let dataField = document.getElementById('dataField');
    let button = document.getElementById('showData');
    let response = await fetch("https://api.github.com/users/gaearon");
    let data = await response.json()
    button.addEventListener('click', () => {
        dataField.innerText = data.login;
    });
});