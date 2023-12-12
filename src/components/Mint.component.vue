<script lang="ts" setup>
import { ref } from 'vue';
import { mintToken } from '../services/mintToken';
import NFTComponent from './NFT.component.vue';
import { nfts } from '../mock/db';
import { TNFT } from '../types/Nft';
import { amountToCents } from '../utils/centimos';

const error = ref<string | null>(null);
const idCheckout = ref<string>('');
const urlPaymentNft = ref<string>('');

const mint = async (nft: TNFT, loading: boolean) => {
  console.group('Mint Nft Process...');
  console.log('minting...');
  console.log(nft);
  console.groupEnd();

  loading = true;

  const tokenForMint = {
    price_data: {
      product_data: {
        name: nft.name,
      },
      unit_amount: amountToCents(nft.rate),
      currency: 'usd',
    },
    quantity: nft.quantity,
  };

  try {
    const { success, result } = await mintToken(tokenForMint);
    if (!success) {
      error.value = 'Error minting token';
    }

    // save id checkout
    idCheckout.value = result.id;

    //open stripe payment window with url from backend
    window.open(result.url, '_blank');
    // urlPaymentNft.value = result.url;

    console.log(result, 'response');
  } catch (errorCatch: any) {
    error.value = errorCatch.message;
  }
};
</script>

<script lang="ts">
export default {
  name: 'Mint',
};
</script>

<template>
  <p v-if="urlPaymentNft !== ''">Go to: {{ urlPaymentNft }}</p>
  <div>
    <span v-if="error" class="text-red-500 my-4 block text-xl">{{
      error
    }}</span>
  </div>

  <div class="my-12">
    <section
      class="text-gray-600 body-font flex gap-12 justify-center items-center flex-wrap"
    >
      <NFTComponent
        v-for="nft in nfts"
        :key="nft.id"
        :name="nft.name"
        :description="nft.description"
        :rate="nft.rate"
        :image="nft.image"
        :extension="nft.extension"
        :id="nft.id"
        :quantity="nft.quantity"
        @mint-nft="mint"
      />
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
