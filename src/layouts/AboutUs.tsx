import cheeseProduction from '../images/cheese_production.jpg';
import cheeseWarehouse from '../images/cheese_warehouse.jpg';
export const AboutUs = () => {
    return (
        <div className="container-fluid pt-5 pb-5" style={{backgroundColor: '#ffd890'}}>
            <div className="row mb-4">
                <div className="col-md-6">
                    <img src={cheeseProduction} className="d-block w-100" style={{width:'50px', height:'750px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'}} alt="Cheese Production"/>
                </div>
                <div className="col-md-6">
                    <div className="caption">
                        <p className='text col-md-8 fs-4 text-dark text-align-center mt-5 ms-5' >
                            Nestled in the heart of the countryside, our artisan home cheese factory is dedicated to producing the finest, most delectable cheeses. We are passionate about maintaining traditional cheese making methods, infusing each product with a touch of our unique home-crafted process. Our cheeses, made from locally sourced, high-quality milk, are not only a tribute to our commitment to sustainability, but also a testament to our commitment to delivering the very best to our customers. Each cheese we produce is a celebration of taste, offering a unique flavor profile that is as rich and diverse as our community. Experience the wholesome goodness of our home, one cheese at a time.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 order-md-2">
                    <img src={cheeseWarehouse} className="d-block w-100" style={{width:'650px', height:'550px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'}} alt="Cheese Warehouse"/>
                </div>
                <div className="col-md-6 order-md-1">
                    <div className="caption">
                        <p className='text col-md-8 fs-4 text-dark text-align-center mt-5 ms-5'>
                            Every cheese that leaves our warehouse is a testament to our dedication to quality and taste. We source only the finest and freshest ingredients, ensuring that every bite you take is packed with rich, authentic flavor. Our cheeses are crafted with care, using natural ingredients that are free from additives and artificial preservatives. Our meticulous process and attention to detail ensure that every piece of cheese we produce meets the highest standards of quality. When you choose our cheese, you're not just getting a tasty product, you're experiencing the passion and craftsmanship that goes into every step of the cheese-making process. Try our cheese today and taste the difference quality makes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


