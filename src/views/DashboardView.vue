<script setup>
const logo = new URL('@/assets/logo-full.png', import.meta.url).href;
import CanhotosTable from '@/components/CanhotosTable.vue';
import UserTable from '@/components/UserTable.vue';
</script>

<template>
  <main>
    <div class="all-content d-flex flex-row navbar info position-relative">
      <!-- Logo positionada no canto superior esquerdo -->
      <img :src="logo" alt="Logo" class="logo">

      <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Canhotos</button>
        <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Funcionários</button>
        <!-- <button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" disabled>Disabled</button>
        <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button> -->
      </div>

      <div class="tab-content d-flex center" id="v-pills-tabContent">
        <CanhotosTable class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0"/>
        <UserTable class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0"/>
        <!-- <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">...</div>
        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">...</div>
        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">...</div> -->
      </div>
    </div>
  </main>
</template>

<style>
.all-content {
  position: relative;
}

.logo {
  position: absolute;
  top: 0;
  height: 90px; 
  background-color: white;
  border-radius: 10px;
  margin-left: 1px;
  margin-top: 50px;
  padding: 10px;
}
</style>
