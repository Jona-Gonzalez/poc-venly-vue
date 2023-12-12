<script lang="ts" setup>
import { reactive, ref } from 'vue';
import SpinnerComponent from './Spinner.component.vue';

const $emit = defineEmits(['mint-nft']);

const props = defineProps({
  name: String,
  description: String,
  rate: Number,
  quantity: Number,
  image: String,
  extension: String,
  id: Number,
});

const loading = ref(false);

const nft = reactive(props);

const mintNFT = () => {
  loading.value = true;

  $emit('mint-nft', nft);
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
</script>

<script lang="ts">
export default {
  name: 'NFT',
};
</script>

<template>
  <div class="flex flex-wrap -m-4">
    <div
      class="w-[300px] max-h-[550px] border-gray-200 border-opacity-60 rounded-lg overflow-hidden border"
    >
      <img
        class="w-full object-cover object-center h-[60%] ob"
        :src="`/img/${nft.image}.${nft.extension}`"
        :alt="`${nft.name}`"
      />
      <div class="p-6 bg-[#f3f3f3] h-[40%]">
        <h2
          class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
        >
          Turtles
        </h2>
        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
          {{ nft.name }}
        </h1>
        <p class="leading-relaxed mb-3">
          {{ nft.description }}
        </p>
        <small class="leading-relaxed mb-3 text-lg text-blue-600">
          $ {{ nft.rate }}
        </small>
        <div class="flex items-center flex-wrap">
          <button
            @click="mintNFT"
            class="text-indigo-500 inline-flex justify-center items-center md:mb-2 lg:mb-0 w-[50%] mx-auto"
          >
            <SpinnerComponent v-if="loading" />
            {{ loading ? 'Loading...' : 'Mint' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
