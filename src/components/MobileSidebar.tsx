import Icon from "./Icon";
import person from "../assets/svg/person.svg";
import grid from "../assets/svg/grid.svg";
import checkbox from "../assets/svg/checkbox.svg";
import info from '../assets/svg/info.svg';

const MobileSidebar = () => {

    const handleCloseSidebar = () => {
        const sidebar = document.getElementById("sidebar-sm");
        if (sidebar) {
            sidebar.style.width = "0px"
        }
    };

 return (
    <>
        {/* Sidebar for small screens */}
        <div className="sidebar-sm" id="sidebar-sm">
            <div className="sidebar-logo-container">
                <img src="/logo.svg" alt="Logo" className='logo' />
                <button className="btn btn-link m-0 p-0 text-white float-end fs-3" 
                    onClick={handleCloseSidebar} aria-label="Close sidebar menu"
                    title="Close sidebar menu"
                >
                    <i className="fa fa-angle-double-left"></i>
                </button>
            </div>
            {/* Sidebar Menu for small screens */}
            <div className="sidebar-menu">
                <div className="sidebar-menu-item d-flex align-items-center" 
                    role="button" aria-label="Go to Membership" title="Go to Membership"
                    tabIndex={0}
                >
                    <Icon path={person} alt="membership" classname="sidebar-icon"/>
                    <span className="sidebar-sm-menu-text">Membership</span>
                </div>
                <div className="sidebar-menu-item d-flex align-items-center"
                    role="button" aria-label="Go to Dashboard" title="Go to Dashboard"
                    tabIndex={0}
                >
                    <Icon path={grid} alt="dashboard" classname="sidebar-icon"/>
                    <span className="sidebar-sm-menu-text">Dashboard</span>
                </div>
                <div className="sidebar-menu-item d-flex align-items-center"
                    role="button" aria-label="Go to Orders" title="Go to Orders"
                    tabIndex={0}
                >
                    <Icon path={checkbox} alt="orders" classname="sidebar-icon"/>
                    <span className="sidebar-sm-menu-text">Orders</span>
                </div>
                <div className="sidebar-menu-item d-flex align-items-center"
                    role="button" aria-label="Go to Help" title="Go to Help"
                    tabIndex={0}
                >
                    <Icon path={info} alt="help" classname="sidebar-icon"/>
                    <span className="sidebar-sm-menu-text">Help</span>
                </div>
            </div>
        </div>
    </>
 )
}

export default MobileSidebar;
