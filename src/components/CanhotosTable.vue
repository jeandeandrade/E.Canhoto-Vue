<script setup>
import NewCanhoto from "./NewCanhoto.vue";
import DetailsCanhoto from "./DetailsCanhoto.vue";
</script>

<template>
  <div class="container-fluid">
    <div class="info">
      <div class="row">
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
              <input class="form-control me-2" type="search" placeholder="Procurar" aria-label="Search" />
              <button class="btn btn-success" type="submit">
                <i class="bi bi-search"></i>
              </button>
            </form>
            <p id="addCanhoto">
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newCanhotoModal">
                Adicionar Canhoto
              </button>
            </p>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Número NF</th>
                  <th scope="col">Entregador</th>
                  <th scope="col">Preço</th>
                  <th scope="col">Categoria</th>
                  <th scope="col">Data</th>
                  <th scope="col">Ação</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr v-for="canhoto in canhotos" :key="canhoto.id">
                  <td>{{ canhoto.id }}</td>
                  <td>{{ canhoto.notaFiscal }}</td>
                  <td>{{ canhoto.nome }}</td>
                  <td>{{ canhoto.valorGasto }}</td>
                  <td v-if="canhoto.categoria == 1">Alimentação</td>
                  <td v-if="canhoto.categoria == 2">Hospedagem</td>
                  <td v-if="canhoto.categoria == 3">Gasolina</td>
                  <td v-if="canhoto.categoria == 4">Remédios</td>
                  <td v-if="canhoto.categoria == 5">Reparos</td>
                  <td>01/01/0001</td>
                  <td>
                    <button type="button" class="btn btn-icons border-0 shadow-none" data-bs-toggle="modal"
                      data-bs-target="#modalCanhotoView">
                      <i class="bi bi-eye"></i>
                    </button>

                    <button type="button" class="btn btn-icons border-0 shadow-none" data-bs-toggle="modal"
                      data-bs-target="#modalCanhotoEdit">
                      <i class="bi bi-pencil"></i>
                    </button>

                    <button type="button" class="btn btn-icons border-0 shadow-none" data-bs-toggle="modal"
                      data-bs-target="#modalCanhotoDelete" @click="">
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
          </div>
        </div>
      </div>
    </div>



    <div class="modal fade" id="newCanhotoModal" tabindex="-1" aria-labelledby="newCanhotoModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="newCanhotoModalLabel">Cadastro de Canhotos</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <NewCanhoto />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            <button type="button" class="btn btn-primary" @click="salvarCanhoto()">Salvar Canhoto</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="modalCanhotoDelete" tabindex="-1" aria-labelledby="modalCanhotoDeleteLabel"
      aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="modalCanhotoDeleteLabel">
              Excluir Canhoto
            </h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <label for="">Deseja <b>EXCLUIR</b> esse canhoto?</label>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
              Voltar
            </button>
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="modalCanhotoEdit" tabindex="-1" aria-labelledby="modalCanhotoEditLabel"
      aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="modalCanhotoEditLabel">
              Editar Canhoto
            </h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6">
                <label for="inputNome" class="form-label">Nome</label>
                <input type="text" class="form-control" id="inputNome" placeholder="Ex: Julio César" />
              </div>
              <div class="col-md-6">
                <label for="inputCategoria" class="form-label">Categoria</label>
                <input type="text" class="form-control" id="inputCategoria" placeholder="Ex: Gasolina" />
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <label for="inputValorGasto" class="form-label">Valor Gasto</label>
                <input type="text" class="form-control" id="inputValorGasto" placeholder="Ex: 9999,99" />
              </div>
              <div class="col-md-6">
                <label for="inputNotaFiscal" class="form-label">Nota Fiscal</label>
                <input type="text" class="form-control" id="inputNotaFiscal" placeholder="Ex: 123456789" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Cancelar
            </button>
            <button type="button" class="btn btn-success" @click="salvarCanhoto()" data-bs-dismiss="modal">
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="modalCanhotoView" tabindex="-1" aria-labelledby="modalCanhotoViewLabel"
      aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="modalCanhotoViewLabel">
              Visualizar Canhoto
            </h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <DetailsCanhoto :id="this.selectedCanhoto" />
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import CanhotoDataService from '../services/CanhotoDataService';

export default {
  name: "list-canhotos",
  data() {
    return {
      canhotos: [],
      selectedCanhoto: '',
    };
  },
  methods: {
    retrieveCanhotos() {
      CanhotoDataService.getAll()
        .then(response => {
          this.canhotos = response.data;
          console.log(this.canhotos);
        })
        .catch(e => {
          console.log(e);
        });
    },
    async salvarCanhoto() {
      let canhotoForm = document.querySelector("#newCanhotoForm");
      await canhotoForm.dispatchEvent(new Event("submit"));
      this.retrieveCanhotos();
    },
    sendInfo(id){
      this.selectedCanhoto = id;
    }

  },
  mounted() {
    this.retrieveCanhotos();
  }
}
</script>

<style scoped>
.fundo-canhoto #titulo-tabela {
  padding: 15px;
}

.fundo-canhoto {
  background-color: white;
  border-radius: 25px;
  width: auto;
  display: inline-block;
  vertical-align: middle;
}

.canhoto {
  margin: 50px;
}



.canhoto .col-2,
.col-3 {
  margin-bottom: 20px;
  margin-top: 10px;
}

.container form .test .form-select {
  border: none !important;
  outline: none !important;
}

table td a {
  color: black;
}

.pagination {
  float: right;
}

.pagination li a {
  border: none;
  font-size: 15px;
  min-width: 30px;
  min-height: 30px;
  color: #ccbdbd;
  margin: 0 2px;
  line-height: 30px;
  border-radius: 2px !important;
  text-align: center;
  padding: 0 6px;
}

.pagination li a:hover {
  color: #ffffff;
  background-color: #b6a9a9;
}

.hint-text {
  float: left;
  margin-top: 10px;
  font-size: 15px;
}
</style>
