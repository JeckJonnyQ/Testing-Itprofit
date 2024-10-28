import "./index.html";
import "./index.scss";
import Inputmask from "inputmask";

import { FeedbackForm } from "./components/feedbackForm";
import { Modal } from "./components/Modal/modal";
import { openModal, closeModal } from "./components/Modal/modalHandlers";

const app = document.getElementById("app");
app.className = "app";

app.innerHTML += Modal.render();
app.innerHTML += FeedbackForm.render();

const phoneInput = document.getElementById("phone");
const im = new Inputmask("+375 (99) 999-99-99");
im.mask(phoneInput);

const modalOverlay = document.querySelector(".modal-overlay");
const openModalBtn = document.querySelector(".modal__show_btn");
const closeModalBtn = document.querySelector(".modal__close_btn");
openModalBtn.addEventListener("click", () => {
  openModal();
});
closeModalBtn.addEventListener("click", () => {
  closeModal();
});
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});
