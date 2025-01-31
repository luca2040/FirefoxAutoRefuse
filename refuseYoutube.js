function checkWindow() {
  const refuseButton = document.evaluate(
    '/html/body/ytd-app/ytd-consent-bump-v2-lightbox/tp-yt-paper-dialog/div[4]/div[2]/div[6]/div[1]/ytd-button-renderer[1]/yt-button-shape/button',
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

  if (refuseButton) {
    refuseButton.click();
    observer.disconnect();
  }
}

const observer = new MutationObserver(() => {
  checkWindow();
});

observer.observe(document.body, { childList: true, subtree: true });

checkWindow();
