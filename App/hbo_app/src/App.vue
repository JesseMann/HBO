<template>
  <nav class="nav-main" v-if="showNavbar">
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
      <router-link to="/search" class="search"><img src="@/assets/NavBarIcons/SearchIcon.webp"> </router-link>
      <router-link to="/profile"><img src="@/assets/NavBarIcons/User.webp" class="user"></router-link>
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

.user {
  border-radius: 50%; 
  transition: box-shadow 0.3s ease; 
}

.user:hover {
  box-shadow: 0px 0px 20px 8px rgba(255, 255, 255, 1); 
}

.search {
  opacity: 0.8;
  margin-right: 12px;
  padding: 2px 4px;
  border-radius: 0px;
}

.search:hover {
  opacity: 1;
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

@media (max-width: 1200px) {
  .nav-logo {
    margin-left: 40px;
  }
  
  .nav-items {
    gap: 12px;
  }
  
  .nav-items-advanced {
    margin-right: 40px;
  }

  .nav-item-children {
    font-size: 16px;
    margin-left: 12px;
    margin-right: 12px;
  }

  .nav-item-children:nth-child(2) img {
    height: 30px;
  }
}

@media (max-width: 768px) {
  .nav-main {
    flex-direction: column;
    align-items: flex-end;
    padding: 10px;
  }

  .nav-logo {
    display: none;
  }
  
  .nav-items {
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    border-radius: 8px;
  }
  
  .nav-items-advanced {
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    margin-top: 10px;
  }

  .nav-item-children {
    font-size: 14px;
  }

  .nav-item-children:nth-child(2) img {
    height: 26px;
  }

  .search {
    display: none;
  }
  .scrolled {
    background-color: transparent!important;
  }

  .user {
    display: none;
  }
}

@media (max-width: 480px) {
  .nav-main {
    padding: 8px;
  }

  .nav-logo {
    display: none;
  }

  .nav-items {
    gap: 8px;
  }

  .nav-items-advanced {
    gap: 8px;
    margin-top: 5px;
  }

  .nav-item-children {
    font-size: 12px;
  }

  .nav-item-children:nth-child(2) img {
    height: 20px;
  }

  .search {
    display: none;
  }
  .scrolled {
    background-color: transparent;
  }

  .user {
    display: none;
  }
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

    if (navbar) {
      if (window.scrollY > triggerHeight) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  }
},

  computed: {
    showNavbar() {
      const excludedRoutes = ['profile']; 
      return !excludedRoutes.includes(this.$route.name);
    }
  }

}
</script>