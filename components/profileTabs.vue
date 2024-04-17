<script setup>
const tabText = ref("common");
const route = useRoute();
console.log(route.name);
tabText.value = route.name;
function activeTab(name) {
  tabText.value = name;
}
const tab = ref("common");
const { data } = await useFetch("/api/user");
console.log(data.value);
</script>
<template>
  <ul class="menu">
    <li
      v-bind:class="tabText === 'common' ? 'active' : ''"
      v-on:click="(tab = 'common'), activeTab('common')"
    >
      Общее
    </li>
    <li
      v-bind:class="tabText === 'education' ? 'active' : ''"
      v-on:click="(tab = 'education'), activeTab('education')"
    >
      Образование
    </li>
    <li
      v-bind:class="tabText === 'experience' ? 'active' : ''"
      v-on:click="(tab = 'experience'), activeTab('experience')"
    >
      Опыт работы
    </li>
    <li
      v-bind:class="tabText === 'certificates' ? 'active' : ''"
      v-on:click="(tab = 'certificates'), activeTab('certificates')"
    >
      Сертификаты
    </li>
  </ul>

  <div class="info" v-if="tab === 'common'">
    <h2>Общее</h2>
    <h3>ФИО:</h3>
    <p>{{ data.lastname }} {{ data.name }} {{ data.middlename }}</p>
    <h4>Номер телефона:</h4>
    <a href="tel:+78142332211">+{{ data.phonenumber }}</a>
    <h4>Место проживания:</h4>
    <a href="https://yandex.ru/maps/11036/volgodonsk/house/prospekt_stroiteley_8b/YEsYdw5mTkMGQFptfXlwcn9nZw==/?ll=42.196761%2C47.513344&z=17.12">{{ data.location }}</a>
    <h4>Место работы:</h4>
    <p>Отсутсвует.</p>
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
    <h2>Опыт работы</h2>
    <div class="exp-info" v-for="item in data.job" :key="item">
      <p>Организация: {{ item.organization }}</p>
      <p>Должность: {{ item.position }}</p>
      <p>Опыт работы: {{ item.expitience }}</p>
    </div>
  </div>
  <div class="info" v-if="tab === 'certificates'">
    <div class="certif-info" v-for="item in data.certificates" :key="item">
      <h2>Сертификаты</h2>
      <p>Что-то: {{}}</p>
      <p>Что-то: {{}}</p>
      <p>Что-то: {{}}</p>
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
  border-radius: 5px;
  box-shadow: 0px 0px 9px 3px rgba(21, 107, 255, 0.227);
}
.info {
  box-shadow: 0px 0px 9px 4px rgba(21, 107, 255, 0.227);
  padding: 5px;
  margin-top: 10px;
}
.info {
  position: relative;
  top: 10px;
  border-radius: 10px;
}
.active {
  background: #61c2fa6e;
}
</style>