<template>
  <header id="header">
    <router-link
      draggable="false"
      to="/">
      <img
        class="icon"
        draggable="false"
        src="@/assets/harachinlab_logo_icon.png"
        oncontextmenu="return false;" />
      <img
        class="logo"
        draggable="false"
        alt="Harchinのdev活"
        src="@/assets/harachinlab_logo_text_pattern1.png"
        oncontextmenu="return false;" />
    </router-link>
  </header>
</template>

<style lang="scss" scoped>
header a {
  display: inline-flex;
  align-items: center;
  width: 100%;
  .icon {
    width: 30%;
    max-width: max-content;
  }
  .logo {
    width: 70%;
    max-width: max-content;
  }
}
</style>
