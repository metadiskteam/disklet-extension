<script lang="ts" setup>
import { ref } from 'vue'

import AssetSelect from './components/AssetSelect.vue'
import {MVCAssets} from '@/data/assets'

const assets = ref(MVCAssets)
</script>

<template>
  <div class="divide-y divide-gray-100 text-black">
    <!--列表，里面有btc，mvc -->
    <AssetSelect v-for="asset in assets" :key="asset.symbol" :asset="asset" />
  </div>
</template>
