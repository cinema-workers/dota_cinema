<template>
    <div class="w-full grid grid-cols-7 gap-4">
        <NavigationComponent class="col-span-1 bg-white flex justify-start p-3"></NavigationComponent>
        <main class="col-span-6">
            <section class="flex justify-between items-start">
                <CarouselItem v-for="poster in posters" :key="JSON.stringify(poster)" :url="poster.url" :name="poster.name" :types="poster.types">
                </CarouselItem>
            </section>
        </main>
    </div>
</template>

<script setup lang="ts">
import NavigationComponent from '@/components/NavigationComponent.vue';
import CarouselItem from '@/components/carousel/CarouselItem.vue';

interface poster {
    url: string,
    name: string,
    types: string[]
}

enum filmType { Thriller = "триллер", Comedy = "комедия", Family = "семейный", Sport = "спорт", 
    Fighter = "боевик", Tragedy = "драма", Adventure = "приключения", Cartoon = "мультфильм" }

const posters: poster[] = [{ url: 'p4653.jpg', name: 'Анчартед', types: [filmType.Fighter, filmType.Adventure] },
{ url: 'krol.jpg', name: 'Кролецып и хомяк тьмы', types: [filmType.Cartoon] },
{ url: 'gg.jpg', name: 'Мистер Нокаут', types: [filmType.Tragedy, filmType.Sport] },
{ url: 'nil.jpg', name: 'Смерть на Ниле', types: [filmType.Thriller] },
{ url: 'lulu.jpg', name: 'Лулу и Бриггс', types: [filmType.Comedy, filmType.Adventure, filmType.Cartoon] },]

</script>