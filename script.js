function mudarTexto() {
    document.getElementById("demo").innerHTML = "Texto alterado!";
}

// Função para mostrar um alerta
function mostrarAlerta() {
    alert("Alerta exibido!");
}

// Função para mudar a cor do texto do parágrafo
function mudarCorTexto() {
    document.getElementById("demo").style.color = "blue"; // Exemplo de mudança de cor
}

// Adicionando evento de mouseover ao parágrafo
document.getElementById("demo").addEventListener("mouseover", mudarCorTexto);
