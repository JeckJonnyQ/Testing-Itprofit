export function openModal() {
  const modal = document.querySelector(".modal");
  const modalOverlay = document.querySelector(".modal-overlay");

  if (modal && modalOverlay) {
    modal.classList.add("active");
    modalOverlay.classList.add("active");
    document.body.className = "no-skroll-modal";
  }
}

export function closeModal() {
  const modal = document.querySelector(".modal");
  const modalOverlay = document.querySelector(".modal-overlay");

  if (modal && modalOverlay) {
    modal.classList.remove("active");
    modalOverlay.classList.remove("active");
    document.body.className = "";
  }
}
