<template>
    <div id="project" 
    class="md:flex-row max-w-[1280px] mx-auto p-4 text-center border-t font-['Lexend Deca'] dark:text-gray-900 dark:bg-gray-200">
        <div class="flex justify-center text-gray-300 dark:text-gray-200 text-sm font-bold mb-2 ">
            <span class="px-3 py-1 bg-slate-700 dark:bg-gray-900 rounded-full capitalize tracking-wider font-['Shrikhand'] shadow shadow-slate-500">works</span>
        </div>
        <p class="text-sm text-gray-400 dark:text-gray-900">Some of the noteworthy projects I have built:</p> 
         
        <div class="work" >
            <div  id="work" 
            v-for="work in works " :key="work.id" class="flex flex-col md:flex-row mt-[50px]  border border-[#009969] rounded-lg "
               :class="work.id == 2 || work.id == 4? 'md:flex-row-reverse':''"
            >
                <div class="p-6 md:p-[48px] bg-slate-800 rounded-t md:rounded-t-none md:rounded-l-lg">
                    <img  :src="work.img" alt="" class="w-full md:min-h-[320px] rounded-lg">
                </div>
    
                <div 
                class="bg-gray-900 rounded-b md:rounded-b-none md:rounded-r-lg p-6 md:p-[48px] dark:text-gray-100 order-2">
                    <div class="flex justify-start items-center">
                        <h1 class="text-lg text-gray-200 capitalize pb-0.5 border-b-2 border-dotted border-[#009969]">{{ work.title }}</h1>
                    </div>
                    <p class="text-gray-400 shadow py-3 text-sm text-start ">{{ work.article }}</p>
                        <div class="flex flex-wrap capitalize">
                            <div v-for="tool in work.tools" :key="tool">
                                <span 
                                class="px-3 py-1 border border-[#009969] inline-flex items-center text-xs bg-slate-800 rounded-2xl mr-2 my-2 font-bold">
                                {{ tool }}
                                </span>
                            </div>
                        </div>
    
                    <a :href="work.link" class="flex justify-start mt-10 text-gray-500">
                        <Icon name="material-symbols:ungroup" size="24"/>
                    </a>
                </div>
            </div>
        </div>
        
        
    </div>
</template>


<script setup>
import 'animate.css';

import gsap from 'gsap'
const work = ref('')

onMounted(()=>{

    gsap.from(works.value,{
        scrollTrigger: {
            trigger:works.value,
            toggleActions:'restart none none none'
        },
        delay:0.5,
        y:200,
        autoAlpha: 0,
        stagger:0.25,
        duration:5,
        ease:"back.out(1.7)"
    
    })
})

    const works = [
        {
            id:1,
            img:"/yeerlo.png",
            title: "Yeerlo event platform",
            article: "Step into the realm of creativity with our Portfolio Design Sample Website. Each click opens a door to a world of aesthetics, innovation, and imagination. Our curated selection of projects is a testament to our passion for design. From sleek UI/UX to captivating graphics, immerse yourself in inspiration. Welcome to design redefined.",
            tools:["html","css","javascript","tailwindCss","nuxtjs"],
            link:"https://yeerlo.com/"
        },
        {
            id:2,
            img:"/inhouse.png",
            title: "Inhouse",
            article: "Step into the realm of creativity with our Portfolio Design Sample Website. Each click opens a door to a world of aesthetics, innovation, and imagination. Our curated selection of projects is a testament to our passion for design. From sleek UI/UX to captivating graphics, immerse yourself in inspiration. Welcome to design redefined.",
            tools:["html","css","javascript","tailwindCss","nuxtjs","Gsap","Vuetify"],
            link:"https://inhouse-website-six.vercel.app/"
        },
        {
            id:3,
            img:"/nexcent-bg.png",
            title: "Nexcent landing page",
            article: "Nexcent's landing page is the virtual storefront that can make or break a visitor's first impression. Enter Nexcent Agency – your partner in crafting engaging landing pages. With a blend of stunning design, user-centric layout, and strategic calls-to-action, we convert visitors into loyal customers. Elevate your online presence with Nexcent.",
            tools:["html","css","javascript","tailwindCss","nuxtjs"],
            link:"https://oscar-nexcent.netlify.app"
        },
        {
            id:4,
            img:"/Banner.png",
            title: "Logistics Website",
            article: "Discover the power of Nuxt.js and Tailwind.css in our Cargo Logistics Sample Website. Seamlessly blending performance and design, it offers lightning-fast user experiences. Explore simplified logistics solutions, real-time tracking, and sleek UI. Witness innovation at the intersection of technology and aesthetics.",
            tools:["html","css","javascript","tailwindCss","nuxtjs"],
            link:"https://cargopoint.netlify.app"
        }
    ]
</script>

<style scoped>

.before-enter{
    opacity: 0;
    transform: translateY(100px);
    transition: all 2s ease-in-out ;
}
.enter{
    opacity: 1;
    transform: translateY(0);
}
</style>