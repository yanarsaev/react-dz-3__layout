import refresh from "../images/refresh.png";

function Buttons(){
    return(
        <div className="buttons">
            <button className="button-1">
                +
            </button>
            <button className="button-2">
                <img src={refresh} alt="" />
            </button>
            <button className="button-3">
                -
            </button>
        </div>
    )
}

export default Buttons;