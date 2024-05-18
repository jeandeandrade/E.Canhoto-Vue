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
            <h2><i class="bi bi-person-lines-fill"></i></h2>
            <strong>Usuários</strong>
          </a>
          <div class="icon tabela col-6">
            <router-link to="./table">
              <h2><i class="bi bi-receipt-cutoff"></i></h2>
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
            <p id="addUser">
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
                  <td>Entregador(a)</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-icons border-0 shadow-none"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalView"
                    >
                      <i class="bi bi-eye"></i>
                    </button>

                    <transition name="custom-fade">
                      <div
                        class="modal fade"
                        id="exampleModalView"
                        tabindex="-1"
                        aria-labelledby="exampleModalViewLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1
                                class="modal-title fs-5"
                                id="exampleModalViewLabel"
                              >
                                Visualizar Funcionário
                              </h1>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="inputNome" class="form-label"
                                    >Nome</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="inputNome"
                                    placeholder="Ex: Whindersson"
                                    disabled
                                  />
                                </div>
                                <div class="col-md-6">
                                  <label for="inputSobrenome" class="form-label"
                                    >Sobrenome</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="inputSobrenome"
                                    placeholder="Ex: Nunes"
                                    disabled
                                  />
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="inputEmail" class="form-label"
                                    >Email</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="inputEmail"
                                    placeholder="Ex: test@gmail.com"
                                    disabled
                                  />
                                </div>
                                <div class="col-md-6">
                                  <label for="inputFuncao" class="form-label"
                                    >Função</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="inputFuncao"
                                    placeholder="Ex: Entregador"
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>

                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-primary"
                                data-bs-dismiss="modal"
                              >
                                Fechar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </transition>

                    <button
                      type="button"
                      class="btn btn-icons border-0 shadow-none"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalEdit"
                    >
                      <i class="bi bi-pencil"></i>
                    </button>

                    <transition name="custom-fade">
                      <div
                        class="modal fade"
                        id="exampleModalEdit"
                        tabindex="-1"
                        aria-labelledby="exampleModalEditLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1
                                class="modal-title fs-5"
                                id="exampleModalEditLabel"
                              >
                                Editar Funcionário
                              </h1>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="inputNome" class="form-label"
                                    >Nome</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="inputNome"
                                    placeholder="Ex: Whindersson"
                                  />
                                </div>
                                <div class="col-md-6">
                                  <label for="inputSobrenome" class="form-label"
                                    >Sobrenome</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="inputSobrenome"
                                    placeholder="Ex: Nunes"
                                  />
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="inputEmail" class="form-label"
                                    >Email</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="inputEmail"
                                    placeholder="Ex: test@gmail.com"
                                  />
                                </div>
                                <div class="col-md-6">
                                  <label for="inputFuncao" class="form-label"
                                    >Função</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="inputFuncao"
                                    placeholder="Ex: Entregador"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Cancelar
                              </button>
                              <button type="button" class="btn btn-success" data-bs-dismiss="modal">
                                Salvar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </transition>
                    <button
                      type="button"
                      class="btn btn-icons border-0 shadow-none"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalDelete"
                    >
                      <i class="bi bi-trash"></i>
                    </button>

                    <transition name="custom-fade">
                      <div
                        class="modal fade"
                        id="exampleModalDelete"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1
                                class="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                                Excluir Canhoto
                              </h1>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <label for="">Deseja <b>EXCLUIR</b> esse canhoto?</label>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-primary"
                                data-bs-dismiss="modal"
                              >
                                Voltar
                              </button>
                              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                                Excluir
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </transition>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Bam</td>
                  <td>Bam</td>
                  <td>BamBam@gmail.com</td>
                  <td>Entregador(a)</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-icons border-0 shadow-none"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalView"
                    >
                      <i class="bi bi-eye"></i>
                    </button>
                    <button
                      type="button"
                      class="btn btn-icons border-0 shadow-none"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalEdit"
                    >
                      <i class="bi bi-pencil"></i>
                    </button>
                    <button
                      type="button"
                      class="btn btn-icons border-0 shadow-none"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalDelete"
                    >
                      <i class="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Graciany</td>
                  <td>Barbosa</td>
                  <td>GracyDoBelo@gmail.com</td>
                  <td>Entregador(a)</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-icons border-0 shadow-none"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalView"
                    >
                      <i class="bi bi-eye"></i>
                    </button>
                    <button
                      type="button"
                      class="btn btn-icons border-0 shadow-none"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalEdit"
                    >
                      <i class="bi bi-pencil"></i>
                    </button>
                    <button
                      type="button"
                      class="btn btn-icons border-0 shadow-none"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalDelete"
                    >
                      <i class="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Estevão</td>
                  <td>Willian</td>
                  <td>EstevaoWillian@gmail.com</td>
                  <td>Entregador(a)</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-icons border-0 shadow-none"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalView"
                    >
                      <i class="bi bi-eye"></i>
                    </button>
                    <button
                      type="button"
                      class="btn btn-icons border-0 shadow-none"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalEdit"
                    >
                      <i class="bi bi-pencil"></i>
                    </button>
                    <button
                      type="button"
                      class="btn btn-icons border-0 shadow-none"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalDelete"
                    >
                      <i class="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Peter</td>
                  <td>EiNerd</td>
                  <td>PeterDoEinerd@gmail.com</td>
                  <td>Entregador(a)</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-icons border-0 shadow-none"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalView"
                    >
                      <i class="bi bi-eye"></i>
                    </button>
                    <button
                      type="button"
                      class="btn btn-icons border-0 shadow-none"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalEdit"
                    >
                      <i class="bi bi-pencil"></i>
                    </button>
                    <button
                      type="button"
                      class="btn btn-icons border-0 shadow-none"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalDelete"
                    >
                      <i class="bi bi-trash"></i>
                    </button>
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
