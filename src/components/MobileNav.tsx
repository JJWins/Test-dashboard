import Icon from "./Icon";
import goldCoin from "../assets/svg/gold-coin.svg";
import silverCoin from "../assets/svg/silver-coin.svg";
import bronzeCoin from "../assets/svg/bronze-coin.svg";
import like from "../assets/svg/like.svg";
import shoppingBag from "../assets/svg/shopping-bag.svg";
import img from "../assets/image.png";
import MobileSidebar from "./MobileSidebar";

const MobileNav = () => {

    const handleSidebarToggle = () => {
        const sidebar = document.getElementById("sidebar-sm");
        console.log('sidebar', sidebar)
        if (sidebar) {
            sidebar.style.width = "250px"
        }
    };

    return (
        <>
            {/* Mobile Sidebar for small screens */}
            <MobileSidebar />
            {/* Mobile Navigation Bar for small screens */}
            <nav className='row nav' role="navigation" 
                aria-label="Main mobile navigation" title="Main mobile navigation"
            >
                <div className="col-4 d-flex align-items-center">
                    <button className="btn btn-link m-0 p-0 text-black" 
                        aria-label="Open sidebar menu" title="Open sidebar menu" 
                        onClick={handleSidebarToggle}
                    >
                        <i className="fa fa-bars fs-4" aria-hidden="true"></i>
                    </button>
                </div>
                <div className="col-8 nav-right">
                    <button className="btn p-0 m-0 border-0 bg-transparent h-40"
                        aria-label="Go to Wishlist" title="Go to Wishlist"
                    >
                        <Icon path={like} alt="wishlist"></Icon>
                    </button>
                    <button className="btn p-0 m-0 border-0 bg-transparent h-40"
                        aria-label="Go to Wishlist" title="Go to Wishlist"
                    >
                        <span className="redDot-sm"></span>
                        <Icon path={shoppingBag} alt="wishlist"></Icon>
                    </button>
                    <div className="divider"></div>
                    <div className="profile-img">
                        <img src={img} alt="profile" className="profile-img" />
                    </div>
                </div>
            </nav>
            {/* Mobile Score Bar for small screens */}
            <div className="row d-flex align-items-center" 
                aria-label="GT score and coin balance" title="GT score and coin balance">
                <div className="col-5 pt-3 mobile-nav-score">
                    <p className="mobile-score-label px-1">
                        <span className="fs-5 me-1 fw-bold">1534</span> GT Score
                    </p>
                </div>
                <div className="col-7">
                <div className="mobile-nav-coins d-flex flex-row justify-content-around">
                        <div className="coin-container" role="group" aria-label="Coin balance" title="Coin balance">
                            <Icon path={goldCoin} alt="gold-icon" ></Icon>
                            <span className="">01</span>
                        </div>
                        <div className="coin-container">
                            <Icon path={silverCoin} alt="silver-icon" ></Icon>
                            <span className="">03</span>
                        </div>
                        <div className="coin-container">
                            <Icon path={bronzeCoin} alt="bronze-icon" ></Icon>
                            <span className="">06</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Search bar for mobile view */}
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <div className="input-wrapper-sm mt-2" role="search" aria-label="Product search">
                    <i className="fa fa-search nav-search-icon" aria-hidden="true"></i>
                    <input className="mobile-nav-search" type="text" placeholder="Search for products, brands and more" />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default MobileNav;
