<template>
    <div>
      <header class="relative w-full bg-cover bg-center" style="background-image: url('https://cdn.magdeleine.co/wp-content/uploads/2015/08/9524476479_ef867c36a4_o-1400x935.jpg');">
        <div id="darkBack" class="absolute inset-0 bg-black/15"></div>
  
        <div 
          id="popUp" 
          :class="{'-ml-[425px]': scrollPosition < 150, 'ml-0': scrollPosition >= 150}" 
          class="fixed max-w-[350px] bg-white border-[7px] border-white bottom-0 transition-all duration-1000"
        >
          <div 
            id="close" 
            class="absolute top-0 right-2 text-gray-800 text-2xl cursor-pointer"
            @click="closePopUp"
          >
            <i class="fa fa-times">

            </i>
          </div>
  
          <div id="new" class="relative">
            <span class="absolute bg-white text-blue-500 p-1 font-semibold text-lg uppercase -top-4 left-4">New!</span>
          </div>
  
          <h2 class="text-gray-700 text-center mt-10 px-5 text-[17px] leading-[24px] font-normal">
            I'm a notification popup that isn't too distracting or in your face. Scroll down or close me and I will go away. You'll still be able to open me later on, don't worry.
          </h2>
  
          <a href="#" target="_blank" class="button absolute left-0 right-0 m-auto w-[120px] text-white bg-blue-500 py-2 rounded-lg border-b-2 border-blue-600 text-center">
            Visit Page
          </a>
        </div>
  
        <div 
          id="plus" 
          @click="openPopUp"
          :class="{'-ml-[425px]': showPlusButton, 'ml-0': !showPlusButton}" 
          class="fixed bottom-[15%] text-white text-lg cursor-pointer transition-all duration-1000"
        >
          <span class="absolute top-10 left-4 text-lg">
            New <i class="fa fa-plus"></i>
          </span>
          <div class="w-14 h-14 bg-blue-500 rotate-45"></div>
        </div>
      </header>
    </div>
  </template>

<script setup>
import { ref } from 'vue'
import { useEventListener } from '@vueuse/core'

const scrollPosition = ref(0)
const showPlusButton = ref(true)

// Scroll event listener
useEventListener('scroll', () => {
  scrollPosition.value = window.scrollY
})

// Open popup when clicking the plus button
const openPopUp = () => {
  showPlusButton.value = false
}

// Close popup when clicking the close button
const closePopUp = () => {
  showPlusButton.value = true
}
</script>

  


<style scoped>

* {
  margin: 0;
  font-family: 'Source Sans Pro', sans-serif;
}

a {
  text-decoration: none;
}

header {
  background: url(http://cdn.magdeleine.co/wp-content/uploads/2015/08/9524476479_ef867c36a4_o-1400x935.jpg);
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
}

#darkBack {
  width: 100%;
  height: 100vh;
  background: rgba(76, 56, 75, .15);
}

#popUp {
  position: fixed;
  max-width: 350px;
  height: 225px;
  background: rgba(236, 240, 241, 1);
  border: 7px solid #fff;
  bottom: 0;
  margin-left: 0;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
}

#new span {
  background: #fff;
  position: absolute;
  color: #1c8dc4;
  padding: 4px 10px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: -5px;
}

#popUp .close {
  color: #464646;
  right: 8px;
  top: 0px;
  position: absolute;
  font-size: 20px;
  cursor: pointer;
}

#popUp h2 {
  font-size: 17px;
  color: #464646;
  line-height: 24px;
  font-weight: 400;
  text-align: center;
  margin-top: 40px;
  padding: 0 20px;
}

#body {
  height: 1200px;
  background: #eee;
}

a.button {
  margin: 0 auto;
  text-align: center;
  right: 0;
  left: 0;
  position: absolute;
  width: 120px;
  font-size: 15px;
  color: #fff;
  border-bottom: 2px solid #18729f;
  background: #1c8dc4;
  border-radius: 4px;
  padding: 8px 0;
}

#plus {
  position: fixed;
  color: #fff;
  bottom: 15%;
  font-size: 15px;
  margin-left: -425px;
  -webkit-transition: all 1.25s ease;
  -moz-transition: all 1.25s ease;
  -o-transition: all 1.25s ease;
  transition: all 1.25s ease;
  cursor: pointer;
  text-align: left;
  letter-spacing: 1px;
}

#plus span {
  position: absolute;
  margin-top: 38px;
  left: 4px;
}

#plus::after {
  content: '';
  display: block;
  display: relative;
  border-top: 55px solid transparent;
  border-bottom: 55px solid transparent;
  border-left: 55px solid #1c8dc4;
}

@media all and (max-width: 900px) {
  #popUp {
    margin-left: -425px;
  }
  #plus {
    margin-left: 0px;
  }
}
</style>