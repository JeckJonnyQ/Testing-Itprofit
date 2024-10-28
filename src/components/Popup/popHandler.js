export default function showPopup(status, message) {
  const popupMessage = document.querySelector(".message__text");
  const popup = document.querySelector(".message");

  if (status === "success") {
    popupMessage.innerHTML = `${message}`;
    popupMessage.classList.add("success");
  } else {
    popupMessage.innerHTML = `Ошибка при регистрации ${message}`;
    popupMessage.classList.add("error");
  }

  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
    popupMessage.innerHTML = "";
    popupMessage.classList.remove("success", "error");
  }, 2000);
}
