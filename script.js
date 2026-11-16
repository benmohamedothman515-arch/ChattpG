
const translations = {
  fr: {
    welcome: "Bonjour ! Je suis ChattpG.",
    placeholder: "Écrivez votre message...",
    send: "Envoyer"
  },
  en: {
    welcome: "Hello! I am ChattpG.",
    placeholder: "Write your message...",
    send: "Send"
  },
  ar: {
    welcome: "مرحباً! أنا ChattpG.",
    placeholder: "اكتب رسالتك هنا...",
    send: "إرسال"
  }
};

const language = navigator.language.startsWith("ar")
  ? "ar"
  : navigator.language.startsWith("fr")
  ? "fr"
  : "en";

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input");
  const button = document.querySelector("button");

  if (input) {
    input.placeholder = translations[language].placeholder;
  }

  if (button) {
    button.textContent = translations[language].send;
  }

  console.log(translations[language].welcome);
});
