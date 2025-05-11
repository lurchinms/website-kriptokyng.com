import { CountdownCircleTimer } from "react-countdown-circle-timer";

export function RefreshTimer({ time, onComplete }) {
  const theme = document.body.classList.contains("dark") ? "dark" : "light";

  const children = (remainingTime) => {
    if (remainingTime === 0) {
      return <div className={`timer-text ${theme}`}>↻</div>;
    }

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return (
      <div className={`timer-text ${theme}`}>
        <div className="timer-minutes">{minutes || seconds}</div>
        <div
          className={`timer-label ${minutes ? "minutes-label" : ""}`}
          style={minutes ? { color: "yellow" } : {}}
        >
          {minutes ? "minutes" : "seconds"}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`countdown-timer ${
        theme === "dark" ? "dark-mode" : "light-mode"
      }`}
    >
      <CountdownCircleTimer
        isPlaying
        duration={time}
        colors={"#FF9500"}
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
