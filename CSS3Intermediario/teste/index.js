$(document).ready(function() {
  $("#meuFormulario").submit(function(event) {
    event.preventDefault(); // Impede o envio do formulário

    let nome = $("#nome").val();

    if (nome.trim() === "") {
      $("#erro").text("O campo Nome é obrigatório.");
    } else {
      $("#erro").text("");  // Limpa o erro
      alert("Formulário enviado com sucesso!");
      // Aqui você poderia fazer o submit de verdade, se quisesse.
      // Ex: this.submit();
    }
  });
});
