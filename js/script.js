const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let data = {
        name,
        email,
    }
    let convertdata = JSON.stringify(data);

    localStorage.setItem('lead', convertdata);

    let content = document.getElementById('content');

    let loading = `<p>Carregando...</p>`

    let ready = `<p>Pronto</p>`

    content.innerHTML = loading

    setTimeout(() => {
        content.innerHTML = ready;
    }, 1000);
})