<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <div class="container center d-flex">
    <RouterView />
    <div class="navbar info row">
      <h1>E-Canhotos</h1>
      <router-link to="./sign" class="icon sign">
        <h2>
          <i class="bi bi-box-arrow-in-right"></i>
        </h2>
        <strong>Login</strong>
      </router-link>
      <router-link to="./newuser" class="icon new-user">
        <h2>
          <i class="bi bi-person-fill-add"></i>
        </h2>
        <strong>Novo Usuario</strong>
      </router-link>
      <router-link to="./table" class="icon tabela">
        <h2>
          <i class="bi bi-grid-3x2"></i>
        </h2>
        <strong>Tabela</strong>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  position: relative;
  width: 500px;
  max-width: 100%;
  min-height: 480px;
}

.center {
  justify-content: center;
  align-items: center;
}

.navbar {
  display: flex;
  flex-direction: column;
  width: max-content;
  gap: 10px;
  height: 100%;
  flex-wrap: nowrap;
  padding: 20px;
}

.navbar h1 {
  font-size: 30px;
  font-weight: 600;
  font-style: italic;
  color: #fff;
}

.navbar .icon {
  margin-bottom: 20px;
}

.icon h2 {
  margin: 0;
  margin-top: 5px;
  font-size: 25px;
}

</style>
