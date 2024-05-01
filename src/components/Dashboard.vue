<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <div class="container center d-flex">
    <RouterView />
        <div class="navbar info row">
          <h1>E-Canhotos</h1>
          <div class="icon sign">
            <router-link to="./sign">
              <h2>
                <i class="bi bi-box-arrow-in-right"><strong>Login</strong></i>
              </h2>
            </router-link>
          </div>
          <div class="icon new-user">
            <router-link to="./newuser">
              <h2>
                <i class="bi bi-person-fill-add">
                  <strong>Novo Usuario</strong>
                </i>
              </h2>
            </router-link>
          </div>
          <div class="icon tabela">
            <router-link to="./table">
              <h2>
                <i class="bi bi-grid-3x2"><strong>Tabela</strong></i>
              </h2>
            </router-link>
          </div>
        </div>
      </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap");

.body {
  background-color: burlywood;
  color: black;
}

.container {
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  position: relative;
  width: 500px;
  max-width: 100%;
  min-height: 480px;
  font-family: "JetBrains Mono", sans-serif;
}

.center{
  justify-content: center;
  align-items: center;
}

.info {
  width: 200px;
  margin: 0 auto;
  text-align: center;
}

.row {
  width: 200px;
  margin:0;
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
  font-family: "JetBrains Mono", sans-serif;
  color: #fff;
}

.navbar a:hover {
  color: gray;
}

.navbar .icon {
  margin-bottom: 20px;
}

.icon h2 {
  margin: 0;
  margin-top: 5px;
  font-size: 25px;
}

.icon a {
  text-decoration: none;
  color: black;
}
</style>
