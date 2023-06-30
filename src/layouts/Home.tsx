import React from 'react';
import factoryPhoto from '../images/factory_photo.jpg';

const Home = () => {
    return (
        <div className='p-5 mb-4 bg-white header'>
            <div className='container-fluid py-5 text-black d-flex justify-content-left align-items-center'>
                <div>
                    <h1 className='display mb-5'>Discover the Taste of Tradition</h1>
                    <p className='text col-md-8 fs-4 text-secondary'>We bring you the finest cheese, crafted with generations of tradition and using only the highest quality, locally sourced milk. Experience the richness and depth of flavours our cheeses offer.</p>
                    <a type='button' className='btn btn-orange' data-bs-toggle='button' href='src/layouts#'>Explore Our Cheeses!</a>
                </div>
                <img
                    className="rounded-image"
                    src={factoryPhoto}
                    width='800'
                    height='450'
                    alt="cheese factory"
                />
            </div>
        </div>
    );
}

export default Home;
