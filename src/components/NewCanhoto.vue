<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
    <div class="container fundo-canhoto col-10 canhoto">
        <form class="form row" id="newCanhotoForm">
            <div class="col-6">
                <label for="inputNome" class="form-label">Nome do Entregador</label>
                <input type="text" class="form-control" id="inputNome" placeholder="Ex: Julio César">
            </div>
            <div class="col-md-6">
                <label for="inputNota" class="form-label">Número da Nota</label>
                <input type="text" class="form-control" id="inputNota" placeholder="Ex: 000000000000">
            </div>
            <div class="col-6">
                <label for="inputGasto" class="form-label">Valor Gasto</label>
                <input type="text" class="form-control" id="inputGasto" placeholder="Ex: R$500,00">
            </div>
            <div class="col-6">
                <label class="form-label" for="">Categoria</label>
                <select name="selectCategory" class="form-select" aria-label="Default select example">
                    <option selected disabled>Selecione o tipo da despesa</option>
                    <option value="1">Alimentação</option>
                    <option value="2">Hospedagem</option>
                    <option value="3">Gasolina</option>
                    <option value="4">Remédios</option>
                    <option value="5">Reparos</option>
                </select>
            </div>
        </form>
    </div>
</template>

<style scoped>
.form {
    margin-top: auto;
}

.form-control:focus {
  background-color: #FDEAAB !important;
  border: none !important;
  box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.3) !important;
  padding: 8px !important;
  border-radius: 8px !important;
  width: 100% !important;
  outline: none !important;
}


.form-label {
    padding-top: .5rem;
}

.fundo-canhoto {
    background-color: white;
    border-radius: 25px;
}

.container {
    width: fit-content;
}

.fundo-canhoto h4 {
    margin: 15px;
}

.canhoto {
  margin: 20px;
}

.canhoto .col-2,
.col-3 {
    margin-bottom: 20px;
    margin-top: 10px;
}
</style>
