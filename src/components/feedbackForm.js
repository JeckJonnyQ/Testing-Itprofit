export const FeedbackForm = {
  render: () => {
    return `
    <form class=form id="form">
        <label for="name">Имя</label>
        <input type="text" class="form__name" id="name" name="name" required>
        <p class="form__name-error hidden" id="nameError">asdadada</p>

        <label for="email">E-mail</label>
        <input type="email" class="form__email" id="email" name="email" required>
        <p class="form__email-error hidden" id="emailError">asdadada</p>

        <label for="phone">Телефон</label>
        <input type="text" class="form__phone" id="phone" name="phone" required>
        <p class="form__phone-error hidden" id="phoneError">asdadada</p>

        <label for="message">Сообщение</label>
        <textarea class="form__textarea" id="message" name="message" required></textarea>
        <p class="form__textarea-error hidden" id="messageError">Неправильно ввели имя</p>

        <button type="submit" class="form__sub-btn">Отправить</button>
    </form>
`;
  },
};
