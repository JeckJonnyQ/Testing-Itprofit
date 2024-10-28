import "./index.html";
import "./index.scss";
import Inputmask from "inputmask";

import { FeedbackForm } from "./components/feedbackForm";
import { Modal } from "./components/Modal/modal";
import { openModal, closeModal } from "./components/Modal/modalHandlers";
import { validateForm } from "./components/validateForm";

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

const submitBtn = document.querySelector(".form__sub-btn");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const isValid = validateForm(form);

  console.log("Форма успешно отправлена!");

  if (isValid) {
    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.value = "";
    });
  }
});
