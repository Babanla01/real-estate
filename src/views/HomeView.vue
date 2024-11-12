<template>
  <div class="home">
    <div class="hero section">
      <h1 class="hero__head">Your Journey to Land Ownership Starts Here</h1>
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
  <div class="happy">
    <div class="happy__clients">
      <div class="happy__client" v-for="track in tracks" :key="track.text">
        <p>{{ track.number }}</p>
        <p>{{ track.stats }}</p>
      </div>
    </div>
  </div>
  <div class="featured section">
    <h2 class="feature__heading">Featured Properties</h2>
    <p class="featured__text">Explore Exclusive Featured Properties</p>
    <div class="featured__post">
      <div
        class="cards"
        v-for="property in featuredProperties"
        :key="property.id"
      >
        <div class="img__container">
          <img
            :src="require(`../assets/Images/` + property.image)"
            alt=""
            class="featured__img"
          />
          <div class="reaction">
            <img src="../assets/Images/love.png" alt="" />
          </div>
          <div class="ratings">
            <img
              class="fire"
              v-if="property.rating <= 4.5"
              src="../assets/Images/fire.png"
              alt=""
            />
            <img
              class="turbo"
              v-if="property.rating > 4.5"
              src="../assets/Images/turbo.png"
              alt=""
            />
          </div>
        </div>
        <div class="property__content">
          <div class="property__rate">
            <h3 class="property__name">{{ property.name }}</h3>
            <div>
              <i class="bi bi-star-fill"></i> <span>{{ property.rating }}</span>
            </div>
          </div>
          <p class="property__desc">{{ property.description }}</p>
          <div class="plot__pricing">
            <h3 class="plot__price">{{ property.price }}</h3>
            <button class="button btn__rounded">Buy Plot</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="listings section">
    <h2 class="listing__heading">Latest Listing</h2>
    <p class="listing__text">Check Out Our Latest Plot Listings</p>
    <div class="listing">
      <div class="cards" v-for="listing in latestListings" :key="listing.id">
        <div class="img__container">
          <img
            :src="require(`../assets/Images/` + listing.image)"
            alt=""
            class="listing__img"
          />
          <h3 class="listing__name">{{ listing.name }}</h3>
          <p class="listing__tag">Newest</p>
          <img src="../assets/Images/love.png" alt="" class="listing__love" />
        </div>
        <div class="listing__content">
          <p class="location">Location: {{ listing.location }}</p>
          <div class="plot__pricing">
            <div>
              <p class="listing__size">Size: {{ listing.size }}</p>
              <p class="listing__price">Price: {{ listing.price }}</p>
            </div>
            <button class="button btn__rounded">Buy Plot</button>
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
  data() {
    return {
      tracks: [],
      featuredProperties: [],
      latestListings: [],
    };
  },
  methods: {},
  mounted() {
    fetch("http://localhost:3000/records")
      .then((res) => res.json())
      .then((data) => (this.tracks = data))
      .catch((err) => console.log(err));

    fetch("http://localhost:3000/featuredProperties")
      .then((res) => res.json())
      .then((data) => (this.featuredProperties = data))
      .catch((err) => console.log(err));
    fetch("http://localhost:3000/LatestListings")
      .then((res) => res.json())
      .then((data) => (this.latestListings = data))
      .catch((err) => console.log(err));
  },
};
</script>
