import { ref } from 'vue';

export const useTypingAnimation = (text: string, speed: number = 100) => {
  const displayedText = ref('');

  const startTyping = (): Promise<void> =>
    new Promise((resolve) => {
      let index = 0;
      const timer = setInterval(() => {
        if (index < text.length) {
          displayedText.value += text[index];
          index++;
        } else {
          clearInterval(timer);
          resolve();
        }
      }, speed);
    });

  return { displayedText, startTyping };
};
