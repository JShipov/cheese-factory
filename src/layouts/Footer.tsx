export const Footer = () => {
    return (
        <footer className='footer text-grey'>
            <div className='row'>
                <div className='col-lg-3 mb-3 mb-lg-0'>
                </div>
                <div className='col-lg-2 mb-3 mb-lg-0'>
                    <h6>For Clients</h6>
                    <ul className='footer-item list-unstyled'>
                        <li><a href='#'>How to Start</a></li>
                    </ul>
                </div>
                <div className='col-lg-2 mb-3 mb-lg-0'>
                    <h6>For Freelancers</h6>
                    <ul className='footer-item list-unstyled'>
                        <li><a href='#'>How to Start</a></li>
                    </ul>
                </div>
                <div className='col-lg-2 mb-3 mb-lg-0'>
                    <h6>About us</h6>
                    <ul className='footer-item list-unstyled'>
                        <li><a href='#'>Our mission</a></li>
                    </ul>
                </div>
                <div className='col-lg-3'>
                    <h6>Contact Us</h6>
                    <ul className='social-media list-unstyled'>
                        <li>
                            <a href='#'></a>
                            <a href='#'></a>
                            <a href='#'></a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className='border-light full-line' />
            <div className='row'>
                <div className='col-6'>
                    <p className='footer-text'>&copy; 2023 All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
