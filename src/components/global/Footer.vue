<template>
  <footer>
    <p>© Harachin.lab All rights reserved.</p>
  </footer>
</template>

<style lang="scss" scoped>
@use "@/scss/_variables.scss" as variables;

footer {
  display: table;
  text-align: center;
  background: variables.$g-font-color-gray;
  width: 100%;
  height: 50px;
  bottom: 0;
  p {
    vertical-align: middle;
    font-weight: bold;
    color: variables.$g-font-color-white;
  }
}
</style>
