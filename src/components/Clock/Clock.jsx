import { useState } from "react";
import { ClockStyle } from "../../styles/Clock/ClockStyle";

export const Clock = () => {
  const [time, setTime] = useState(new Date());
  setInterval(() => setTime(new Date()), 1000);

  return (
    <>
      <ClockStyle>
        {time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}
      </ClockStyle>
    </>
  );
};
