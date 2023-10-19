const youtubeUrl = 'https://www.youtube.com/';

setInterval(() => {
  if (!window.location.href.startsWith(youtubeUrl))
    return;
  console.log('%cSearching for popup...', 'color: #6EB8FF');
  const backdrop = document.querySelector('tp-yt-iron-overlay-backdrop');
  const popup = document.querySelector('tp-yt-paper-dialog');
  const isAdBlockerPopup = document.querySelector('tp-yt-paper-dialog > ytd-enforcement-message-view-model > div');

  if (popup && isAdBlockerPopup) {
    console.log('%cPopup found and removed !', 'color: #75FF6E');
    popup.remove();

    if (backdrop) {
      console.log('%cBackdrop found and removed !', 'color: #75FF6E');
      backdrop.style.display = 'none';
    }

    const playerButton = document.querySelector('#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > button');
    if (playerButton) {
      console.log('%cPlayer button found and clicked !', 'color: #75FF6E');
      playerButton.click();
    }
  }
}, 1000);
