(function () {
  var CHANNELS = [
  { icon: 'assets/chat/zalo.png', label: 'Zalo', href: 'https://zalo.me/274561787007673893', alt: 'Zalo' },
  { icon: 'assets/chat/whatsapp.png', label: "What'sapp", href: 'https://wa.me/84936856161', alt: 'WhatsApp' },
  { icon: 'assets/chat/line.png', label: 'Line', href: 'https://line.me/R/ti/p/@yourlineid', alt: 'Line' },
  { icon: 'assets/chat/wechat.png', label: 'Wechat', href: 'weixin://dl/chat?username=yourwechatid', alt: 'WeChat' },
  { icon: 'assets/chat/kakaotalk.png', label: 'Kakaotalk', href: 'https://pf.kakao.com/_yourid', alt: 'KakaoTalk' }
  ];

  function channelItem(channel) {
    return (
      '<a class="chat-widget__item" href="' + channel.href + '" target="_blank" rel="noopener noreferrer">' +
      '<img class="chat-widget__item-icon" src="' + channel.icon + '" alt="' + channel.alt + '" width="38" height="38">' +
      '<span class="chat-widget__item-text">' +
      '<span class="chat-widget__item-label">' + channel.label + '</span>' +
      '<span class="chat-widget__item-link">' + channel.href + '</span>' +
      '</span>' +
      '</a>'
    );
  }

  function buildPanel(id) {
    return (
      '<aside class="chat-widget__panel" id="' + id + '" aria-hidden="true" hidden>' +
      '<div class="chat-widget__header">' +
      '<p class="chat-widget__title">Nhận tư vấn từ Tomoe Vietnam</p>' +
      '<button type="button" class="chat-widget__close" aria-label="Đóng">' +
      '<img src="assets/chat/close.svg" alt="" width="24" height="24">' +
      '</button>' +
      '</div>' +
      '<div class="chat-widget__body">' + CHANNELS.map(channelItem).join('') + '</div>' +
      '</aside>'
    );
  }

  function setOpen(widget, open) {
    var panel = widget.querySelector('.chat-widget__panel');
    var fab = widget.querySelector('.chat-fab');
    if (!panel || !fab) return;

    panel.hidden = !open;
    panel.setAttribute('aria-hidden', open ? 'false' : 'true');
    fab.setAttribute('aria-expanded', open ? 'true' : 'false');
    widget.classList.toggle('chat-widget--open', open);
  }

  function initFab(fab) {
    var panelId = 'chatWidgetPanel';
    var widget = document.createElement('div');
    widget.className = 'chat-widget';
    fab.parentNode.insertBefore(widget, fab);

    if (fab.tagName === 'A') {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = fab.className;
      btn.setAttribute('aria-label', fab.getAttribute('aria-label') || 'Liên hệ nhanh');
      btn.innerHTML = fab.innerHTML;
      fab.replaceWith(btn);
      fab = btn;
    } else if (!fab.getAttribute('type')) {
      fab.setAttribute('type', 'button');
    }

    widget.appendChild(fab);
    widget.insertAdjacentHTML('afterbegin', buildPanel(panelId));

    fab.setAttribute('aria-controls', panelId);
    fab.setAttribute('aria-expanded', 'false');
    fab.setAttribute('aria-haspopup', 'dialog');

    var closeBtn = widget.querySelector('.chat-widget__close');

    fab.addEventListener('click', function (e) {
      e.preventDefault();
      setOpen(widget, !widget.classList.contains('chat-widget--open'));
    });

    closeBtn.addEventListener('click', function () {
      setOpen(widget, false);
    });

    document.addEventListener('click', function (e) {
      if (!widget.classList.contains('chat-widget--open')) return;
      if (!widget.contains(e.target)) setOpen(widget, false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && widget.classList.contains('chat-widget--open')) {
        setOpen(widget, false);
        fab.focus();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.chat-fab').forEach(initFab);
  });
})();
