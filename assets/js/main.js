var popupModal,
    popupBackground,
    popupWindow,
    popupTopBar,
    popupHeading,
    popupCloseBtn,
    popupContent;

popupModal = document.createElement("div");
popupBackground = document.createElement("div");
popupWindow = document.createElement("div");
popupTopBar = document.createElement("div");
popupHeading = document.createElement("div");
popupCloseBtn = document.createElement("div");
popupContent = document.createElement("div");

popupModal.setAttribute("class", "popup-modal");
popupBackground.setAttribute("class", "popup-background");
popupWindow.setAttribute("class", "popup-window");
popupTopBar.setAttribute("class", "popup-top-bar");
popupHeading.setAttribute("class", "popup-heading");
popupCloseBtn.setAttribute("class", "close-btn");
popupContent.setAttribute("class", "popup-content");

popupModal.appendChild(popupBackground);
popupModal.appendChild(popupWindow);

popupWindow.appendChild(popupTopBar);
popupWindow.appendChild(popupContent);

popupTopBar.appendChild(popupHeading);
popupTopBar.appendChild(popupCloseBtn);

popupCloseBtn.innerHTML = "X";
popupCloseBtn.onclick = closeModal;

var headingEn = "RSS Feed";
var contentEn = "Copy this feed address into your RSS reader:" +
                "<br>" +
                "<input type=\"text\" readonly=\"true\" value=\"https://vladimirmarkovic86.github.io/feeds.xml\" class=\"rss-feed\" >";

var headingRs = "RSS вести";
var contentRs = "Копирајте ову адресу у свој RSS читач:" +
                "<br>" +
                "<input type=\"text\" readonly=\"true\" value=\"https://vladimirmarkovic86.github.io/rs/feeds.xml\" class=\"rss-feed\" >";

function openModal(language) {
  if(language === "en") {
    popupHeading.innerHTML = headingEn;
    popupContent.innerHTML = contentEn;
  }
  if(language === "rs") {
    popupHeading.innerHTML = headingRs;
    popupContent.innerHTML = contentRs;
  }
  var bodyEl = document.querySelector("body");
  bodyEl.appendChild(popupModal);
}
function closeModal() {
  var popupModal = document.querySelector("div.popup-modal");
  var parentPopupModal = popupModal.parentNode;
  parentPopupModal.removeChild(popupModal);
}
function openModalEn() {
  openModal("en");
}
function openModalRs() {
  openModal("rs");
}

