import LearnMore from "../components/LearnMore";
import MobileNav from "../components/MobileNav";
import Navbar from "../components/Navbar";
import NewMember from "../components/NewMemebr";
import Shoes from "../components/Shoes";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
    return (
        <>
        <div className="container-fluid">
            {/* Sidebar for large screen */}
            <div className="d-xl-block d-none">
                <Sidebar />
            </div>
            <div className="left-offset">
                {/* Navbar */}
                <div className="d-xl-block d-none">
                    <Navbar />
                </div>
                <div className="d-block d-xl-none">
                    <MobileNav />
                </div>
                {/* Dasboard Body */}
                <div className="row body-offset my-0 py-0">
                    <div className="col-xl-9 col-12 py-4 pe-3">
                        <NewMember />
                        <div className="my-5">
                            <Shoes />
                        </div>
                    </div>
                    <div className="col-xl-3 col-12 ps-4 py-4 left-border">
                        <LearnMore />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;
