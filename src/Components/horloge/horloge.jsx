import { useEffect, useState } from "react";

const Horloge = () => {
  // Alternativer à ma method faite pr Aurelien
  const [hour, setHour] = useState(new Date().getHours());
  const [minute, setMinute] = useState(new Date().getMinutes());
  const [second, setSecond] = useState(new Date().getSeconds());

  useEffect(() => {
    const timerId = setInterval(() => {
      console.log("Donnée avant nettoyage"); //=> Si on met un log ici ça declenche en boucle le useEffect
      setHour(new Date().getHours());
      setMinute(new Date().getMinutes());
      setSecond(new Date().getSeconds());
    }, 200);
    return () => {
      clearInterval(timerId);
      console.log("Donnée après nettoyage");
    };
  }, []);

  return (
    <>
      <h3>
        {hour} : {minute > 9 ? minute : "0" + minute} :{" "}
        {second > 9 ? second : "0" + second}
      </h3>
    </>
  );
};

export default Horloge;
