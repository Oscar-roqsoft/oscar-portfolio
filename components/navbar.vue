
<template>
    <div class="min-h-[80px] flex items-center  fixed top-0 left-0 w-full dark:bg-gray-200  bg-gray-900  z-[999] ">
      <div class="md:max-w-[1200px] mx-auto w-full px-4 md:px-0">
        <div class="flex justify-between items-center w-full">

          <div @click="navigateTo('/')">

            <span class="text-[30px] font-['pacifico'] dark:text-[#1D1D1D] text-white">Oscar<span class="text-[#009969]">Tech</span></span>
           
          </div>
  
          <!-- Desktop Navigation -->
          <div class="hidden md:flex dark:text-[#1D1D1D] text-white text-[16px] font-[400] gap-[16px] max-w-[250px] min-h-10">
            <a href="#home"  class="p-[6px] cursor-pointer hover:border-b border-[#009969] hover:text-[#009969] transition ease-in-out duration-300"> Home </a>
            <a href="#about"  class="p-[6px] cursor-pointer hover:border-b border-[#009969] hover:text-[#009969] transition ease-in-out duration-300"> About </a>
            <a href="#services"  class="p-[6px] cursor-pointer hover:border-b border-[#009969] hover:text-[#009969] transition ease-in-out duration-300">Services</a>
            <a href="#project"   class="p-[6px] cursor-pointer hover:border-b border-[#009969] hover:text-[#009969] transition ease-in-out duration-300">Projects</a>
          </div>
  
          <!-- Action Buttons -->
          <div class="items-center space-x-6 hidden md:flex">
            <Button name="Get in Touch" />
            <!-- <DropdownCountry :button1="true" /> -->
             <div class="translator1">

                 <GoogleTranslateSelect
                     default-language-code="en"
                     default-page-language-code="en"
                     :fetch-browser-language="false"
                     trigger="click"
                     @select="handleGoogleTranslateSelect"
                 />
             </div>

             <ThemeToggle/>

          </div>
  
          <!-- Mobile Drawer Toggle and Menu -->
          <div class="relative md:hidden flex items-center space-x-6">
            <input v-model="navbar" type="checkbox" id="menuToggle" class="hidden" @click="navbar = !navbar">
            <label   for="menuToggle" class="flex flex-col justify-center cursor-pointer">
              <span class="bar top"></span>
              <span class="bar middle"></span>
              <span class="bar bottom"></span>
            </label>
  
            <!-- Mobile Drawer Menu -->
            <aside class="fixed inset-y-0 left-0 z-[998] w-[75%] dark:bg-gray-200  bg-gray-900 transform -translate-x-full transition-transform duration-300 ease-in-out" id="mobileDrawer">
              <nav class=" flex flex-col space-y-4">
                <div class="px-5 flex flex-col items-start space-y-4 my-4">
                    <n-button @click="navbar = !navbar"  quaternary size="large" >
                        <a href="#"  class=" text-[18px] dark:text-[#1D1D1D] text-white hover:text-[#009969]">
                            Home
                        </a>
                    </n-button>
                    <n-button  @click="navbar = !navbar"  quaternary size="large" >
                        <a href="#about" class=" text-[18px] dark:text-[#1D1D1D] text-white hover:text-[#009969]">
                            About
                    </a>
                    </n-button>
                    <n-button  @click="navbar = !navbar"   quaternary size="large" >
                        <a href="#services" class=" text-[18px] dark:text-[#1D1D1D] text-white hover:text-[#009969]">
                            Services
                        </a>
                    </n-button>
                    <n-button  @click="navbar = !navbar"  quaternary size="large" >
                        <a href="#project" class=" text-[18px] dark:text-[#1D1D1D] text-white hover:text-[#009969]">
                            Projects
                        </a>
                    </n-button>
                </div>

                <div class="border-b border-gray-800 dark:border-gray-300"></div>
                    <div class="px-6">
                        <Button name="Get in touch" height="50px" />
                    </div>
                <div class="border-b border-gray-800 dark:border-gray-300"></div>

                <div class="flex translator px-6 ">
                        <GoogleTranslateSelect
                            default-language-code="en"
                            default-page-language-code="en"
                            :fetch-browser-language="false"
                            trigger="click"
                            @select="handleGoogleTranslateSelect"
                        />
                        
                </div>

                <div class="border-b border-gray-800 dark:border-gray-300"></div>
                    <div class="px-6 flex items-center gap-2">

                        <ThemeToggle/>
                        <div class="text-[20px] dark:text-[#1D1D1D] text-white">
                            <span v-if="!isDark" >: Dark mode</span>
                            <span v-else>: Light mode</span>
                        </div>

                    </div>
                <!-- <div class="border-b"></div> -->



                
              </nav>
            </aside>

          </div>
        </div>
      </div>
    </div>
  </template>
  

<script setup>
 import { NSwitch, NButton } from 'naive-ui'


  const isDark = useDark()

  const navbar = ref(false)

  import GoogleTranslateSelect from '@google-translate-select/vue3';
    const visible = ref(false);
    const isFocused = ref(false);

    const handleGoogleTranslateSelect = (language) => {
    console.log(language)
    }

</script>
  

<style scoped>

  /* Hide checkbox */
  input[type="checkbox"] {
    display: none;
  }


  
  /* Drawer Open/Close Control */
  input[type="checkbox"]:checked ~ aside {
    transform: translateX(0%);
  }
  
  /* Mobile Toggle Button */
  label {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 10px;
    cursor: pointer;

  }


  
  .bar {
    display: block;
    background-color: #fff !important;
    width: 30px;
    height: 3px;
    transition: transform 0.4s ease, background-color 0.4s ease, width 0.4s ease;

  }

  html.dark .bar {
    background-color: #1D1D1D !important;
  }
  
  /* Change burger icon to X on open */
  input[type="checkbox"]:checked + label .top {
    transform: translateY(10px) rotate(45deg);
  }
  
  input[type="checkbox"]:checked + label .middle {
    width: 0;
  }
  
  input[type="checkbox"]:checked + label .bottom {
    transform: translateY(-10px) rotate(-45deg);
  }
  
  /* Drawer Styling */
  aside {
    width: 100%;
    height: 100vh;
    padding-top: 0px;
    box-shadow: 2px 0px 8px rgba(0, 0, 0, 0.2);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    margin-top: 80px;
    height: 100vh;
    box-shadow: none;
    left: -25px;

  }
  
  @media (min-width: 768px) {
    aside {
      display: none;
    }
  }

 /* .google-translate-select{
  width: 100% !important;
  border-radius: 16px !important;
  padding: 10px;
  background: transparent !important;
  border: 1px solid #1B2537 !important;
  color: #8E9BAE !important;
} */

html.dark .translator1 :deep(.google-translate-select .google-translate-select-dropdown__activator){
    width: 120px !important;
    /* border: 1px solid rgb(243, 241, 241); */
    border-radius: 8px;
    height: 40px !important;
    overflow: hidden;
    color: #1D1D1D;

 

}

.translator1 :deep(.google-translate-select .google-translate-select-dropdown__activator){
    color: #fff;
}

.translator1 :deep(.google-translate-select .google-translate-select-dropdown__activator:hover){
    backdrop-filter: blur(10px); /* Frosted glass blur */
    background: #2e33380d;
    transition: color .3s cubic-bezier(.4, 0, .2, 1), background-color .3s cubic-bezier(.4, 0, .2, 1), opacity .3s cubic-bezier(.4, 0, .2, 1), border-color .3s cubic-bezier(.4, 0, .2, 1);
}


.translator :deep(.google-translate-select .google-translate-select-dropdown__activator){
    width: 145px !important;
    border-radius: 8px;
    height: 52px !important;
    border: 1px solid rgba(255, 255, 255, 0.3); /* Slight border for glass */
    backdrop-filter: blur(10px); /* Frosted glass blur */
    background: #2e33380d;
    overflow: hidden;
    transition: color .3s cubic-bezier(.4, 0, .2, 1), background-color .3s cubic-bezier(.4, 0, .2, 1), opacity .3s cubic-bezier(.4, 0, .2, 1), border-color .3s cubic-bezier(.4, 0, .2, 1);

}

</style>
  