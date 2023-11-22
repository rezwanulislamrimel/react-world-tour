import { useState } from "react";

const Country = ({ country }) => {
    const { name, flags, population, area } = country
    
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }



    return (
        <div className={`country  ${visited && 'visited'}`}>
            <h3> Country Name Is:{name.common} </h3>
            <img src={flags.png} alt="" />
            <p>Total Population Are:{population} </p>
            <p>Total Area Are :{area} </p>
            <button onClick={handleVisited}>Visited</button>
           {visited? "i visitedin this country" :"i want to visit in this country"}
        </div>
    );
};

export default Country;