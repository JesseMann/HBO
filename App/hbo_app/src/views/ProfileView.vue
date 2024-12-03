<template>
    <div class="profile-page">
      <h1 class="profile-title">Who's Watching?</h1>
      <div class="profile-container">
        <router-link to="/home" class="profile-item">
          <img src="@/assets/ProfilePics/3.png" />
          <p>Jesse</p>
        </router-link>
        <router-link to="/home" class="profile-item">
          <img src="@/assets/ProfilePics/2.png" />
          <p>Jamie</p>
        </router-link>
        <router-link to="/home" class="profile-item">
          <img src="@/assets/ProfilePics/1.png" />
          <p>Lillie</p>
        </router-link>
      </div>
    </div>
  </template>
  
  
  <style scoped>
  
  .profile-page {
  background-color: black;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 15;
}

.profile-title {
  color: white;
  font-family: system-ui;
  font-size: 46px;
  font-weight: bold;
  margin-bottom: 80px;
  z-index: 16;
}

.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
}

.profile-item {
  position: relative;
  display: block;
  width: 180px; 
  height: 180px; 
  transition: transform 0.3s, box-shadow 0.3s;
  border-style: solid;
  border-radius: 50%;
  padding: 1px;
  border-color: transparent;
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: 600;
  opacity: 0.8;
}

.profile-item p {
  font-family: system-ui;
  color: white;
  margin-top: 10px;
}

.profile-item a {
  text-decoration: none;
  color: inherit;
}

.profile-item img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.profile-item:hover {
  transform: scale(1.2);
  border-color: blue;
  opacity: 1;
}

.profile-item:hover::after {
  content: '';
  position: absolute;
  bottom: -80%;
  left: 50%;
  width: 200%;
  height: 100vh;
  background: radial-gradient(
    rgba(0, 0, 255, 0.7) 1%,
    rgba(0, 0, 255, 0.3) 40%,
    rgba(0, 0, 255, 0) 70%
  );
  transform: translateX(-50%);
  border-radius: 0%;
  z-index: -1;
}

@media (max-width: 1200px) {
  .profile-container {
    gap: 40px;
  }
  .profile-title {
    font-size: 36px;
    margin-bottom: 60px;
  }
  .profile-item {
    width: 150px;
    height: 150px;
  }
}

@media (max-width: 768px) {
  .profile-container {
    gap: 20px;
  }
  .profile-title {
    font-size: 28px;
    margin-bottom: 40px;
  }
  .profile-item {
    width: 130px;
    height: 130px;
  }
}

@media (max-width: 480px) {
  .profile-title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .profile-container {
    flex-direction: column;
    gap: 30px;
  }
  .profile-item {
    width: 50px;
    height: 50px;
  }
}
  </style>
  
  <script>
  export default {
    name: 'ProfileView',
  };
  </script>
  