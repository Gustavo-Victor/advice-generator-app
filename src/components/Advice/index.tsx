import { AdviceProps } from "../../types/advise";
import dice from "../../images/icon-dice.svg";
import diviserDesktop from "../../images/pattern-divider-desktop.svg";
import diviserMobile from "../../images/pattern-divider-mobile.svg";
import "./style.scss";


function Advice({id, advice, getData} : AdviceProps) {
    return (
        <>
            <h2 className="title">Advice #{id}</h2>
            <p className='content'>{advice}</p>

            <img src={diviserDesktop} alt="diviser-desktop" className='diviser desktop' />
            <img src={diviserMobile} alt="diviser-mobile" className='diviser mobile' />

            <button className='btn-advise'>
                <img src={dice} alt='icon-dice' className='btn-icon' onClick={getData} />
            </button>
        </>
    )
}

export default Advice;