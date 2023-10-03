import { BN, mvc } from 'meta-contract'
import { Address } from 'mvc-std-lib';
import { getNetwork } from './network'
import { getAddress, getPrivateKey } from './account'


export async function signTransactionEx (txHex:string, inputInfos:any[]): Promise<any[]> {
  console.log('---signTransactionEx--entry-txHex',txHex)
  console.log('---signTransactionEx--entry-inputInfos',inputInfos)
  const tx = new mvc.Transaction(txHex);
  let newInputInfos = []
  console.log('--inputInfos.length--',inputInfos.length)
  for(let i=0;i<inputInfos.length;i++){
      let v = inputInfos[i]
      console.log('----signTransaction----01',i, v)
      let privateKey;
      if(v.address){
          let inputAddress = null
          try{
            inputAddress = mvc.Address.fromString(await getNetwork() ,v.address);
          }catch(e){}
          console.log('--v.address',v.address,inputAddress)
          if(inputAddress){
              let mainAddress = await getAddress()
              console.log('--mainAddress--',mainAddress)
              if(v.address!==(mainAddress)){
                  throw new Error("unsupported address in inputInfos")
              }else
                privateKey = await getPrivateKey('mvc')
          }else  {
              //传了address却不是地址，则视为path去衍生
              privateKey = await getPrivateKey('mvc',v.address)
          }
      }else
        privateKey = await getPrivateKey()

      console.log('----signTransaction----04',privateKey)

      privateKey = new mvc.PrivateKey(privateKey)
      
      let sighash = mvc.Transaction.Sighash.sighash(
          tx,
          v.sighashType,
          v.inputIndex,
          new mvc.Script(v.scriptHex),
          new mvc.crypto.BN(v.satoshis)
      ).toString("hex");

      console.log('----signTransaction----',sighash)
      console.log('--Buffer---',typeof Buffer)
      const message = Buffer.from(sighash, "hex")
      var sig = mvc.crypto.ECDSA.sign(
          message,
          privateKey,
          "little"
      ).set({
          nhashtype: v.sighashType,
      })
      console.log('----signTransaction----2',sig)
      const strSig = sig.toString();
      console.log('----signTransaction----3',strSig)
      newInputInfos.push({sig: strSig, publicKey: privateKey.toPublicKey().toString()})
  }
  console.log('newInputInfos',newInputInfos)
  return newInputInfos
}