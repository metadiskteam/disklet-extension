import accountManager from '../account'

export async function process(params: any, host: string) {
  const publicKey = await accountManager.getPublicKey('mvc', params?.path)

  return publicKey
}
