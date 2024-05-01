<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <div class="container-fluid">
    <RouterView />
    <div class="info">
      <div class="row">
        <div class="navbar col-2">
          <div class="icon new-user ativo col-12">
            <a>
              <h2>
                <i class="bi bi-person-fill-add"
                  ><strong>Novo Usuário</strong></i
                >
              </h2>
            </a>
          </div>
          <div class="icon tabela col-6">
            <router-link to="./table">
              <h2>
                <i class="bi bi-grid-3x2"><strong>Tabela</strong></i>
              </h2>
            </router-link>
          </div>
          <div class="icon voltar col-12">
            <router-link to="./dashboard">
              <h2>
                <i class="bi bi-box-arrow-in-left"><strong>Voltar</strong></i>
              </h2>
            </router-link>
          </div>
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
              <a href="" class="md-2 btn btn-primary" id="registerBtn"
                >Enviar</a
              >
              <a href="" class="md-2 btn btn-danger" id="cancelRegisterBtn"
                >Cancelar</a
              >
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

.container-fluid .btn {
  color: #fff;
  font-family: "JetBrains Mono", sans-serif;
  font-size: 14px;
  padding: 8px 20px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-top: 10px;
  cursor: pointer;
  margin: 5px;
}

.row {
  padding-left: 10px;
}

.navbar {
  font-family: "JetBrains Mono", sans-serif;
}

.navbar h2 {
  font-size: 25px;
}

.navbar .tabela {
  margin-right: 25%;
}

.navbar .help {
  margin-right: 25%;
}

.navbar .ativo {
  padding: 12px;
}

.new-user i {
  /* margin: 3px; */
  margin-left: 5px;
}

.new-user {
  margin-top: 30px;
}

.tabela {
  margin-left: 26%;
}

.tabela h2 {
  margin-left: 33%;
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
  max-width: 1269px;
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

.icons > * {
  margin: 0;
}
</style>
