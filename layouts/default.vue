<template>
  <div class="screen">
    <div class="page">
        <NuxtPage />
    </div>
    <div class="menu">
      <ul>
        <li><span>🏠</span><a href="#"></a>Главная</li>
        <li><span>📚</span><a href="#"></a>Курсы</li>
        <li><span>📒</span><a href="#"></a>Задания</li>
        <li><span>🙎‍♂️</span><a href="#"></a>Профиль</li>
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
}
.menu {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 835px;
}
.menu ul {
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  list-style: none;
  justify-content: space-evenly;
}
.menu ul li {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
</style>