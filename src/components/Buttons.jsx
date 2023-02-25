import refresh from "../images/refresh.png";

function Buttons(){
    return(
        <div className="buttons">
            <button className="button-plus counter">
                +
            </button>
            <button className="button-refresh counter">
                <img src={refresh} alt="" />
            </button>
            <button className="button-minus counter">
                -
            </button>
        </div>
    )
}

export default Buttons;