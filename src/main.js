const $ = (sel, ctx = document) => ctx.querySelector(sel);

const routes = {
  default: {
    h1: `Free P2P File Sharing - Browser-Based Secure Transfer`,
    title: `Free P2P File Sharing - Browser-Based Secure Transfer`,
    desc: `Share files peer-to-peer directly between browsers using WebRTC. No uploads, no sign-up, end-to-end connection. Large files split into chunks automatically.`,
    keywords: 'P2P file sharing browser, WebRTC file transfer, browser to browser file sharing, secure peer to peer file transfer, no upload file sharing'
  }
};

function applyRoute(route) {
  const r = routes[route];
  if (!r) return;
  document.title = r.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', r.desc);
  const elTitle = $('#page-title');
  if (elTitle) elTitle.textContent = r.h1;
  const elLead = $('#page-lead');
  if (elLead) elLead.textContent = r.desc;
  const canonical = $('#canonical');
  if (canonical) canonical.setAttribute('href', window.location.origin + window.location.pathname);
}

applyRoute('default');
