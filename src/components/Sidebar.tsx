import Icon from "./Icon";
import person from "../assets/svg/person.svg";
import grid from "../assets/svg/grid.svg";
import checkbox from "../assets/svg/checkbox.svg";
import info from '../assets/svg/info.svg';

const Sidebar = () => {
 return (
    <>
        {/* Sidebar for large screens */}
        <div className="sidebar" id="sidebar">
            <div className="sidebar-logo-container">
                <img src="/logo.svg" alt="Logo" className='logo' />
            </div>
            <div className="sidebar-menu">
                <div className="sidebar-menu-item d-flex align-items-center"
                    aria-label="Go to Membership" title="Go to Membership"
                    role="button" tabIndex={0}
                >
                    <Icon path={person} alt="membership" classname="sidebar-icon"/>
                    <span className="sidebar-menu-text">Membership</span>
                </div>
                <div className="sidebar-menu-item d-flex align-items-center"
                    aria-label="Go to Dashboard" title="Go to Dashboard"
                    role="button" tabIndex={0}
                >
                    <Icon path={grid} alt="dashboard" classname="sidebar-icon"/>
                    <span className="sidebar-menu-text">Dashboard</span>
                </div>
                <div className="sidebar-menu-item d-flex align-items-center"
                    aria-label="Go to Orders" title="Go to Orders"
                    role="button" tabIndex={0}
                >
                    <Icon path={checkbox} alt="orders" classname="sidebar-icon"/>
                    <span className="sidebar-menu-text">Orders</span>
                </div>
                <div className="sidebar-menu-item d-flex align-items-center"
                    aria-label="Go to Help" title="Go to Help"
                    role="button" tabIndex={0}
                >
                    <Icon path={info} alt="help" classname="sidebar-icon"/>
                    <span className="sidebar-menu-text">Help</span>
                </div>
            </div>
        </div>
    </>
 )
}

export default Sidebar;
