import { mvc } from 'meta-contract'
import { getPrivateKey } from '../account'

export async function process(params: any, host: string) {

  const privateKey = await getPrivateKey()
  const hash = mvc.crypto.Hash.sha256(Buffer.from(params.message)) // 对数据哈希
	const signMsg = mvc.crypto.ECDSA.sign(hash, privateKey).toString() // 使用私钥进行签名

  return { signMsg }
}
