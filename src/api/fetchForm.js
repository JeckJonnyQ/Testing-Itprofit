export async function sendForm(formData) {
  try {
    const response = await fetch("http://localhost:9090/api/registration", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorMsg = await response.json();
      return errorMsg;
    }

    return {
      status: "success",
      message: "You are registered",
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
