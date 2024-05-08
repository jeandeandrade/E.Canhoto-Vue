<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <div class="container-fluid">
    <RouterView />
    <div class="info">
      <div class="row">
        <div class="navbar col-2">
          <a class="icon new-user ativo col-10">
            <h2><i class="bi bi-person-fill-add"></i></h2>
            <strong>Usuários</strong>
          </a>
          <div class="icon tabela col-6">
            <router-link to="./table">
              <h2><i class="bi bi-grid-3x2"></i></h2>
              <strong>Canhotos</strong>
            </router-link>
          </div>
          <router-link to="./dashboard" class="icon voltar col-6">
            <h2><i class="bi bi-box-arrow-in-left"></i></h2>
            <strong>Voltar</strong>
          </router-link>
        </div>
        <div class="fundo-canhoto col-10">
          <h4>Gestão de Funcionários</h4>
          <div class="row canhoto">
            <label>300 <b>Funcionários Encontrados:</b></label>
<<<<<<< HEAD
            <p id="addCanhoto">
=======
            <p id="addUser">
>>>>>>> 5c080d2 (adding new files for employees and employee details and making a major adjustment to the css and main.css files to make them easier to read and organize)
              <router-link to="./newuser">Adicionar Funcionários</router-link>
            </p>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Sobrenome</th>
                  <th scope="col">E-mail</th>
                  <th scope="col">Função</th>
                  <th scope="col">Ação</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr>
                  <th scope="row">1</th>
                  <td>Whindersson</td>
                  <td>Nunes</td>
                  <td>WhinderssonNunes@gmail.com</td>
                  <td>Entregador</td>
                  <td>
                    <router-link to="./userDetails"><i class="bi bi-eye"></i></router-link>
                    <a href="#"><i class="bi bi-trash"></i></a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Bam</td>
                  <td>Bam</td>
                  <td>BamBam@gmail.com</td>
                  <td>Entregador</td>
                  <td>
                    <router-link to="./userDetails"><i class="bi bi-eye"></i></router-link>
                    <a href="#"><i class="bi bi-trash"></i></a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Graciany</td>
                  <td>Barbosa</td>
                  <td>GracyDoBelo@gmail.com</td>
                  <td>Entregador(a)</td>
                  <td>
                    <router-link to="./userDetails"><i class="bi bi-eye"></i></router-link>
                    <a href="#"><i class="bi bi-trash"></i></a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Estevão</td>
                  <td>Willian</td>
                  <td>EstevaoWillian@gmail.com</td>
                  <td>Entregador</td>
                  <td>
                    <router-link to="./userDetails"><i class="bi bi-eye"></i></router-link>
                    <a href="#"><i class="bi bi-trash"></i></a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Peter</td>
                  <td>EiNerd</td>
                  <td>PeterDoEinerd@gmail.com</td>
                  <td>Entregador</td>
                  <td>
                    <router-link to="./userDetails"><i class="bi bi-eye"></i></router-link>
                    <a href=""><i class="bi bi-trash"></i></a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="clearfix">
              <div class="hint-text">5 Itens Por Página</div>
              <ul class="pagination">
                <li class="page-item disabled">
                  <a href="" class="page-link">Anterior</a>
                </li>
                <li class="page-item active">
                  <a href="" class="page-link">1</a>
                </li>
                <li class="page-item"><a href="" class="page-link">2</a></li>
                <li class="page-item"><a href="" class="page-link">3</a></li>
                <li class="page-item"><a href="" class="page-link">4</a></li>
                <li class="page-item"><a href="" class="page-link">5</a></li>
                <li class="page-item">
                  <a href="" class="page-link">Próximo</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
<<<<<<< HEAD
* {
  font-family: 'JetBrains Mono', sans-serif;
}

body {
  background-color: burlywood;
  color: black;
}

.info {
  margin-top: 40px;
  border-radius: 25px;
  background-color: brown;
}

.ativo {
  background-color: burlywood;
}


.navbar a {
  color: black;
}

.new-user i {
  margin: 3px;
}

.new-user {
  margin-top: 30px;
}

.navbar h5 {
  margin-left: 20%;
  color: black;
}

.tabela {
  margin-left: -0%;
}

.tabela h2 {
  margin-left: 33%;
}

.help {
  margin-left: -0%;
}

.help h2 {
  margin-left: 33%;
}

.fundo-canhoto {
  background-color: white;
  border-radius: 25px;
}
=======
>>>>>>> 5c080d2 (adding new files for employees and employee details and making a major adjustment to the css and main.css files to make them easier to read and organize)

.fundo-canhoto label {
  margin-top: -20px;
}

<<<<<<< HEAD
.fundo-canhoto h4 {
  margin: 15px;
}

.canhoto {
  margin: 50px;
}

.canhoto .col-2,
.col-3 {
  margin-bottom: 20px;
  margin-top: 10px;
}

#addCanhoto a {
=======
#addUser a {
>>>>>>> 5c080d2 (adding new files for employees and employee details and making a major adjustment to the css and main.css files to make them easier to read and organize)
  background-color: #fff;
  border: none;
  color: brown;
  font-size: 20px;
  font-weight: 500;
<<<<<<< HEAD
  font-family: "JetBrains Mono", sans-serif;
}

#addCanhoto a:hover {
  color: red;
}

.container form .test .form-select {
  border: none !important;
  outline: none !important;
}

table td a {
  color: black;
}

/* paginação */

.pagination {
  float: right;
}

.pagination li a {
  border: none;
  font-size: 15px;
  min-width: 30px;
  min-height: 30px;
  color: #999;
  margin: 0 2px;
  line-height: 30px;
  border-radius: 2px !important;
  text-align: center;
  padding: 0 6px;
}

.pagination li a:hover {
  color: #666;
}

.pagination li.active a,
.pagination li.active a.page-link {
  background-color: rgb(248, 2, 2);
}

.pagination li.active a:hover {
  background-color: rgb(228, 2, 2);
}

.hint-text {
  float: left;
  margin-top: 10px; 
  font-size: 15px;
}
</style>
=======
}

#addUser a:hover {
  color: red;
}

</style>
>>>>>>> 5c080d2 (adding new files for employees and employee details and making a major adjustment to the css and main.css files to make them easier to read and organize)
