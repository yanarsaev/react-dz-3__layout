import refresh from "../images/refresh.png";

function Buttons({counter, SetCounter}){
    function plus(){
        SetCounter(counter + 3)
    }
    function minus(){
        SetCounter(counter - 2)
        if (counter - 2 <= 0){
            return SetCounter(0);
        }
    }
    function reset(){
        SetCounter(0)
    }


    return(
        <div className="buttons">
            <button className="button-plus counter" onClick={plus}>
                +
            </button>
            <button className="button-refresh counter" onClick={reset}>
                <img src={refresh} alt="" />
            </button>
            <button className="button-minus counter" onClick={minus}>
                -
            </button>
        </div>
    )
}

export default Buttons;