<template>
    <div
      ref="skillsSection"
      class="flex flex-col mt-[60px] max-w-[1000px] mx-auto p-6 text-center font-['Lexend Deca'] mb-20"
    >
      <!-- Section Badge -->
      <div class="flex justify-center mb-3">
        <span
          class="px-3 py-1 text-white bg-slate-700 dark:bg-gray-900 rounded-full capitalize tracking-wider font-['Shrikhand'] shadow shadow-slate-500"
        >
          SKILLS
        </span>
      </div>
  
      <!-- Title -->
      <h2 class="text-xl font-semibold dark:text-gray-800 text-gray-100">
        Technologies & Tools I Work With
      </h2>
  
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
        A collection of technologies I use in real-world projects.
      </p>

      <!-- Skills Grid -->
      <div
        class="grid grid-cols-3 md:grid-cols-6 gap-6 mt-6 px-3 
        bg-gradient-to-b from-transparent to-gray-50/40 
        dark:to-gray-900/20 rounded-2xl py-8"
      >
        <div
          v-for="img in skills"
          :key="img"
          class="skill-item opacity-0 scale-75 transition-all duration-300
          hover:scale-105 hover:-translate-y-1"
        >
          <div
            class="relative rounded-xl p-2 flex items-center justify-center
            shadow-md hover:shadow-xl transition-all duration-300 
            border border-gray-200 
            
            bg-gray-300 
            bg-gradient-to-br from-gray-500 via-white/90 to-gray-100 
            
  
            backdrop-blur-sm"
          >

            <!-- Shiny highlight -->
            <div
              class="absolute inset-0 rounded-xl pointer-events-none
              bg-gradient-to-tr from-white/60 via-transparent to-transparent 
              opacity-50"
            ></div>
  
            <img
              :src="img"
              alt="Skill Logo"
              class="w-[150px] h-[55px] object-contain relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from "vue";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  
  
  const skillsSection = ref(null);
  
  const skills = [
    "/JavaScript-logo-vector-01.svg",
    "/CSS-3-logo-vector-01.svg",
    "/HTML-5-logo-vector-01.svg",
    "/Python-logo-vector-01.svg",
    "/tailwindcss-icon.svg",
    "/Vue-JS-logo-vector-01.svg",
    "/getbootstrap-ar21.svg",
    "/git-scm-ar21.svg",
    "/mongodb-ar21.svg",
    "/nuxtjs-ar21.svg",
    "/nodejs-ar21.svg",
  ];
  
  onMounted(() => {
    const items = skillsSection.value.querySelectorAll(".skill-item");
  
    gsap.fromTo(
      items,
      { opacity: 0, scale: 0.7, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: skillsSection.value,
          start: "top 85%",
        },
      }
    );
  });
  </script>
  