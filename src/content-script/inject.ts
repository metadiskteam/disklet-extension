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
  browser.runtime.onMessage.addListener((msg, sender) => {
    if (msg.channel === 'from-metadiskwallet') {
      window.postMessage(msg, '*')
    }

    return true
  })
}

listenToMetalet()

const callMetalet = async (params: MetaletParams) => {
  // try call metalet;
  // if failed, that's probably because metalet's service worker does not wake up on time;
  // so we catch that and try again after 500ms
  const tryCall = async (params: MetaletParams, retry = 0) => {
    try {
      const response = await browser.runtime.sendMessage(params)

      if (response?.channel === 'from-metadiskwallet') {
        // post on console
        console.log(`🚀 Reponse from Metalet on action ${response.action} 🚀`)
        console.log(response?.res)

        window.postMessage(response, '*')
      }
    } catch (e: any) {
      if (!e.message.includes('Could not establish connection.') && params.action.includes('query')) {
        throw e
      }

      if (retry < 3) {
        setTimeout(async () => {
          await tryCall(params, retry + 1)
        }, 1000)
      }
    }
  }

  await tryCall(params)
}

window.addEventListener(
  'message',
  async (event) => {
    // We only accept messages from ourselves
    if (event.source !== window || event.data?.channel !== 'to-metadiskwallet') {
      return
    }

    await callMetalet(event.data)

    return true
  },
  false
)

const node = document.getElementsByTagName('body')[0]
const script = document.createElement('script')
script.setAttribute('type', 'text/javascript')
script.setAttribute('src', browser.runtime.getURL('content.js'))
node.appendChild(script)

console.log('Metalet is ready. Happy coding! 🎉')
