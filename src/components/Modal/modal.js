export const Modal = {
  render: () => {
    return `
    <div class="modal-overlay hidden" id="modal-overlay"></div>
    <div class="modal id="modal">
        <h2 class="modal__title">Модальное окно</h2>
        <p class="modal__description">Произвольный текст для модального окна.</p>
        <button class="modal__close_btn btn"">Close</button>
      </div>
    <div class="modal__show">
      <button class="modal__show_btn btn">Show Modal</button>
    <div/>
  `;
  },
};
