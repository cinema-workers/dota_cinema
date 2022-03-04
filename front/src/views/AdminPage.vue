<script setup lang="ts">
import { reactive } from "vue";

interface Film {
  name: string;
  ageRestriction: number | null;
  posterUrl: string;
  startDate: Date | null;
  endDate: Date | null;
}

const film: Film = reactive({
  name: "",
  ageRestriction: null,
  posterUrl: "",
  startDate: null,
  endDate: null,
});

</script>

<template>
  <div class="flex flex-col justify-center w-full">
    <div>
      <label for="name"><input type="text" id="name" /></label>
    </div>
    <div>
      <label for="ageRestriction"
        ><input type="text" id="ageRestriction"
      /></label>
    </div>
    <div>
      <label for="posterUrl"><input type="file" id="posterUrl" /></label>
    </div>
    <div>
      <label for="startDate"><input type="text" id="startDate" /></label>
    </div>
    <div>
      <label for="endDate"><input type="text" id="endDate" /></label>
    </div>
  </div>
</template>
