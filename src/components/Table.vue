<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <div class="container-fluid">
    <RouterView />
    <div class="info">
      <div class="row">
        <div class="navbar col-2">
          <router-link to="./user" class="icon new-user col-10">
            <h2><i class="bi bi-person-lines-fill"></i></h2>
            <strong>Usuários</strong>
          </router-link>
          <div class="icon tabela ativo col-6">
            <a>
              <h2><i class="bi bi-receipt-cutoff"></i></h2>
              <strong>Canhotos</strong>
            </a>
          </div>
          <router-link to="./dashboard" class="icon voltar col-6">
            <h2><i class="bi bi-box-arrow-in-left"></i></h2>
            <strong>Voltar</strong>
          </router-link>
        </div>
        <div class="fundo-canhoto col-10">
          <h4>Gestão de Canhotos</h4>
          <div class="row canhoto">
            <label>1.300 <b>Canhotos Encontrados:</b></label>
            <div class="col-3">
              <select class="form-select" aria-label="Default select example">
                <option selected disabled>Categoria</option>
                <option value="1">Alimentação</option>
                <option value="2">Combustível</option>
                <option value="3">Estadia</option>
              </select>
            </div>
            <div class="col-3">
              <select class="form-select" aria-label="Default select example">
                <option selected disabled>Valor</option>
                <option value="1">100 até 2 mil</option>
                <option value="2">2 mil até 5 mil</option>
                <option value="3">5 mil até 7 mil</option>
                <option value="4">7 mil até 10 mil</option>
              </select>
            </div>
            <div class="col-3">
              <select class="form-select" aria-label="Default select example">
                <option selected disabled>Transportadora</option>
                <option value="1">Alfa Transportes</option>
                <option value="2">Braspress</option>
                <option value="3">Patrus</option>
                <option value="4">Rodonaves</option>
                <option value="5">TNT Mercúrio</option>
              </select>
            </div>
            <form class="d-flex col-3" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Procurar"
                aria-label="Search"
              />
              <button class="btn btn-success" type="submit">
                <i class="bi bi-search"></i>
              </button>
            </form>
            <p id="addCanhoto">
              <router-link to="./newCanhoto">Adicionar Canhotos</router-link>
            </p>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Número NF</th>
                  <th scope="col">Entregador</th>
                  <th scope="col">Preço</th>
                  <th scope="col">Categorias</th>
                  <th scope="col">Data</th>
                  <th scope="col">Ação</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr>
                  <th scope="row">1</th>
                  <td>0000000000</td>
                  <td>Test</td>
                  <td>9.999,00</td>
                  <td>Test</td>
                  <td>01/01/0001</td>
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
                                Visualizar Canhoto
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
                                    placeholder="Ex: Julio César"
                                    disabled
                                  />
                                </div>
                                <div class="col-md-6">
                                  <label for="inputCategoria" class="form-label"
                                    >Categoria</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="inputCategoria"
                                    placeholder="Ex: Gasolina"
                                    disabled
                                  />
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-6">
                                  <label
                                    for="inputValorGasto"
                                    class="form-label"
                                    >Valor Gasto</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="inputValorGasto"
                                    placeholder="Ex: 9999,99"
                                    disabled
                                  />
                                </div>
                                <div class="col-md-6">
                                  <label
                                    for="inputNotaFiscal"
                                    class="form-label"
                                    >Nota Fiscal</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="inputNotaFiscal"
                                    placeholder="Ex: 123456789"
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
                                Editar Canhoto
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
                                    placeholder="Ex: Julio César"
                                  />
                                </div>
                                <div class="col-md-6">
                                  <label for="inputCategoria" class="form-label"
                                    >Categoria</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="inputCategoria"
                                    placeholder="Ex: Gasolina"
                                  />
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-6">
                                  <label
                                    for="inputValorGasto"
                                    class="form-label"
                                    >Valor Gasto</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="inputValorGasto"
                                    placeholder="Ex: 9999,99"
                                  />
                                </div>
                                <div class="col-md-6">
                                  <label
                                    for="inputNotaFiscal"
                                    class="form-label"
                                    >Nota Fiscal</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="inputNotaFiscal"
                                    placeholder="Ex: 123456789"
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

                    <!-- Button trigger modal -->
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
                  <td>0000000000</td>
                  <td>Test</td>
                  <td>9.999,00</td>
                  <td>Test</td>
                  <td>01/01/0001</td>
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

                    <!-- Button trigger modal -->
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
                  <td>0000000000</td>
                  <td>Test</td>
                  <td>9.999,00</td>
                  <td>Test</td>
                  <td>01/01/0001</td>
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

                    <!-- Button trigger modal -->
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
                  <td>0000000000</td>
                  <td>Test</td>
                  <td>9.999,00</td>
                  <td>Test</td>
                  <td>01/01/0001</td>
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

                    <!-- Button trigger modal -->
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
                  <td>0000000000</td>
                  <td>Test</td>
                  <td>9.999,00</td>
                  <td>Test</td>
                  <td>01/01/0001</td>
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

                    <!-- Button trigger modal -->
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
.canhoto .col-2,
.col-3 {
  margin-bottom: 20px;
  margin-top: 10px;
}

#addCanhoto a {
  background-color: #fff;
  border: none;
  color: brown;
  font-size: 20px;
  font-weight: 500;
}

#addCanhoto a:hover {
  color: red;
}
</style>
