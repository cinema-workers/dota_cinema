<script setup lang="ts">
import axios from "axios";
import { reactive, ref } from "vue";
import { setFile } from "../utils/fileUpload";
import { HTMLInputElement } from "../../../interfaces/events";

interface Film {
  name: string;
  ageRestriction: string;
  posterUrl: string | File;
  startDate: string;
  endDate: string;
}

let film: Film = reactive({
  name: '',
  ageRestriction: '',
  posterUrl: '',
  startDate: '',
  endDate: '',
});

async function createFilm() {
  const headers = {
    "Access-Control-Allow-Origin": "*",
  };
  const formData = new FormData();
  formData.append('name', film.name);
  formData.append('ageRestriction', film.ageRestriction);
  formData.append('posterUrl', film.posterUrl);
  formData.append('startDate', film.startDate);
  formData.append('endDate', film.endDate);
  try {
    const res = await axios.post("http://localhost:3000/admin/film", formData, { headers });
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}
</script>

<template>
  <div class="flex flex-col justify-center items-center max-w-sm">
    <div class="flex py-5">
      <label for="name" class="pr-4">Название фильма</label
      ><input type="text" id="name" v-model="film.name" />
    </div>
    <div class="flex py-5">
      <label for="ageRestriction" class="pr-4">Возрастное ограничение</label
      ><input type="text" id="ageRestriction" v-model="film.ageRestriction" />
    </div>
    <div class="flex py-5">
      <label for="posterUrl" class="pr-4">Постер фильма</label
      ><input
        type="file"
        id="posterUrl"
        @change="setFile($event as HTMLInputElement, film)"
      />
    </div>
    <div class="flex py-5">
      <label for="startDate" class="pr-4">Дата начала проката</label
      ><input
        type="date"
        min="2022-01-01"
        max="2050-12-31"
        id="startDate"
        v-model="film.startDate"
      />
    </div>
    <div class="flex py-5">
      <label for="endDate" class="pr-4">Дата окончания проката</label
      ><input
        type="date"
        min="2022-01-01"
        max="2050-12-31"
        id="endDate"
        v-model="film.endDate"
      />
    </div>
    <button @click="createFilm">SAVE FILM</button>
  </div>
</template>
