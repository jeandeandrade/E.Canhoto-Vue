<script setup>
</script>

<template>
  <div class="container-fluid">
    <div class="info">
      <div class="row">
        <div class="fundo-canhoto col-10">
          <h4>Gestão de Funcionários</h4>
          <div class="row canhoto">
            <label>300 <b>Funcionários Encontrados:</b></label>
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
                  <th scope="col">E-mail</th>
                  <th scope="col">Função</th>
                  <th scope="col">Ação</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr v-for="user in users" ::key="user.id">
                  <th scope="row">{{ user.id }}</th>
                  <td>{{ user.nome }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.funcao }}</td>
                  <td>
                    <button type="button" class="btn btn-icons border-0 shadow-none" data-bs-toggle="modal"
                      data-bs-target="#modalUserView"
                      @click="viewModalDetails(user)">
                      <i class="bi bi-eye"></i>
                    </button>

                    <button type="button" class="btn btn-icons border-0 shadow-none" data-bs-toggle="modal"
                      data-bs-target="#modalUserEdit">
                      <i class="bi bi-pencil"></i>
                    </button>

                    <button type="button" class="btn btn-icons border-0 shadow-none" @click="idExcluir(user.id)">
                      <i class="bi bi-trash"></i>
                    </button>

                  </td>
                </tr>
                
              </tbody>
            </table>
            <!-- <div class="clearfix">
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
            </div> -->

            <div class="modal fade" id="modalUserView" tabindex="-1" aria-labelledby="modalUserViewLabel"
              aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="modalUserViewLabel">
                      Visualizar Funcionário
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-md-12">
                        <label for="inputNome" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="inputNome" disabled v-model="modalData.nome"/>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label for="inputEmail" class="form-label">Email</label>
                        <input type="text" class="form-control" id="inputEmail" disabled v-model="modalData.email"/>
                      </div>
                      <div class="col-md-6">
                        <label for="inputFuncao" class="form-label">Função</label>
                        <input type="text" class="form-control" id="inputFuncao" disabled v-model="modalData.funcao"/>
                      </div>
                    </div>
                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
                      Fechar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal fade" id="modalUserEdit" tabindex="-1" aria-labelledby="modalUserEditLabel"
              aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="modalUserEditLabel">
                      Editar Funcionário
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-md-12">
                        <label for="inputNome" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="inputNome" v-model="modalData.nome" />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label for="inputEmail" class="form-label">Email</label>
                        <input type="text" class="form-control" id="inputEmail" v-model="modalData.email" />
                      </div>
                      <div class="col-md-6">
                        <label for="inputFuncao" class="form-label">Função</label>
                        <input type="text" class="form-control" id="inputFuncao" v-model="modalData.funcao"/>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                      Cancelar
                    </button>
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal" @click="atualizarUser">
                      Salvar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal fade" id="modalUserDelete" tabindex="-1" aria-labelledby="modalUserDeleteLabel"
              aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="modalUserDeleteLabel">
                      Excluir Funcionário
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <label for="">Deseja <b>EXCLUIR</b> esse funcionário?</label>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
                      Voltar
                    </button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                    @click="confirmDelete()"
                    > 
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal fade" id="newUserModal" tabindex="-1" aria-labelledby="newUserModalLabel"
              aria-hidden="true">
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
                    <button type="button" class="btn btn-primary" @click="SalvarFuncionario()">Salvar
                      Funcionário</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import UserDataService from '../services/UserDataService';
import NewUser from './NewUser.vue';
import UserDetails from './UserDetails.vue';

export default {
  name: "list-users",
  data() {
    return {
      users: [],
      modalData: {
        id: "",
        nome: "",
        email: "",
        funcao: ""
      },
      userToDelete: null
    };
  },
  methods: {
    retrieveUsers() {
      UserDataService.getAll()
      .then(response => {
        this.users = response.data;
        console.log(this.users);
      })
      .catch(e => {
        console.log(e);
      });
    },
    async SalvarFuncionario() {
      let userForm = document.querySelector("#newUserForm");
      await userForm.dispatchEvent(new Event("submit"));
      retrieveUsers();
    },
    viewModalDetails(user) {
      this.modalData = user;
    },
    editUserDetails(user) {
      this.modalData = { ...user };
    },
    atualizarUser() {
      UserDataService.update(this.modalData.id, this.modalData)
        .then(response => {
          console.log(response.data);
          this.retrieveUsers();
        })
        .catch(e => {
          console.log(e);
        });
    },
    idExcluir(id) {
      this.userToDelete = id;

      var deleteModal = new bootstrap.Modal(document.getElementById("modalUserDelete"));
      deleteModal.show();
    },
    confirmDelete() {
      if (this.userToDelete !== null) {
        UserDataService.delete(this.userToDelete)
          .then(response => {
            console.log(response.data);
            this.retrieveUsers();
          })
          .catch(e => {
            console.log(e);
          });
      }
    }
  },
  components: {
    NewUser,
    UserDetails
  },
  mounted() {
    this.retrieveUsers();
  }
}
</script>

<style scoped>
.fundo-canhoto label {
  margin-bottom: 18px
}

#addUser a {
  background-color: #fff;
  border: none;
  color: brown;
  font-size: 20px;
  font-weight: 500;
}

#addUser a:hover {
  color: red;
}
</style>
