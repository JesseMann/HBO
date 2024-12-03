<template>
    <footer class="footer">
      <div class="footer-left">
        <a href="https://www.youtube.com/@streamonmax" target="_blank" class="social-icon">
          <img src="@/assets/FooterIcons/YT.webp">
        </a>
        <a href="https://twitter.com/streamonmax" target="_blank" class="social-icon">
          <img src="@/assets/FooterIcons/Twitter.webp">
        </a>
        <a href="https://www.facebook.com/streamonmax" target="_blank" class="social-icon">
          <img src="@/assets/FooterIcons/FB.webp">
        </a>
        <a href="https://www.instagram.com/streamonmax" target="_blank" class="social-icon">
          <img src="@/assets/FooterIcons/Insta.webp">
        </a>
        <a href="https://www.tiktok.com/@streamonmax" target="_blank" class="social-icon">
          <img src="@/assets/FooterIcons/TikTok.webp">
        </a>
      </div>
      
      <div class="footer-right">
        <div class="footer-info">© 2024 WarnerMedia Direct, LLC. All rights reserved.</div>
        <div class="footer-links">
          <a href="https://www.max.com/privacy" target="_blank">Privacy Policy</a>
          <a href="https://www.max.com/terms-of-use" target="_blank">Terms of Use</a>
          <a href="https://www.wbdprivacy.com/opt-out/" target="_blank">Ad Choices</a>
          <a href="https://www.warnermediaprivacy.com/policycenter/b2c/WM/" target="_blank">Do Not Sell or Share My Personal Information</a>
          <a href="https://auth.max.com/privacy" target="_blank">Info</a>
          <a href="https://help.max.com/us/Home/Index" target="_blank">Help</a>
        </div>
      </div>
    </footer>
  </template>
  

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding-top: 180px;
  padding-bottom: 40px;
  padding-left: 60px;
  padding-right: 60px;
  font-family: system-ui;
}

.footer-left {
  display: flex;
  gap: 20px;
}

.social-icon img {
  width: 24px;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.social-icon img:hover {
  opacity: 1;
}

.footer-right {
  text-align: right;
}

.footer-info {
  font-size: 12px;
  font-weight: 600;
  opacity: 0.8;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
}

.footer-links {
  font-size: 14px;
  margin-top: 8px;
}

.footer-links a {
  color: white;
  text-decoration: none;
  opacity: 0.8;
  font-weight: 600;
  margin-right: 20px;
  transition: opacity 0.3s;
}

.footer-links a:last-child {
  margin-right: 0px!important;
}

.footer-links a:hover {
  opacity: 1;
}

@media (max-width: 1200px) {
  .footer {
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 120px;
  }

  .footer-left {
    gap: 16px;
  }

  .social-icon img {
    width: 20px;
  }

  .footer-links a {
    margin-right: 16px;
  }
}

@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 80px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .footer-left {
    margin-bottom: 20px;
  }

  .footer-right {
    text-align: center;
  }

  .footer-info {
    margin-bottom: 12px;
  }

  .footer-links a {
    margin-right: 12px;
  }
}

@media (max-width: 480px) {
  .footer {
    padding-top: 40px;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .social-icon img {
    width: 16px;
  }

  .footer-info {
    font-size: 10px;
  }

  .footer-links {
    font-size: 12px;
  }

  .footer-links a {
    margin-right: 8px;
  }
}


</style>
