setInterval(() => {
  console.log('%cSearching for popup...', 'color: #6EB8FF');
  const backdrop = document.querySelector('tp-yt-iron-overlay-backdrop');
  if (backdrop) {
    console.log('%cBackdrop found and removed !', 'color: #75FF6E');
    backdrop.remove();
  }
  const popup = document.querySelector('tp-yt-paper-dialog');
  if (popup) {
    console.log('%cBackdrop found and removed !', 'color: #75FF6E');
    popup.remove();
  }
}, 1000);
