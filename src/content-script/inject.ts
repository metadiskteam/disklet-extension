import browser from 'webextension-polyfill'

export type MetaletParams = {
  nonce: string
  channel: 'to-metadiskwallet' | 'from-metadiskwallet'
  action: string
  host: string
  icon?: string
  params?: any
  res: any
}

const listenToMetalet = () => {
  browser.runtime.onMessage.addListener((msg, sender, response) => {
    if (msg.channel === 'from-metadiskwallet') {
      window.postMessage(msg, '*')
    }

    return true
  })
}
listenToMetalet()

const node = document.getElementsByTagName('body')[0]
const script = document.createElement('script')
script.setAttribute('type', 'text/javascript')
script.setAttribute('src', chrome.runtime.getURL('content.js'))
node.appendChild(script)

const callMetalet = (params: MetaletParams) => {
  browser.runtime.sendMessage(params)
}

window.addEventListener(
  'message',
  (event) => {
    // We only accept messages from ourselves
    if (event.source !== window || event.data?.channel !== 'to-metadiskwallet') {
      return
    }

    callMetalet(event.data)

    return true
  },
  false
)
