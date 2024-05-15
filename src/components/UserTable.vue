<script setup>
import { RouterView, RouterLink } from "vue-router";
import NewUser from "./NewUser.vue";
</script>

<template>
  <div class="container-fluid tabela fundo-canhoto">
    <h4>Gestão de Funcionários</h4>
    <div class="row canhoto">
      <label>300 <b>Funcionários Encontrados:</b></label>
      <p id="addCanhoto"></p>

      <p id="addUser">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newUserModal">
          Adicionar Funcionário
        </button>
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

    <div class="modal fade" id="newUserModal" tabindex="-1" aria-labelledby="newUserModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="newUserModalLabel">Cadastro de Funcionário</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <NewUser />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            <button type="button" class="btn btn-primary" @click="submitNewCanhoto(this)">Salvar Funcionário</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

.fundo-canhoto {
  background-color: white;
  border-radius: 25px;
}

.fundo-canhoto label {
  margin-top: -20px;
}

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

#addUser a {
  background-color: #fff;
  border: none;
  color: brown;
  font-size: 20px;
  font-weight: 500;
  font-family: "JetBrains Mono", sans-serif;
}


.container form .test .form-select {
  border: none !important;
  outline: none !important;
}

#addUser a:hover {
  color: red;
}
</style>
