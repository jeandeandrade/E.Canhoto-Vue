<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <div class="container-fluid">
    <RouterView />
    <div class="info">
      <div class="row">
        <div class="navbar col-2">
          <a class="icon new-user ativo col-12">
            <h2>
              <i class="bi bi-person-fill-add"></i>
            </h2>
            <strong>Novo Usuário</strong>
          </a>
          <router-link to="./table" class="icon tabela col-6">
            <h2>
              <i class="bi bi-grid-3x2"></i>
            </h2>
            <strong>Tabela</strong>
          </router-link>
          <router-link to="./dashboard" class="icon voltar col-12">
            <h2>
              <i class="bi bi-box-arrow-in-left"></i>
            </h2>
            <strong>Voltar</strong>
          </router-link>
        </div>
        <div class="fundo-canhoto col-10">
          <form class="row g-3" id="form">
            <h1>Cadastro de Usuários</h1>

            <div class="col-md-6">
              <label for="txtFirstName" class="form-label">Primeiro Nome</label>
              <input type="text" class="form-control" id="txtFirstName" />
            </div>

            <div class="col-md-6">
              <label for="txtLastName" class="form-label">Ultimo Nome</label>
              <input type="text" class="form-control" id="txtLastName" />
            </div>

            <div class="col-6">
              <label for="txtEmail" class="form-label">Email</label>
              <input type="email" class="form-control" id="txtEmail" />
            </div>

            <div class="col-6">
              <label for="txtPassword" class="form-label">Senha</label>
              <input type="password" class="form-control" id="txtPassword" />
            </div>

            <div class="buttons" id="btn">
              <router-link to="./table" class="md-2 btn btn-primary" id="registerBtn">
                Enviar
              </router-link>
              <router-link to="./table" class="md-2 btn btn-danger" id="cancelRegisterBtn">
                Cancelar
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap");

.container-fluid form {
  margin: 2px 2px 2px 2px;
}

.container-fluid form h1 {
  font-size: 30px;
}

.container-fluid form .form-label {
  font-size: 16px;
  font-family: "JetBrains Mono", sans-serif;
  font-weight: 500;
}

.container-fluid form .form-control {
  background-color: #fdeaab;
  border: none !important;
  box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.3);
  margin: 2px;
  padding: 8px;
  border-radius: 8px;
  width: 100%;
  outline: none !important;
}

.container-fluid form .form-label {
  margin: 0;
}

.row {
  padding-left: 10px;
}

.navbar {
  font-family: "JetBrains Mono", sans-serif;
  gap: 10px;
}

.navbar h2 {
  font-size: 25px;
}

.navbar .icon i strong {
  font-weight: 300;
}

.help {
  margin-left: 26%;
}

.help h2 {
  margin-left: 33%;
}

.fundo-canhoto {
  background-color: white;
  border-radius: 25px;
}

.fundo-canhoto h4 {
  margin: 15px;
}

.canhoto {
  margin: 50px;
}

.canhoto {
  margin-bottom: 20px;
  margin-top: 10px;
}

.icons>* {
  margin: 0;
}
</style>
