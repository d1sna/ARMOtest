document.addEventListener('DOMContentLoaded', async () => {
    let dataField = document.getElementById('dataField');
    let button = document.getElementById('showData');
    let response = await fetch("http://localhost:8888/");
    let data = await response.json();
    button.addEventListener('click', () => {
        dataField.innerText = data.message;
    });
});