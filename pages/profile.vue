<script setup>
const edit = ref(false);
</script>

<template>
  <div class="page">
    <h1>Профиль</h1>
    <div class="edit">
      <button v-on:click="edit = !edit">Редактировать</button>
      <div class="view" v-if="!edit">
        <p>Пользователь</p>

        <profileTabs />

      </div>
      <div class="edit" v-else>
        <h2>Загрузить фото:</h2>
        <imageLoader />
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  padding: 15px;
}
button{
  border-radius: 10px;
  border: none;
  padding: 5px;
  background: #fff;
}
p{
  font-weight: bolder;
  font-size: 20px;
}
</style>
