<template>
  <div :class="['search-bar-container', { 'search-bar-top': searchQuery }]">
    <div class="search-bar">
      <img src="@/assets/NavBarIcons/SearchIcon.webp" class="search-icon" />
      <input
        type="text"
        placeholder="Find movies, shows, and more..."
        v-model="searchQuery"
        @input="emitSearch"
      />
    </div>
  </div>
</template>

  
  <script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    emitSearch() {
      this.$emit("search", this.searchQuery);
    },
  },
};
</script>
  
<style scoped>
.search-bar-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: top 0.4s ease, transform 0.4s ease; /* Ensure smooth vertical transition */
  width: 93vw; /* Maintains consistent width */
}

.search-bar-container.search-bar-top {
  top: 80px; /* Moves vertically to the top */
  transform: translate(-50%, 0); /* Keeps the horizontal center intact */
  width: 93vw; /* Maintains consistent width */
}

.search-bar {
  display: flex;
  align-items: center; 
  border-radius: 5px; 
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.12);
}

.search-icon {
  width: 25px; 
  height: 25px;
  margin-right: 15px; 
}

input {
  flex: 1;
  border: none;
  background: none;
  color: white;
  outline: none;
  font-size: 22px; 
}

input::placeholder {
  color: white;
  opacity: .6;
}
</style>

  