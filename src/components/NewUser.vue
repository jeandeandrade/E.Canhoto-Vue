<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <RouterView />
  <div class="container-fluid fundo-canhoto">
      <div class="row canhoto">
        <form class="form row">
          <div class="col-6">
            <label for="inputNome" class="form-label">Nome</label>
            <input type="text" class="form-control" id="inputNome" placeholder="Ex: Julio César" />
          </div>
          <div class="col-md-6">
            <label for="inputNota" class="form-label">Sobrenome</label>
            <input type="text" class="form-control" id="inputNota" placeholder="Ex: Moreno" />
          </div>
          <div class="col-6">
            <label for="inputGasto" class="form-label">E-mail</label>
            <input type="text" class="form-control" id="inputGasto" placeholder="Ex: JCesarM@gmail.com" />
          </div>
          <div class="col-6">
            <label for="inputGasto" class="form-label">Função</label>
            <input type="text" class="form-control" id="inputGasto" placeholder="Ex: Entregador" />
          </div>
        </form>
      </div>
  </div>
</template>

<style scoped>
.container-fluid form {
  margin: 2px 2px 2px 2px;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: burlywood;
  color: black;
}

.form {
  margin-top: auto;
}



.container-fluid form .form-label {
  margin: 0;
}

.form-label {
  padding-top: 0.5rem;
}

.fundo-canhoto {
  background-color: white;
  border-radius: 25px;
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

.form-label {
  padding-top: 0.5rem;
}

.canhoto {
  margin: 20px;
}
</style>
