<template>
  <footer class="footer section">
    <div class="footer__container">
      <div class="newsletter grid">
        <div class="footer__logo">
          <img src="../assets/Images/footerbrand.png" alt="" width="400" />
        </div>
        <div class="newsletter__inputs">
          <h2 class="">Subscribe to our newsletter</h2>
          <div class="news__input">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email address for newsletter"
            />
            <button class="">Sign Up</button>
          </div>
        </div>
      </div>
      <div class="footer__links grid">
        <div class="footer__side-1 grid">
          <div class="footer__link">
            <h3 class="link__header">Company</h3>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Plots</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Latest Listing</a></li>
            </ul>
          </div>
          <div class="footer__link">
            <h3 class="link__header">Help</h3>
            <ul>
              <li><a href="">Contact Us</a></li>
              <li><a href="">FAQ'S</a></li>
              <li><a href="">Live Chart Support</a></li>
              <li><a href="">Legal Information</a></li>
            </ul>
          </div>
          <div class="footer__link">
            <h3 class="link__header">Resources</h3>
            <ul>
              <li><a href="">Blog</a></li>
              <li><a href="">Market Trend</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Legal Information</a></li>
            </ul>
          </div>
        </div>
        <div class="footer__side-2 grid">
          <div class="address">
            <h3 class="link__header">Address</h3>
            <p>
              PlotVista Headquarters15 Olusegun Obasanjo Road,Victoria Island,
              Lagos, Nigeria.
            </p>
          </div>
          <div class="connects">
            <div>
              <h3 class="link__header">Email</h3>
              <a href="mailto:info@plotvista.com" class="email"
                >info@plotvista.com</a
              >
            </div>
            <div>
              <h3 class="link__header">Social Media Links</h3>
              <div class="social">
                <li>
                  <a href=""><i class="bi bi-facebook"></i></a>
                </li>
                <li>
                  <a href=""><i class="bi bi-twitter-x"></i></a>
                </li>
                <li>
                  <a href=""><i class="bi bi-instagram"></i></a>
                </li>
                <li>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__copyright">
      <p>Copyright &copy; {{ date }}. All Rights Reserved</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>

<style>
</style>