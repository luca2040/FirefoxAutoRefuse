function checkWindow() {
  const overlayDiv = document.evaluate('/html/body/div[2]/div[3]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  const refuseButton = document.getElementById("W0wltc");

  if (overlayDiv && refuseButton) {
    refuseButton.click();
    observer.disconnect();
  }
}

const observer = new MutationObserver(() => {
  checkWindow();
});

observer.observe(document.body, { childList: true, subtree: true });

checkWindow();
