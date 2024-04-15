<script setup>
const tab = ref("common");
const { data } = await useFetch("/api/user");
console.log(data.value);
</script>
<template>
  <ul class="menu">
    <li v-on:click="tab = 'common'">Общее</li>
    <li v-on:click="tab = 'education'">Образование</li>
    <li v-on:click="tab = 'experience'">Опыт работы</li>
    <li v-on:click="tab = 'certificates'">Сертификаты</li>
  </ul>

  <div class="info" v-if="tab === 'common'">
    <h2>Общее</h2>
    <h3>ФИО:</h3>
    <p>{{ data.lastname }} {{ data.name }} {{ data.middlename }}</p>
  </div>
  <div class="info" v-if="tab === 'education'">
    <h2>Образование</h2>
    <div class="edu-info" v-for="item in data.education" :key="item">
      <p>Тип: {{ item.type }}</p>
      <p>Заведение: {{ item.name }}</p>
      <p>Квалификация: {{ item.qualify }}</p>
    </div>
  </div>
  <div class="info" v-if="tab === 'experience'">
    <div class="exp-info" v-for="item in data.job" :key="item">
    <h2>Опыт работы</h2>
<p>Организация: {{ item.organization }}</p>
<p>Должность: {{ item.position }}</p>
<p>Опыт работы: {{ item.expitience }}</p>
    </div>
  </div>
  <div class="info" v-if="tab === 'certificates'">
    <div class="certif-info" v-for="item in data.certificates" :key="item">
    <h2>Сертификаты</h2>
<p>Что-то: {{  }}</p>
<p>Что-то: {{  }}</p>
<p>Что-то: {{  }}</p>
    </div>
  </div>
</template>
<style scoped>
.menu {
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  gap: 9px;
  flex-wrap: wrap;
}
li {
  padding: 5px;
  background: #fff;
  border-radius: 10px;
}
.info {
  background: #fff;
  padding: 5px;
}
.info {
  position: relative;
  top: 10px;
  border-radius: 10px;
}
</style>