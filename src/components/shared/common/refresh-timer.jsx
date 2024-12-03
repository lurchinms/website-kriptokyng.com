import { CountdownCircleTimer } from "react-countdown-circle-timer";

export function RefreshTimer({ time, onComplete }) {
  const children = (remainingTime) => {
    if (remainingTime == 0) {
      return `↻`;
    }
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return (
      <div style={{ textAlign: "center", color: "#fff" }}>
        <div style={{ fontSize: 16 }}>{minutes || seconds}</div>
        <div style={{ fontSize: 10 }}>{minutes ? "minutes" : "seconds"}</div>
      </div>
    );
  };
  return (
    <div className="countdown-timer">
      <CountdownCircleTimer
        isPlaying
        duration={time}
        colors={["#F7B801", "#A30000", "#A30000"]}
        colorsTime={[6, 3, 0]}
        size={65}
        strokeWidth={4}
        onComplete={() => {
          onComplete();
          return { shouldRepeat: true, delay: 1.5 };
        }}
      >
        {({ remainingTime }) => children(remainingTime)}
      </CountdownCircleTimer>
    </div>
  );
}
