export async function sendForm(formData) {
  try {
    const response = await fetch("http://localhost:9090/api/registration", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorMsg = await response.json();
      console.log(errorMsg);
      return {
        status: "error",
        fields: {
          inputName: errorMsg.message || "Неизвестная ошибка",
        },
      };
    }

    return {
      status: "success",
      msg: "Вы успешно зарегистрировались",
    };
  } catch {
    return {
      status: "error",
      fields: {
        general: "Ошибка при отправке данных",
      },
    };
  }
}
