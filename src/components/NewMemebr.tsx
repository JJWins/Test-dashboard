import Icon from "./Icon";
import login from "../assets/svg/login.svg";
import infoCard from "../assets/svg/info-card.svg";
import checked from "../assets/svg/checked.svg";
import money from "../assets/svg/money.svg";
import circleTick from "../assets/svg/circle-tick.svg";

const NewMember = () => {
    return (
        <>
            {/* New Member section for large screens */}
            <p className="section-header d-md-flex d-none">How to be a member</p>
            <div className="card member-card d-md-flex d-none flex-row align-items-center justify-content-between" role="group">
                <div className="icon-container">
                    <Icon path={login} alt="Login/SignUp" size={72} classname="icon-bg p-4" />
                    <p className="mt-1">Login or Signup</p>
                </div>
                <span className="dashed-line"></span>
                <div className="icon-container">
                    <Icon path={infoCard} alt="Login/SignUp" size={72} classname="icon-bg p-4" />
                    <p className="mt-1">Membership in profile</p>
                </div>
                <span className="dashed-line"></span>
                <div className="icon-container">
                    <Icon path={checked} alt="Login/SignUp" size={72} classname="icon-bg p-4" />
                    <p className="mt-1">Select a Subscription</p>
                </div>
                <span className="dashed-line"></span>
                <div className="icon-container">
                    <Icon path={money} alt="Login/SignUp" size={72} classname="icon-bg p-4" />
                    <p className="mt-1">Pay the Bill</p>
                </div>
                <span className="dashed-line"></span>
                <div className="icon-container">
                    <Icon path={circleTick} alt="Login/SignUp" size={72} classname="icon-bg p-4" />
                    <p className="mt-1">Get the Membership</p>
                </div>
            </div>
            {/* New Member section for small screens */}
            <div className="card member-card-sm d-md-none d-flex" role="group">
                <div className="icon-container">
                    <Icon path={login} alt="Login/SignUp" size={72} classname="icon-bg p-4" />
                    <span className="mt-1">Login or Signup</span>
                </div>
                <span className="dashed-line"></span>
                <div className="icon-container">
                    <Icon path={infoCard} alt="Login/SignUp" size={72} classname="icon-bg p-4" />
                    <span className="mt-1">Membership in profile</span>
                </div>
                <span className="dashed-line"></span>
                <div className="icon-container">
                    <Icon path={checked} alt="Login/SignUp" size={72} classname="icon-bg p-4" />
                    <span className="mt-1">Select a Subscription</span>
                </div>
                <span className="dashed-line"></span>
                <div className="icon-container">
                    <Icon path={money} alt="Login/SignUp" size={72} classname="icon-bg p-4" />
                    <span className="mt-1">Pay the Bill</span>
                </div>
                <span className="dashed-line"></span>
                <div className="icon-container">
                    <Icon path={circleTick} alt="Login/SignUp" size={72} classname="icon-bg p-4" />
                    <span className="mt-1">Get the Membership</span>
                </div>
            </div>
        </>
    )
}

export default NewMember;
