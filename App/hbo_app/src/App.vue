<template>
  <nav class="nav-main">
    <div class="nav-logo">
      <div>
        <router-link to="/home" class="nav-item-children"><img src="@/assets/NavBarIcons/maxLogo.webp"></router-link>
      </div>
    </div>
    <div class="nav-items">
      <router-link to="/movies" class="nav-item-children">Movies</router-link>
      <router-link to="/home" class="nav-item-children"><img src="@/assets/NavBarIcons/hbo.webp"></router-link>
      <router-link to="/series" class="nav-item-children">Series</router-link>
    </div>
    <div class="nav-items-advanced">
      <img src="@/assets/NavBarIcons/SearchIcon.webp">
      <img src="@/assets/NavBarIcons/User.webp">
    </div>
  </nav>
  <router-view/>
</template>

<style scoped>

.nav-main {
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 5;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)); 
}

.nav-logo {
  margin-left: 60px;
}

.nav-items-advanced {
  margin-right: 60px;
}

.nav-items-advanced img:first-child {
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
}

.nav-items-advanced img:not(:last-child) {
  opacity: 0.8;
  margin-right: 12px;
  padding: 4px 6px;
  pointer-events: initial;
  text-decoration: none;
  border-color: rgba(0, 0, 0, 0);
  border-radius: 8px;
  border-width: 2px;
  outline-color: rgba(0, 0, 0, 0);
  outline-width: 3px;
}


.nav-items-advanced img:last-child {
  padding-left: 8px;
}

.nav-items {
  display: flex;
}

.nav-item-children{
  display: flex;
  align-items: center;
  text-decoration: none;
  color:rgba(255, 255, 255, 0.8);
  margin-left: 16px;
  margin-right: 16px;
  font-size: 18px;
  font-family: system-ui;
  font-weight: 700;
  padding-bottom: 2.5px;
  border-bottom: 2px solid transparent;
}

.nav-item-children:nth-child(2) img {
  height: 34px;
  opacity: 0.8;
}

.nav-item-children:hover {
  color: white;
}
.nav-item-children:hover img {
  opacity: 1!important;
}

.nav-items a.router-link-exact-active {
  color: white!important;
  border-bottom: 2px solid white;
}

.nav-items a.router-link-exact-active img {
  color: white!important;
  opacity: 1;
}
.nav-main.scrolled {
  background-color: rgba(0, 0, 0, 0.8);
  transition: background-color .1s ease;
}

</style>

<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      const triggerHeight = window.innerHeight * 0.8;
      const navbar = document.querySelector(".nav-main");

      if (window.scrollY > triggerHeight) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  }
}
</script>