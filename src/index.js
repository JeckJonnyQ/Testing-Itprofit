import "./index.html";
import "./index.scss";

import Inputmask from "inputmask";
import { Form } from "./components/Form/form";
import { Modal } from "./components/Modal/modal";
import { Popup } from "./components/Popup/popmessage";
import { openModal, closeModal } from "./components/Modal/modalHandlers";
import showPopup from "./components/Popup/popHandler";
import { validateForm } from "./components/validateForm";

import { sendForm } from "./api/fetchForm";

const app = document.getElementById("app");
app.className = "app";
app.innerHTML += Modal.render();
app.innerHTML += Form.render();
app.innerHTML += Popup.render();

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

const form = document.getElementById("form");
const submitBtn = document.querySelector(".form__sub-btn");
submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const isValid = validateForm(form);

  if (isValid) {
    const formData = new FormData(form);
    const response = await sendForm(formData);

    if (response.status === "success") {
      showPopup(response.status, response.message);
      console.log(response);
      // form.reset();
    } else {
      showPopup(response.status, response.message);
      console.log(response);
    }
  } else {
    console.log("Пожалуйста, исправьте ошибки в форме.");
  }
});
