
import seriesdata from "../api/seriesdata.json";
import  Seriescard  from "./Seriescard";


  const Netflixseries = () => {
    return (
        <ul className="grid grid-three--cols">
        {seriesdata.map((curElem) => (
         <Seriescard key={curElem.id} data={curElem} />
         
        ))}
        </ul>
    );
};

export default Netflixseries;