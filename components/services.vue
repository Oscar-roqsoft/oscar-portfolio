<template>
    <div id="services" class="max-w-[1280px] mx-auto px-4 py-16 font-['Lexend Deca']">
      <!-- Section Header -->
      <div class="border-l border-gray-700 dark:border-gray-400 pl-4 mb-12">
        <span class="text-xs text-gray-400 dark:text-gray-500 tracking-wider">
          SERVICES THAT I PROVIDE
        </span>
        <h1 class="text-4xl font-bold text-gray-100 dark:text-gray-800 mt-1">
          My Services
        </h1>
      </div>
  
      <!-- Services Grid -->
      <div 
        ref="servicesSection"
        class="grid md:grid-cols-3 gap-8"
      >
        <div
          v-for="item in services"
          :key="item.id"
          class="service-card opacity-0 translate-y-10 
          dark:bg-white/70 bg-gray-800/60 backdrop-blur-md 
          shadow-lg hover:shadow-2xl 
          border border-gray-700 dark:border-gray-200
          rounded-2xl p-6 transition-all duration-500 relative overflow-hidden"
        >
          <!-- Shine Effect -->
          <div class="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-20 pointer-events-none"></div>
  
          <!-- Service Number -->
          <div class="flex justify-end text-4xl text-gray-600 dark:text-gray-300 font-bold mb-4">
            0{{ item.id }}
          </div>
  
          <!-- Icon -->
          <div class="flex justify-center mb-4">
            <Icon :name="item.icon" size="70" class="text-gray-200 dark:text-gray-900" />
          </div>
  
          <!-- Title -->
          <h2 class="text-xl font-semibold text-gray-100 dark:text-gray-800 text-center mb-2">
            {{ item.title }}
          </h2>
  
          <!-- Description -->
          <p class="text-sm text-gray-300 dark:text-gray-500 text-center leading-relaxed">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import { onMounted, ref } from "vue";
  
  
  const servicesSection = ref(null);
  
  const services = [
    {
      id: 1,
      icon: "material-symbols:developer-mode-tv-rounded",
      title: "Full-Stack Web Development",
      description:
        "I build modern, scalable and high-performance web applications using Nuxt.js, Vue, Node.js, Express, MongoDB and more.",
    },
    {
      id: 2,
      icon: "mdi:cellphone-link",
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications using Capacitor, Vue and REST APIs — optimized for smooth performance on Android & iOS.",
    },
    {
      id: 3,
      icon: "material-symbols:cloud-sync-outline-rounded",
      title: "Backend & API Development",
      description:
        "Secure, fast and well-structured REST APIs, authentication systems, payment integrations and database architecture.",
    },
  ];
  
  onMounted(() => {
    const cards = servicesSection.value.querySelectorAll(".service-card");
  
    // Scroll animation
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: servicesSection.value,
          start: "top 85%",
        },
      }
    );
  
    // Hover float animation
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { y: -8, duration: 0.3, ease: "power2.out" });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { y: 0, duration: 0.3, ease: "power2.inOut" });
      });
    });
  });
  </script>
  
  <style scoped>
  .service-card:hover::after {
    content: "";
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 200%;
    background: linear-gradient(
      120deg,
      transparent 0%,
      rgba(255, 255, 255, 0.4) 50%,
      transparent 100%
    );
    animation: shine 1.5s ease;
  }
  
  @keyframes shine {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(200%);
    }
  }
  </style>
  