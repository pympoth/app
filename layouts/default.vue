<script setup>
const menuText = ref("index");

const route = useRoute()
console.log(route.name)

menuText.value = route.name

function activeMenu(name) {
  menuText.value = name
}
</script>


<template>
  <div class="screen">
    <div class="page">
      <NuxtPage />
    </div>
    <div class="menu">
      <ul>
        <li v-bind:class="menuText === 'index' ? 'active' : ''" v-on:click="activeMenu('index')">
          <NuxtLink to="/"><span>🏠</span><span>Главная</span></NuxtLink>
        </li>
        <li v-bind:class="menuText === 'courses' ? 'active' : ''" v-on:click="activeMenu('courses')">
          <NuxtLink to="/courses"><span>📚</span><span>Курсы</span></NuxtLink>
        </li>
        <li v-bind:class="menuText === 'tasks' ? 'active' : ''" v-on:click="activeMenu('tasks')">
          <NuxtLink to="/tasks"><span>📒</span><span>Задания</span></NuxtLink>
        </li>
        <li v-bind:class="menuText === 'profile' ? 'active' : ''" v-on:click="activeMenu('profile')">
          <NuxtLink to="/profile"><span>🙎‍♂️</span><span>Профиль</span></NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.screen {
  widows: 414px;
  background: #dddddd;
  height: 896px;
  margin: 0 auto;
  border-radius: 5px;
  position: relative;
}
.page {
  position: absolute;
  bottom: 85px;
  left: 0;
  right: 0;
  top: 0;
  overflow: auto;
}
.menu {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 835px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.menu ul {
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  list-style: none;
  justify-content: space-evenly;
}
.menu ul span {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.active a {
  color: rgb(24, 70, 255);
}
a{
  color: black;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>