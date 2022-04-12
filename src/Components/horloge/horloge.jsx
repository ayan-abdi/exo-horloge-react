import { useEffect, useState } from "react";

const Horloge = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setInterval(() => {
           setCount(p => p + 2 )
        }, 2000)
    }, []);
    
    return(
        <>
        <h2>Il est {count} seconds.</h2>
       
        </>
    )
};

export default Horloge;