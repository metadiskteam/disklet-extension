import { signTransactionEx } from '../tx-sign-ex'

export async function process(params: any, host: string) {
 
  const signature = await signTransactionEx(params.transaction.txHex,params.transaction.inputInfos)

  return { signature }
}
