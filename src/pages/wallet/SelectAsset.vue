<script lang="ts" setup>
import { ref, computed, Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { MVCAssets } from '@/data/assets'
import AssetItem from './components/AssetItem.vue'
import { getAssetsDisplay } from '@/lib/assets'

const props = defineProps<{
  purpose: 'receive' | 'send'
}>()

const router = useRouter()

const assets = ref(MVCAssets)
const assetsDisplay: Ref<string[]> = ref([])
getAssetsDisplay().then((display) => {
  assetsDisplay.value = display
})
const displayingAssets = computed(() => {
  return assets.value.filter((asset) => assetsDisplay.value.includes(asset.symbol))
})

function selectAsset(asset: any) {
  switch (props.purpose) {
    case 'receive':
      router.push(`/wallet/receive?chain=${asset.chain}`)
      break
    case 'send':
      router.push(`/wallet/send?symbol=${asset.symbol}`)
      break
  }
}
</script>

<template>
  <div class="space-y-2 divide-y divide-gray-100 text-black">
    <AssetItem v-for="asset in displayingAssets" :key="asset.symbol" :asset="asset" @click="selectAsset(asset)" />
  </div>
</template>
