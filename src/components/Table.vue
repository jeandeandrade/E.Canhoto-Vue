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
            <h2><i class="bi bi-person-fill-add"></i></h2>
            <strong>Usuários</strong>
          </router-link>
          <div class="icon tabela ativo col-6">
            <a>
              <h2><i class="bi bi-grid-3x2"></i></h2>
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
            <div class="test col-3">
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
                    <router-link to="./detail"><i class="bi bi-eye"></i></router-link>
                    <a href="#"><i class="bi bi-pencil"></i></a>
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
                    <router-link to="./detail"><i class="bi bi-eye"></i></router-link>
                    <a href="#"><i class="bi bi-pencil"></i></a>
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
                    <router-link to="./detail"><i class="bi bi-eye"></i></router-link>
                    <a href="#"><i class="bi bi-pencil"></i></a>
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
                    <router-link to="./detail"><i class="bi bi-eye"></i></router-link>
                    <a href="#"><i class="bi bi-pencil"></i></a>
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
                    <router-link to="./detail"><i class="bi bi-eye"></i></router-link>
                    <a href="#"><i class="bi bi-pencil"></i></a>
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

.container form .test .form-select {
  border: none !important;
  outline: none !important;
}
<<<<<<< HEAD
=======

table td a {
  color: black;
}

>>>>>>> 5c080d2 (adding new files for employees and employee details and making a major adjustment to the css and main.css files to make them easier to read and organize)
</style>
