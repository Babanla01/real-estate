<template>
  <nav class="nav">
    <div class="nav__brand">
      <img
        src="../assets/Images/navbrand.png"
        alt=""
        class="navbrand__img"
        width="200"
      />
    </div>
    <div class="nav__menu" ref="navMenu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/plots">Plots</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </div>
    <div class="nav__btns">
      <button class="button button__link">Login</button>
      <button class="button__outline">Register</button>
      <div class="user"><i class="bi bi-person-circle"></i></div>
      <div class="btn__toggle" @click="toggleNav">
        <i class="bi bi-list"></i>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    toggleNav() {
      this.$refs.navMenu.classList.toggle("active");
    },
  },
};
</script>

<style>
</style>