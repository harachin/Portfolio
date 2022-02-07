<template>
  <ul id="nav">
    <li><router-link draggable="false" to="/">Home</router-link></li>
    <li><router-link draggable="false" to="/about">About</router-link></li>
    <li><router-link draggable="false" to="/skills">Skills</router-link></li>
    <li><router-link draggable="false" to="/works">Works</router-link></li>
  </ul>
</template>

<style lang="scss" scoped>
#nav {
  display: flex;
  list-style-type: none;
  align-items: center;
  height: 40px;
  padding-left: 10px;
  background-color: $g-font-color-gray;
}

#nav li {
  flex-basis: 100px;
  text-align: center;
  a {
    text-decoration: none;
    width: 100%;
    font-size: $g-font-size-small;
    color: $g-font-color-white;
  }
  a.router-link-exact-active {
    border-bottom: 2px solid $g-font-color-white;
  }
}
</style>
