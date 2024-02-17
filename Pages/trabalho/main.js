document.addEventListener("DOMContentLoaded", function() {
    // Adiciona a classe 'hidden' após a animação de pulsação
    setTimeout(function() {
        document.querySelectorAll('.falling-letters span').forEach(function(letter) {
            letter.classList.add('hidden');
        });

        // Redireciona para a nova página após 2 segundos (tempo da animação de pulsação)
        setTimeout(function() {
            window.location.href = "../materias.html"; // Substitua "nova_pagina.html" pelo nome da sua nova página
        }, 1500);

    }, 3500); // 2s para a animação de pulsação + 2s de atraso
});
