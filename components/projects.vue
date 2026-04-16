<template>
    <div
      id="project"
      class="max-w-[1280px] mx-auto p-4 text-center font-['Lexend Deca'] rounded-lg"
      :class="!isDarkMode ? 'bg-gray-900 text-gray-100' : ' bg-gray-100 text-gray-900'"
    >
    
  
      <!-- section badge -->
      <div class="flex justify-center mb-2">
        <span
          class="px-3 py-1 rounded-full uppercase tracking-wider shadow"
          :class="!isDarkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-800 text-white'"
        >
          Works
        </span>
      </div>
  
      <p class="text-sm mb-4" :class="!isDarkMode ? 'text-gray-300' : 'text-gray-600'">
        Some of the noteworthy projects I built:
      </p>
  
      <!-- FILTER BUTTONS -->
      <div class="flex justify-center gap-3 mt-6 flex-wrap">
        <button
          v-for="f in filters"
          :key="f"
          @click="activeFilter = f"
          class="px-4 py-1.5 rounded-full text-sm font-semibold transition-all border"
          :class="[
            activeFilter === f
              ? isDarkMode
                ? 'bg-gray-700 text-gray-100 border-gray-700 shadow'
                : 'bg-gray-900 text-white border-gray-900 shadow'
              : !isDarkMode
              ? 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'
              : 'bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300'
          ]"
        >
          {{ f }}
        </button>
      </div>
  
      <!-- PROJECTS GRID -->
      <div
        ref="projectsContainer"
        class="grid md:grid-cols-2 xl:grid-cols-2 gap-10 mt-12"
      >
        <!-- EMPTY STATE -->
        <div
          v-if="filteredProjects.length === 0"
          class="col-span-full flex flex-col items-center py-16"
        >
          <p :class="!isDarkMode ? 'text-gray-400' : 'text-gray-500'">No projects match this filter.</p>
        </div>
  
        <!-- PROJECT CARDS -->
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card rounded-xl overflow-hidden transform transition-all hover:scale-[1.02] shadow-lg"
          :class="!isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'"
        >
          <img :src="project.img" class="w-full h-[260px] object-cover" />
  
          <div class="p-6 text-left">
            <h3 class="text-lg font-bold border-b pb-1 mb-3" :class="!isDarkMode ? 'border-gray-600' : 'border-gray-300'">
              {{ project.title }}
            </h3>
  
            <p class="text-sm mb-4" :class="!isDarkMode ? 'text-gray-300' : 'text-gray-600'">
              {{ project.article }}
            </p>
  
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tool in project.tools"
                :key="tool"
                class="px-3 py-1 rounded-full text-xs font-bold"
                :class="!isDarkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-gray-200 text-gray-900 border-gray-300'"
              >
                {{ tool }}
              </span>
            </div>
  
            <a
              :href="project.link"
              target="_blank"
              class="inline-flex items-center gap-2 font-semibold underline"
              :class="!isDarkMode ? 'text-teal-400' : 'text-teal-600'"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
<script setup>
import { ref, computed, watch, nextTick, onMounted } from "vue";
import gsap from "gsap";




const filters = ["All", "Web App", "Mobile App", "Landing Page"];
const activeFilter = ref("All");

const isDark = useDark(); // Use VueUse's `useDark`
const isDarkMode = ref(isDark.value);
 
watch(isDark, (newValue) => {
  if(newValue){
    isDarkMode.value = true;
  }else{
    isDarkMode.value = false;
  }
});

const works = ref([
  { id: 1, category: "Web App", img: "/yeerlo.png", title: "Yeerlo", 
  article: "Event platform with ticketing, profiles", tools: ["javascript","tailwindcss","nuxtjs"], link: "https://yeerlo.com" },
  { id: 2, category: "Web App", img: "/inventory.png", title: "Inventory", article: "A simple inventory system that helps track products, manage stock levels, and monitor sales efficiently", 
  tools: ["javascript","mongoDB","express","nodejs","nuxtjs",'shadcn-vue'], link: "https://inventory-app-nine-steel.vercel.app/" },
  { id: 3, category: "Landing Page", img: "/game.png", title: "Nexcent", 
   article: "A platform for organizing gaming tournaments, registering players, scheduling matches, and tracking scores in real time.", 
  tools: ["tailwindcss","nuxtjs",], link: "https://game-website-one-iota.vercel.app/" },
  { id: 4, category: "Landing Page", img: "/nexcent-bg.png", title: "Nexcent", article: "High-converting landing page", tools: ["tailwindcss","nuxtjs"], link: "#" },
  { id: 5, category: "Web App", img: "/inhouse.png", title: "Inhouse", article: "Modern property platform built with Nuxt & GSAP", tools: ["nuxtjs","gsap"], link: "https://inhouse-website-six.vercel.app/" },
]);

const filteredProjects = computed(() => {
  if (activeFilter.value === "All") return works.value;
  return works.value.filter(p => p.category === activeFilter.value);
});

const projectsContainer = ref(null);

const animateCards = () => {
  if (!projectsContainer.value) return;
  const children = Array.from(projectsContainer.value.children);
  gsap.fromTo(children,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power3.out" }
  );
};

onMounted(() => nextTick(() => animateCards()));

watch(activeFilter, () => nextTick(() => animateCards()));
</script>
  