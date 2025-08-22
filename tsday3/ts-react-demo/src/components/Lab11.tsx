import { useRef, useState } from "react";

export default function Lab11() {
  const [time, setTime] = useState<number>(0);
  const timerRef = useRef<number | null>(null);

  const start = () => {
    if (timerRef.current !== null) return;
    timerRef.current = setInterval(() => {
      setTime((t) => t + 1);
      //   const t = time + 1;
      //   console.log(t);
      //   setTime(t);
    }, 1000);
    // console.log(timerRef.current);
    //
  };
  // TODO: setInterval แล้วเก็บ id ใน timerRef.current

  const stop = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };
  // TODO: clearInterval จาก timerRef.current

  const reset = () => {
    setTime(0);
  };
  // TODO: setTime(0)

  return (
    <div>
      <h3>{time}s</h3>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
