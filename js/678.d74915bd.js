"use strict";(self["webpackChunkhbo_app"]=self["webpackChunkhbo_app"]||[]).push([[678],{427:function(e,o,t){t.r(o),t.d(o,{default:function(){return Be}});var i=t(6768);const r={class:"home"};function a(e,o,t,a,s,l){const n=(0,i.g2)("HeroCarousel"),c=(0,i.g2)("TopRatedCarousel"),d=(0,i.g2)("Top10MovieCarousel"),u=(0,i.g2)("BigScreenCarousel"),v=(0,i.g2)("GlobalFooter");return(0,i.uX)(),(0,i.CE)("div",r,[(0,i.bF)(n,{heroMovieCarousel:s.heroMovieCarousel},null,8,["heroMovieCarousel"]),(0,i.bF)(c,{topRatedCarousel:s.topRatedCarousel},null,8,["topRatedCarousel"]),(0,i.bF)(d,{top10MovieCarousel:s.top10MovieCarousel},null,8,["top10MovieCarousel"]),(0,i.bF)(u,{bigScreenCarousel:s.bigScreenCarousel},null,8,["bigScreenCarousel"]),(0,i.bF)(v)])}const s="https://image.tmdb.org/t/p/original",l="https://www.youtube.com/embed/",n="https://image.tmdb.org/t/p/original",c="cfd0f90ef11421b744113aec2cdad0fe";async function d(){const e=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${c}`),o=await e.json();return o.results}async function u(e){const o=await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=${c}&include_image_language=en&append_to_response=videos,images`),t=await o.json(),i=t.videos.results.find((e=>"YouTube"===e.site&&"Trailer"===e.type&&e.official)),r=i?`${l}${i.key}?autoplay=1&mute=1`:null,a=t.images.logos.find((e=>e.file_path)),s=a?`${n}${a.file_path}`:null;return{trailerUrl:r,logoUrl:s}}async function v(){const e=await d(),o=await Promise.all(e.map((async e=>{const o=e.backdrop_path?`${s}${e.backdrop_path}`:`${s}${e.poster_path}`,{trailerUrl:t,logoUrl:i}=await u(e.id);return{movieDate:e.release_date,movieTitle:e.title,movieOverview:e.overview,movieID:e.id,imageUrl:o,trailerUrl:t,logoUrl:i}})));return o}const h="https://image.tmdb.org/t/p/original";async function m(){const e="cfd0f90ef11421b744113aec2cdad0fe",o=await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${e}`),t=await o.json();return t.results}async function p(){const e=await m(),o=await Promise.all(e.map((async e=>{const o=e.poster_path?`${h}${e.poster_path}`:`${h}${e.backdrop_path}`;return{movieID:e.id,imageUrl:o}})));return o}const g="https://image.tmdb.org/t/p/original";async function w(){const e="cfd0f90ef11421b744113aec2cdad0fe",o=await fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1&api_key=${e}`),t=await o.json();return t.results}async function C(){const e=await w(),o=await Promise.all(e.map((async e=>{const o=e.poster_path?`${g}${e.poster_path}`:`${g}${e.backdrop_path}`;return{movieDate:e.release_date,movieTitle:e.title,movieOverview:e.overview,movieID:e.id,imageUrl:o}})));return o}const k="https://image.tmdb.org/t/p/original";async function f(){const e="cfd0f90ef11421b744113aec2cdad0fe",o=await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${e}`),t=await o.json();return t.results}async function b(){const e=await f(),o=await Promise.all(e.map((async e=>{const o=e.poster_path?`${k}${e.poster_path}`:`${k}${e.backdrop_path}`;return{movieID:e.id,imageUrl:o}})));return o}var y=t(4232);const T=e=>((0,i.Qi)("data-v-fafae2b2"),e=e(),(0,i.jt)(),e),L={class:"carousel"},I={class:"container"},x=["src"],S={key:0,class:"heroOverview"},D=["src"],M={class:"date"},$={class:"description"},B=T((()=>(0,i.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"#BABABA",viewBox:"0 0 24 24"},[(0,i.Lk)("path",{d:"M15.41 7.41L10.83 12l4.58 4.59L14 18l-6-6 6-6z"})],-1))),_=[B],A=T((()=>(0,i.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"#BABABA",viewBox:"0 0 24 24"},[(0,i.Lk)("path",{d:"M8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6-6-6z"})],-1))),U=[A],X={class:"carousel-indicators"},E=["onClick"];function W(e,o,t,r,a,s){return(0,i.uX)(),(0,i.CE)("div",L,[(0,i.Lk)("div",{class:"carousel-inner",style:(0,y.Tr)({transform:`translateX(-${100*a.currentIndex}%)`})},[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.slicedCarouselData,((e,o)=>((0,i.uX)(),(0,i.CE)("div",{key:e.movieID,class:(0,y.C4)(["carousel-item",{active:o===a.currentIndex}]),style:(0,y.Tr)({backgroundImage:`url(${e.imageUrl})`})},[(0,i.Lk)("div",I,[e.trailerUrl&&a.showVideo&&a.currentIndex===o?((0,i.uX)(),(0,i.CE)("iframe",{key:0,class:"responsive-iframe",src:e.trailerUrl,frameborder:"0",allow:"autoplay; encrypted-media",scrolling:"no"},null,8,x)):(0,i.Q3)("",!0)])],6)))),128))],4),s.slicedCarouselData.length?((0,i.uX)(),(0,i.CE)("div",S,[s.slicedCarouselData[a.currentIndex].logoUrl?((0,i.uX)(),(0,i.CE)("img",{key:0,src:s.slicedCarouselData[a.currentIndex].logoUrl},null,8,D)):(0,i.Q3)("",!0),(0,i.Lk)("div",M,"Released: "+(0,y.v_)(s.slicedCarouselData[a.currentIndex].movieDate),1),(0,i.Lk)("div",$,(0,y.v_)(s.slicedCarouselData[a.currentIndex].movieOverview),1),(0,i.Lk)("button",{onClick:o[0]||(o[0]=e=>s.goToMoviePage(s.slicedCarouselData[a.currentIndex].movieID))},"Go To Movie")])):(0,i.Q3)("",!0),(0,i.Lk)("div",{class:"chevron prev-chevron",onClick:o[1]||(o[1]=(...e)=>s.prevSlide&&s.prevSlide(...e))},_),(0,i.Lk)("div",{class:"chevron next-chevron",onClick:o[2]||(o[2]=(...e)=>s.nextSlide&&s.nextSlide(...e))},U),(0,i.Lk)("div",X,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.slicedCarouselData,((e,o)=>((0,i.uX)(),(0,i.CE)("span",{key:o,class:(0,y.C4)([{active:o===a.currentIndex},"indicator-bubble"]),onClick:e=>s.goToSlide(o)},null,10,E)))),128))])])}t(4114);var V={props:{heroMovieCarousel:{type:Array,required:!0}},computed:{slicedCarouselData(){return this.heroMovieCarousel.slice(0,5)}},data(){return{currentIndex:0,showVideo:!1,videoTimeout:null,videoDurationTimeout:null}},mounted(){this.startVideoTimer()},methods:{prevSlide(){this.currentIndex=(this.currentIndex-1+this.slicedCarouselData.length)%this.slicedCarouselData.length,this.resetVideoTimer()},nextSlide(){this.currentIndex=(this.currentIndex+1)%this.slicedCarouselData.length,this.resetVideoTimer()},startVideoTimer(){this.videoTimeout&&clearTimeout(this.videoTimeout),this.videoDurationTimeout&&clearTimeout(this.videoDurationTimeout),this.videoTimeout=setTimeout((()=>{this.slicedCarouselData[this.currentIndex].trailerUrl&&(this.showVideo=!0,this.videoDurationTimeout=setTimeout((()=>{this.showVideo=!1}),3e4))}),5e3)},resetVideoTimer(){this.showVideo=!1,this.videoTimeout&&clearTimeout(this.videoTimeout),this.videoDurationTimeout&&clearTimeout(this.videoDurationTimeout),this.startVideoTimer()},goToMoviePage(e){this.$router.push({name:"DynamicMoviesView",params:{movieID:e}})},goToSlide(e){this.currentIndex=e,this.resetVideoTimer()}}},F=t(1241);const P=(0,F.A)(V,[["render",W],["__scopeId","data-v-fafae2b2"]]);var q=P;const R=e=>((0,i.Qi)("data-v-970bfb86"),e=e(),(0,i.jt)(),e),j={class:"carousel"},z=R((()=>(0,i.Lk)("div",{class:"sectionName"},"From the Big Screen",-1))),Q={class:"carousel-inner"},K=["onClick"],N=R((()=>(0,i.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"#BABABA",viewBox:"0 0 24 24"},[(0,i.Lk)("path",{d:"M15.41 7.41L10.83 12l4.58 4.59L14 18l-6-6 6-6z"})],-1))),O=[N],G=R((()=>(0,i.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"#BABABA",viewBox:"0 0 24 24"},[(0,i.Lk)("path",{d:"M8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6-6-6z"})],-1))),H=[G];function Y(e,o,t,r,a,s){return(0,i.uX)(),(0,i.CE)("div",j,[z,(0,i.Lk)("div",Q,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(t.bigScreenCarousel,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.movieID,class:"carousel-item",style:(0,y.Tr)({backgroundImage:`url(${e.imageUrl})`}),onClick:o=>s.goToMoviePage(e.movieID)},null,12,K)))),128))]),(0,i.Lk)("div",{class:"chevron prev-chevron",onClick:o[0]||(o[0]=(...e)=>s.prevSlide&&s.prevSlide(...e))},O),(0,i.Lk)("div",{class:"chevron next-chevron",onClick:o[1]||(o[1]=(...e)=>s.nextSlide&&s.nextSlide(...e))},H)])}var J={props:{bigScreenCarousel:{type:Array,required:!0}},data(){return{currentIndex:0}},methods:{goToMoviePage(e){this.$router.push({name:"DynamicMoviesView",params:{movieID:e}})},prevSlide(){const e=this.$el.querySelector(".carousel-inner"),o=window.innerWidth;0===e.scrollLeft?setTimeout((()=>{e.scrollTo({left:e.scrollWidth-e.clientWidth,behavior:"smooth"})}),200):e.scrollBy({left:-o,behavior:"smooth"})},nextSlide(){const e=this.$el.querySelector(".carousel-inner"),o=window.innerWidth,t=e.scrollWidth-e.clientWidth;e.scrollLeft>=t?setTimeout((()=>{e.scrollTo({left:0,behavior:"smooth"})}),200):e.scrollBy({left:o,behavior:"smooth"})}}};const Z=(0,F.A)(J,[["render",Y],["__scopeId","data-v-970bfb86"]]);var ee=Z,oe=t.p+"img/Top10.ce666618.webp";const te=e=>((0,i.Qi)("data-v-b1755318"),e=e(),(0,i.jt)(),e),ie={class:"carousel"},re=te((()=>(0,i.Lk)("div",{class:"sectionName"},[(0,i.Lk)("img",{src:oe,class:"top10-image"})],-1))),ae={class:"carousel-inner"},se=["onClick","onMouseover"],le=te((()=>(0,i.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"#BABABA",viewBox:"0 0 24 24"},[(0,i.Lk)("path",{d:"M15.41 7.41L10.83 12l4.58 4.59L14 18l-6-6 6-6z"})],-1))),ne=[le],ce=te((()=>(0,i.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"#BABABA",viewBox:"0 0 24 24"},[(0,i.Lk)("path",{d:"M8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6-6-6z"})],-1))),de=[ce];function ue(e,o,t,r,a,s){return(0,i.uX)(),(0,i.CE)("div",ie,[re,(0,i.Lk)("div",ae,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(t.top10MovieCarousel.slice(0,10),((e,t)=>((0,i.uX)(),(0,i.CE)("div",{key:e.movieID,class:"carousel-item",style:(0,y.Tr)({backgroundImage:`url(${e.imageUrl})`}),onClick:o=>s.goToMoviePage(e.movieID),onMouseover:e=>a.hoverIndex=t,onMouseleave:o[0]||(o[0]=e=>a.hoverIndex=null)},[(0,i.Lk)("div",{class:(0,y.C4)(["number-background",{hovered:a.hoverIndex===t}]),style:(0,y.Tr)({backgroundImage:`url(${a.hoverIndex===t?a.hoverNumberImages[t]:a.numberImages[t]})`})},null,6)],44,se)))),128))]),(0,i.Lk)("div",{class:"chevron prev-chevron",onClick:o[1]||(o[1]=(...e)=>s.prevSlide&&s.prevSlide(...e))},ne),(0,i.Lk)("div",{class:"chevron next-chevron",onClick:o[2]||(o[2]=(...e)=>s.nextSlide&&s.nextSlide(...e))},de)])}var ve={props:{top10MovieCarousel:{type:Array,required:!0}},data(){return{currentIndex:0,hoverIndex:null,numberImages:[t(2915),t(7166),t(5765),t(2616),t(3543),t(7266),t(2073),t(5052),t(8155),t(173)],hoverNumberImages:[t(3051),t(4960),t(61),t(5866),t(5591),t(4924),t(873),t(7446),t(4659),t(6453)]}},methods:{goToMoviePage(e){this.$router.push({name:"DynamicMoviesView",params:{movieID:e}})},prevSlide(){const e=this.$el.querySelector(".carousel-inner"),o=window.innerWidth;0===e.scrollLeft?setTimeout((()=>{e.scrollTo({left:e.scrollWidth-e.clientWidth,behavior:"smooth"})}),200):e.scrollBy({left:-o,behavior:"smooth"})},nextSlide(){const e=this.$el.querySelector(".carousel-inner"),o=window.innerWidth,t=e.scrollWidth-e.clientWidth;e.scrollLeft>=t?setTimeout((()=>{e.scrollTo({left:0,behavior:"smooth"})}),200):e.scrollBy({left:o,behavior:"smooth"})}}};const he=(0,F.A)(ve,[["render",ue],["__scopeId","data-v-b1755318"]]);var me=he;const pe=e=>((0,i.Qi)("data-v-52bdc781"),e=e(),(0,i.jt)(),e),ge={class:"carousel"},we=pe((()=>(0,i.Lk)("div",{class:"sectionName"},"Top Rated Movies",-1))),Ce={class:"carousel-inner"},ke=["onClick"],fe=pe((()=>(0,i.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"#BABABA",viewBox:"0 0 24 24"},[(0,i.Lk)("path",{d:"M15.41 7.41L10.83 12l4.58 4.59L14 18l-6-6 6-6z"})],-1))),be=[fe],ye=pe((()=>(0,i.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"#BABABA",viewBox:"0 0 24 24"},[(0,i.Lk)("path",{d:"M8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6-6-6z"})],-1))),Te=[ye];function Le(e,o,t,r,a,s){return(0,i.uX)(),(0,i.CE)("div",ge,[we,(0,i.Lk)("div",Ce,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(t.topRatedCarousel,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.movieID,class:"carousel-item",style:(0,y.Tr)({backgroundImage:`url(${e.imageUrl})`}),onClick:o=>s.goToMoviePage(e.movieID)},null,12,ke)))),128))]),(0,i.Lk)("div",{class:"chevron prev-chevron",onClick:o[0]||(o[0]=(...e)=>s.prevSlide&&s.prevSlide(...e))},be),(0,i.Lk)("div",{class:"chevron next-chevron",onClick:o[1]||(o[1]=(...e)=>s.nextSlide&&s.nextSlide(...e))},Te)])}var Ie={props:{topRatedCarousel:{type:Array,required:!0}},data(){return{currentIndex:0}},methods:{goToMoviePage(e){this.$router.push({name:"DynamicMoviesView",params:{movieID:e}})},prevSlide(){const e=this.$el.querySelector(".carousel-inner"),o=window.innerWidth;0===e.scrollLeft?setTimeout((()=>{e.scrollTo({left:e.scrollWidth-e.clientWidth,behavior:"smooth"})}),200):e.scrollBy({left:-o,behavior:"smooth"})},nextSlide(){const e=this.$el.querySelector(".carousel-inner"),o=window.innerWidth,t=e.scrollWidth-e.clientWidth;e.scrollLeft>=t?setTimeout((()=>{e.scrollTo({left:0,behavior:"smooth"})}),200):e.scrollBy({left:o,behavior:"smooth"})}}};const xe=(0,F.A)(Ie,[["render",Le],["__scopeId","data-v-52bdc781"]]);var Se=xe,De=t(5297),Me={name:"MoviesView",components:{HeroCarousel:q,BigScreenCarousel:ee,Top10MovieCarousel:me,TopRatedCarousel:Se,GlobalFooter:De.A},data(){return{heroMovieCarousel:[],bigScreenCarousel:[],top10MovieCarousel:[],topRatedCarousel:[]}},async mounted(){this.heroMovieCarousel=await v(),this.bigScreenCarousel=await p(),this.top10MovieCarousel=await C(),this.topRatedCarousel=await b(),setTimeout((()=>{const e=document.querySelector(".home");e&&e.classList.add("loaded")}),1e3)}};const $e=(0,F.A)(Me,[["render",a],["__scopeId","data-v-8090e680"]]);var Be=$e}}]);
//# sourceMappingURL=678.d74915bd.js.map