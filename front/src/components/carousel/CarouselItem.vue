<template>
    <div>
        <div><img src="../../../src/assets/posters/p4653.jpg" alt="" /></div>
        <div>
            <h3>{{ props.name }}</h3>
            <p>{{ props.types }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
interface Props {
    url: string,
    types: string[],
    name: string,
}
const props = defineProps<Props>();
</script>