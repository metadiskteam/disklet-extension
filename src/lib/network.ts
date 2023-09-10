import { ref, Ref } from 'vue'
import storage from './storage'

export const network: Ref<'testnet' | 'mainnet'> = ref('mainnet')

export async function setNetwork(_network: 'mainnet' | 'testnet') {
  await storage.set('network', _network)
  network.value = _network
}

export async function getNetwork(): Promise<'mainnet' | 'testnet'> {
  const res = await storage.get('network')
  if (!res) {
    await setNetwork('mainnet')
    return 'mainnet'
  }

  network.value = res
  return network.value
}
