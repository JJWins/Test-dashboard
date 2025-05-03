import learnMore from '../assets/learn-more.png';

const LearnMore = () => {
    return (
        <>
            <p className="mb-0 fw-bold">Get the Membership & </p>
            <p className="fw-bold">Never Pay Full Price Again</p>
            <div className="card border-0 learn-more-card" role='region' aria-label='Membership Benefits' title='Membership Benefits'>
                <img src={learnMore} alt="Learn More" className='learn-more-img card-img-top img-fluid'/>
                <p className='fw-bold fs-5 py-3 px-3 mb-0'>Benefits</p>
                <div className='px-3 mb-0'>
                    <span style={{ color: '#FFD700', fontSize: '20px' }} aria-hidden="true">{'★'}</span> 
                    <span className='fw-bold ps-2'>Member Only Discounts</span>
                    <div className='ps-4 pe-3 fs-14 mt-1 mb-3'>Save on every purchase! Enjoy special prices on a wide range of product categories</div>    
                </div>
                <div className='px-3 mb-0'>
                    <span style={{ color: '#FFD700', fontSize: '20px' }} aria-hidden="true">{'★'}</span>
                    <span className='fw-bold ps-2'>Priority Support</span>
                    <div className='ps-4 pe-3 fs-14 mt-1 mb-3'>Get all your queries resolved on a priority basis, only for TriBe members</div>
                </div>
                <div className='px-3 mb-0'>
                    <span style={{ color: '#FFD700', fontSize: '20px' }} aria-hidden="true">{'★'}</span>
                    <span className='fw-bold ps-2'>Early Access to Collections</span>
                    <div className='ps-4 pe-3 fs-14 mt-1'>Grab the latest products and exclusive collections before everyone else</div>
                </div>
                <a className='px-3 mt-5 mb-3 text-decoration-none' role='link'>Learn More</a>
            </div>
        </>
    )
}

export default LearnMore;
