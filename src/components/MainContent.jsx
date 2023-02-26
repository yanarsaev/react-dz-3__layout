import Number from "./Number";
import Buttons from './Buttons';
import { useState } from "react";

function MainContent(){
    const [counter, SetCounter] = useState(0);
    return(
        <div className="main-content">
            <Number counter={counter}/>
            <Buttons counter={counter} SetCounter={SetCounter}/>
        </div>
    )
}
export default MainContent;