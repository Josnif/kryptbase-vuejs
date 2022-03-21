<template>
    <div class="flex flex-col mf:flex-row w-full justify-center items-center gradient-bg-services">
            <div class="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                <div class="flex-1 flex items-start justify-start flex-col">
                    <h1 class="dark:text-white text-gradient py-2 text-3xl sm:text-5xl ">
                        Services that we
                        <br />
                        continue to improve
                    </h1>
                </div>
            </div>
            <div class="flex-1 flex-col items-center justify-start">
                <ServiceCard 
                    color="bg-[#2952E3]"
                    title="Security Guaranteed"
                    icons=""
                    subtitle="Security is guaranteed. We always maintain privacy and the quality of our products."
                />
                <ServiceCard 
                    color="bg-[#8945F8]"
                    title="Best exchange rates"
                    icons=""
                    subtitle="Security is guaranteed. We always maintain privacy and the quality of our products."
                />
                <ServiceCard 
                    color="bg-[#F84550]"
                    title="Fastest transactions"
                    icons=""
                    subtitle="Security is guaranteed. We always maintain privacy and the quality of our products."
                />
            </div>
        </div>
</template>

<script setup>
import ServiceCard from './Partials/ServiceCard.vue'
</script>