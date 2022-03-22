<script setup lang="ts">
import NavigationComponent from "@/components/NavigationComponent.vue";
import CarouselItem from "@/components/carousel/CarouselItem.vue";
import { Film } from "../../../interfaces/models"
import axios from "axios";

const getFilms = async () => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
  };
  try {
    const response = await axios.get("http://localhost:3000/", { headers });
    console.log(response);
    return response?.data ? response.data.films : [];
  } catch (e) {
    console.log(e);
  }
};

const films: Film[] | [] = await getFilms();
</script>

<template>
  <div class="w-full grid grid-cols-7 gap-4">
    <NavigationComponent
      class="col-span-1 bg-white flex justify-start p-3"
    ></NavigationComponent>
    <main class="col-span-6">
      <section class="flex justify-between items-start">
        <CarouselItem
          v-for="film in films"
          :key="JSON.stringify(film)"
          :url="film.posterUrl"
          :name="film.name"
          :genres="film.genres"
        >
        </CarouselItem>
      </section>
    </main>
  </div>
</template>