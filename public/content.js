const m = (n = 32) => {
  let e = "";
  const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let r = 0; r < n; r++)
    e += a.charAt(Math.floor(Math.random() * a.length));
  return e;
};
async function t(n, e = "authorize", a) {
  const r = `${e}-${n}`, w = m(16), l = window.location.host;
  window.postMessage(
    {
      nonce: w,
      channel: "to-metadiskwallet",
      action: r,
      host: l,
      icon: "",
      params: a || {}
    },
    "*"
  );
  const h = (c) => {
    const o = (i) => {
      if (!(i.source !== window || i.data?.channel !== "from-metadiskwallet")) {
        if (i.data?.nonce === w) {
          if (window.removeEventListener("message", o), i.data?.res?.error)
            throw new Error(i.data.res.error);
          c && typeof c == "function" && c(i.data);
        }
        return !0;
      }
    };
    window.addEventListener("message", o);
  };
  return await new Promise((c) => {
    h((o) => {
      c(o.res);
    });
  });
}
async function s() {
  return await t("Connect");
}
async function y() {
  return await t("Disconnect");
}
async function T() {
  return await t("IsConnected", "query");
}
async function B() {
  return await t("GetNetwork", "query");
}
async function b() {
  return await t("SwitchNetwork");
}
async function q(n) {
  return await t("GetAddress", "query", n);
}
async function E(n) {
  return await t("GetPublicKey", "query", n);
}
async function G() {
  return await t("GetXPublicKey", "query");
}
async function g(n) {
  return await t("GetBalance", "query", n);
}
async function S(n) {
  return await t("GetUtxos", "query", n);
}
async function P(n) {
  return await t("EciesEncrypt", "authorize", n);
}
async function k(n) {
  return await t("EciesDecrypt", "authorize", n);
}
async function p(n) {
  return await t("SignMessage", "authorize", n);
}
async function z(n) {
  return await t("VerifySignature", "query", n);
}
async function A(n) {
  return await t("PreviewTransaction", "query", n);
}
async function C(n) {
  return await t("SignTransaction", "authorize", n);
}
async function M(n) {
  return await t("SignTransactionEx", "authorize", n);
}
async function x(n) {
  return await t("Transfer", "authorize", n);
}
async function K(n) {
  return await t("Merge", "authorize", n);
}
async function f(n) {
  return await t("GetTokenBalance", "query", n);
}
const d = {
  query: [
    { name: "getBalance", action: "GetBTCBalance" },
    { name: "getAddress", action: "GetBTCAddress" },
    { name: "getPublicKey", action: "GetBTCPublicKey" },
    { name: "getUtxos", action: "GetBTCUtxos" }
  ],
  authorize: [
    { name: "signPsbt", action: "SignBTCPsbt" },
    { name: "signMessage", action: "SignBTCMessage" }
  ]
}, u = {
  connect: s,
  isConnected: T,
  disconnect: y,
  getNetwork: B,
  switchNetwork: b,
  getAddress: q,
  getPublicKey: E,
  getXPublicKey: G,
  getBalance: g,
  getUtxos: S,
  transfer: x,
  merge: K,
  previewTransaction: A,
  signTransaction: C,
  signTransactionEx: M,
  signMessage: p,
  verifySignature: z,
  eciesEncrypt: P,
  eciesDecrypt: k,
  // signTransaction,
  // transferAll,
  token: {
    getBalance: f
  },
  nft: {},
  btc: {},
  // btc: {
  //   getBalance: () => {},
  //   getAddress: () => {},
  //   getPublicKey: () => {},
  //   getUtxos: () => {},
  // },
  // Deprecating
  requestAccount: s,
  getAccount: s,
  exitAccount: y,
  getMvcBalance: g,
  getSensibleFtBalance: f
};
Object.keys(d).forEach((n) => {
  const e = n;
  d[e].forEach((a) => {
    u.btc[a.name] = async (r) => await t(a.action, e, r);
  });
});
window.metaidwallet = u;
window.metadiskwallet = u;
