import Icon from "./Icon";
import goldCoin from "../assets/svg/gold-coin.svg";
import silverCoin from "../assets/svg/silver-coin.svg";
import bronzeCoin from "../assets/svg/bronze-coin.svg";
import like from "../assets/svg/like.svg";
import shoppingBag from "../assets/svg/shopping-bag.svg";
import img from "../assets/image.png";

const Navbar = () => {
    return (
        <>
            <nav className='row nav' role="navigation" aria-label="Main navigation" title="Main navigation">
                <div className="col-4">
                    <p className='nav-header'>Hi, John!</p>
                </div>
                {/* Product Search */}
                <div className="col-3">
                    <div className="input-wrapper mt-1">
                        <i className="fa fa-search nav-search-icon" aria-hidden="true"></i>
                        <input className='nav-search' type="input" placeholder="Search for products, brands and more" 
                            aria-label="Product search" title="Product search" role="search"
                        />
                    </div>
                </div>
                <div className="col-5 nav-right" role="group" aria-label="User account and score" title="User account and score">
                    {/* Score section */}
                    <div className="nav-score" aria-label="GT score" title="GT score">
                        <p className="score-label">GT Score</p>
                        <p className="score-points">1534</p>
                    </div>
                    <div className="nav-coins me-4" aria-label="Coin balance" title="Coin balance">
                        <div className="coin-container">
                            <Icon path={goldCoin} alt="gold-icon" ></Icon>
                            <p>01</p>
                        </div>
                        <div className="coin-container">
                            <Icon path={silverCoin} alt="silver-icon" ></Icon>
                            <p>03</p>
                        </div>
                        <div className="coin-container">
                            <Icon path={bronzeCoin} alt="bronze-icon" ></Icon>
                            <p>06</p>
                        </div>
                    </div>
                    {/* Wishlist and Cart section */}
                    <button className="btn p-0 m-0 border-0 bg-transparent h-40"
                        aria-label="Go to Wishlist" title="Go to Wishlist"
                    >
                        <Icon path={like} alt="wishlist" />
                    </button>
                    <button className="btn p-0 m-0 border-0 bg-transparent h-32"
                        aria-label="Go to Wishlist" title="Go to Wishlist"
                    >
                        <span className="redDot"></span>
                        <Icon path={shoppingBag} alt="cart" classname="mt-2" />
                    </button>

                    <div className="divider"></div>

                    {/* Profile section */}
                    <div className="profile-img">
                        <img src={img} alt="profile" className="profile-img" />
                    </div>
                    <div className="name-container mt-2 pointer" role="button" 
                        tabIndex={0} aria-label="User profile" title="User profile"
                    >
                        <span className="profile-name me-2">John Paul</span>
                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
