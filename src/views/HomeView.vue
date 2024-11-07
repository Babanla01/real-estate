<template>
  <div class="home">
    <div class="hero section">
      <h2 class="hero__head">Your Journey to Land Ownership Starts Here</h2>
      <p class="hero__text">
        Maximize returns with strategically located plots offering long-term
        growth potential
      </p>
      <div class="hero__inputs">
        <div class="hero__input">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search plots by price,location,size e.t.c"
          />
          <button>Search</button>
          <div class="hero__icon"><i class="bi bi-search"></i></div>
        </div>
        <div class="recently__searched">
          <p>Recently Searched:</p>
          <div>
            <span>Ikeja</span>
            <span>#1,000,000</span>
            <span>500sqm</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
