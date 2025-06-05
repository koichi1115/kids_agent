// 音声認識
export function startRecognition(onResult: (text: string) => void) {
  const SpeechRecognition =
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("このブラウザは音声認識に対応していません。");
    return;
  }
  const recognition = new SpeechRecognition();
  recognition.lang = "ja-JP";
  recognition.interimResults = false;
  recognition.onresult = (event: any) => {
    onResult(event.results[0][0].transcript);
  };
  recognition.onerror = () => {
    alert("音声認識中にエラーが発生しました。");
  };
  recognition.start();
}

// 音声合成
export function speak(text: string) {
  const synth = window.speechSynthesis;
  if (!synth) {
    alert("このブラウザは音声合成に対応していません。");
    return;
  }
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "ja-JP";
  synth.speak(utter);
}
