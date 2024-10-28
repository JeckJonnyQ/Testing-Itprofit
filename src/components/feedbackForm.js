export const FeedbackForm = {
  render: () => {
    return `
    <form class=form id="form">
        <label for="name">Имя</label>
        <input type="text" class="form__name" id="name" name="name">
        <p class="form__name-error hidden" id="nameError">asdadada</p>

        <label for="email">E-mail</label>
        <input type="email" class="form__email" id="email" name="email">
        <p class="form__email-error hidden" id="emailError"></p>

        <label for="phone">Телефон</label>
        <input type="text" class="form__phone" id="phone" name="phone" placeholder="+375">
        <p class="form__phone-error hidden" id="phoneError"></p>

        <label for="message">Сообщение</label>
        <textarea class="form__textarea" id="message" name="message"></textarea>
        <p class="form__textarea-error hidden" id="messageError"></p>

        <button type="submit" class="form__sub-btn">Отправить</button>
    </form>
`;
  },
};
