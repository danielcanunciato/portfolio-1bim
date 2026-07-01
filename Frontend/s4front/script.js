const __FORM = document.getElementById("main-form")

__FORM.addEventListener('submit', function(ev) {
    ev.preventDefault();

    const __NOME = document.querySelector("#main-form input[name='nome']").value;
    const __IDADE = document.querySelector("#main-form input[name='idade']").value;
    const __RESULT = document.getElementById("output");

    if (__IDADE === "" || __NOME === "") {
        __RESULT.innerHTML = "[ERRO] Preencha todos os campos."
    } else {
        if (__IDADE >= 18) {
            __RESULT.innerHTML = "Olá, "+__NOME+", você é maior de idade.";
        } else {
            __RESULT.innerHTML = "Olá, "+__NOME+", você é menor de idade!!";
        }
    }
})