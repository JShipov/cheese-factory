import React, { useState } from 'react';
import cheese1 from '../../images/cheese1.jpg';
import cheese2 from '../../images/cheese2.jpg';
import cheese3 from '../../images/cheese3.jpg';
import { useMediaQuery } from 'react-responsive';

const CheeseDisplay = () => {
    const [activeCheese, setActiveCheese] = useState<number | null>(null);

    const cheeses = [
        { id: 1, name: "Haloumi", weight: "350 gr", price: "8 azn", img: cheese1 },
        { id: 2, name: "Stracciatella", weight: "200 gr", price: "7 azn", img: cheese2 },
        { id: 3, name: "Mozarella", weight: "100 gr", price: "3.5 azn", img: cheese3 },
    ]

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })

    const isMobile = useMediaQuery({
        query: '(max-device-width: 767px)'
    })

    const handleMouseEnter = (id: number) => {
        setActiveCheese(id);
    }

    const handleMouseLeave = () => {
        setActiveCheese(null);
    }

    return (
        <div className="cheese-container">
            {isDesktopOrLaptop && cheeses.map((cheese) => (
                <div
                    key={cheese.id}
                    className={`cheese-item ${activeCheese === cheese.id ? "active" : ""}`}
                    onMouseEnter={() => handleMouseEnter(cheese.id)}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        className="cheese-img"
                        src={cheese.img}
                        alt={cheese.name}
                    />
                    {activeCheese === cheese.id &&
                        <div className="cheese-info">
                            <p>{cheese.name}</p>
                            <p>{cheese.weight}</p>
                            <p>{cheese.price}</p>
                        </div>
                    }
                </div>
            ))}
            {isMobile &&
                <div className='d-lg-none mt-3'>
                    <div className='row d-flex justify-content-center align-items-center'>
                        {cheeses.map((cheese) => (
                            <div
                                key={cheese.id}
                                className="cheese-item-mobile"
                            >
                                <img
                                    className="cheese-img"
                                    src={cheese.img}
                                    alt={cheese.name}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    );
}

export default CheeseDisplay;
