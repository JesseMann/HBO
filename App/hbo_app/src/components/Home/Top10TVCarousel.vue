<template>
  <div class="carousel">
    <div class="sectionName">
      <img src="@/assets/Top10Images/Top10Series.webp" class="top10-image" />
    </div>
      <div class="carousel-inner">     
        <div
          v-for="(tvShow, index) in top10TVCarousel.slice(0, 10)"
          :key="tvShow.tvID"
          class="carousel-item"
          :style="{ backgroundImage: `url(${tvShow.imageUrl})` }"
          @click="goToSeriesPage(tvShow.tvID)"
          @mouseover="hoverIndex = index"
          @mouseleave="hoverIndex = null"
        >
          <div
            class="number-background"
            :class="{ 'hovered': hoverIndex === index }"
            :style="{ backgroundImage: `url(${hoverIndex === index ? hoverNumberImages[index] : numberImages[index]})` }"
          ></div>
        </div>
    </div>


    <div class="chevron prev-chevron" @click="prevSlide">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#BABABA" viewBox="0 0 24 24">
        <path d="M15.41 7.41L10.83 12l4.58 4.59L14 18l-6-6 6-6z"/>
      </svg>
    </div>
    <div class="chevron next-chevron" @click="nextSlide">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#BABABA" viewBox="0 0 24 24">
        <path d="M8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  width: 100vw;
  overflow: hidden;
  position: relative;
  font-family: system-ui;
}

.sectionName {
  display: flex;
  color: white;
  font-weight: 800;
  margin-left: 60px;
  font-size: 19px;
}
.top10-image {
  margin-right: 10px;
  width: 35%;
}

.carousel-inner {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  padding-left: 120px;
  padding-right: 60px;
  padding-top: 16px;
  gap: 100px;
  overflow-x: auto;
}

.carousel-inner::-webkit-scrollbar {
  display: none;
}

.carousel-item {
  flex: 0 0 10%; 
  height: 300px;
  background-size: contain; 
  background-position: inherit;
  cursor: pointer;
  position: relative;
  border-radius: 0; 
  background-repeat: no-repeat; 
  border: 2px solid transparent;
  aspect-ratio: 2 / 3;
}

.carousel-item:hover {
  border: 2px solid white!important;
}

.number-background {
  position: absolute;
  top: 78%; 
  left: -75px;
  transform: translateY(-50%);
  width: 40%;
  height: 40%;
  background-size: cover;
  background-position: center;
  transition: opacity 0.3s ease, transform 0.3s ease; 
  transform-origin: center;
  z-index: -1;
}

.hovered {
    transform: translateX(-10%) translateY(-50%) scale(1.2, 1.1);
    transition: transform 0.3s ease-out, background-image 0.3s ease-out;
}

.chevron {
  position: absolute;
  top: 50%; 
  transform: translateY(-50%); 
  padding: 10px;
  cursor: pointer;
  max-height: 100vh;
  height: 100%;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent; 
  opacity: 0;
  transition: opacity 0.3s ease;
}

.carousel:hover .chevron {
  opacity: 1;
}

.prev-chevron {
  left: 0;
}

.next-chevron {
  right: 0;
}

.prev-chevron:hover {
    background-image: linear-gradient(to right, black, transparent);
    opacity: .5;
    animation: fadeInBackground 0.4s forwards;
    fill: white;
  }

.next-chevron:hover {
    background-image: linear-gradient(to left, black, transparent);
    opacity: .5;
    animation: fadeInBackground 0.4s forwards;
    fill: white;
  }

@keyframes fadeInBackground {
    from { opacity: .5; }
    to { opacity: 1; }
  }

.chevron svg {
  width: 36px; 
  height: 36px;
  fill: #BABABA; 
}

.next-chevron:hover svg,
.prev-chevron:hover svg {
  fill: white; 
}

</style>

<script>
export default {
  props: {
    top10TVCarousel: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      currentIndex: 0,
      hoverIndex: null,
      numberImages: [
        require('@/assets/Top10Images/1Dark.webp'),
        require('@/assets/Top10Images/2Dark.webp'),
        require('@/assets/Top10Images/3Dark.webp'),
        require('@/assets/Top10Images/4Dark.webp'),
        require('@/assets/Top10Images/5Dark.webp'),
        require('@/assets/Top10Images/6Dark.webp'),
        require('@/assets/Top10Images/7Dark.webp'),
        require('@/assets/Top10Images/8Dark.webp'),
        require('@/assets/Top10Images/9Dark.webp'),
        require('@/assets/Top10Images/10Dark.webp'),
      ],
      hoverNumberImages: [
        require('@/assets/Top10Images/1Hover.webp'),
        require('@/assets/Top10Images/2Hover.webp'),
        require('@/assets/Top10Images/3Hover.webp'),
        require('@/assets/Top10Images/4Hover.webp'),
        require('@/assets/Top10Images/5Hover.webp'),
        require('@/assets/Top10Images/6Hover.webp'),
        require('@/assets/Top10Images/7Hover.webp'),
        require('@/assets/Top10Images/8Hover.webp'),
        require('@/assets/Top10Images/9Hover.webp'),
        require('@/assets/Top10Images/10Hover.webp'),
      ],
    }; 
  },

methods: {
  goToSeriesPage(tvID) {
    this.$router.push({ name: 'DynamicSeriesView', params: { tvID } });
  },

  prevSlide() {
    const carouselInner = this.$el.querySelector('.carousel-inner');
    const itemWidth = window.innerWidth;
    
    if (carouselInner.scrollLeft === 0) {
      setTimeout(() => {
        carouselInner.scrollTo({
          left: carouselInner.scrollWidth - carouselInner.clientWidth,
          behavior: 'smooth'
        });
      }, 200);
    } else {
      carouselInner.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    }
  },

  nextSlide() {
    const carouselInner = this.$el.querySelector('.carousel-inner');
    const itemWidth = window.innerWidth;
    const maxScrollLeft = carouselInner.scrollWidth - carouselInner.clientWidth;

    if (carouselInner.scrollLeft >= maxScrollLeft) {
      setTimeout(() => {
        carouselInner.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
      }, 200); 
    } else {
      carouselInner.scrollBy({ left: itemWidth, behavior: 'smooth' });
    }
  }
}

};
</script>
