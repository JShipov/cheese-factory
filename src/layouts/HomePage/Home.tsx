import React from 'react';
import factoryPhoto from '../../images/factory_photo.jpg';
import { useMediaQuery } from 'react-responsive';

const Home = () => {
    const isMobile = useMediaQuery({
        query: '(max-width: 767px)'
    });

    return (
        <div className='p-5 mb-4 bg-white header'>
            <div className='container-fluid py-5 text-black d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center'>
                <div className={`mb-5 mb-lg-0 ${isMobile ? 'text-center' : ''}`}>
                    <h1 className='display mb-5'>Discover the Taste of Tradition</h1>
                    <p className='text col-md-8 fs-4 text-secondary'>We bring you the finest cheese, crafted with generations of tradition and using only the highest quality, locally sourced milk. Experience the richness and depth of flavors our cheeses offer.</p>
                    <a type='button' className='btn btn-orange' data-bs-toggle='button' href='src/layouts#'>Explore Our Cheeses!</a>
                </div>
                {!isMobile &&
                    <img
                        className="rounded-image mb-4 mb-lg-0"
                        src={factoryPhoto}
                        width='800'
                        height='450'
                        alt="cheese factory"
                    />
                }
            </div>
        </div>
    );
}

export default Home;
