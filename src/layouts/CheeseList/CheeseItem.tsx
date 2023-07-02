import React, { useState } from 'react';

interface CheeseItemProps {
    title: string;
    text: string;
    image: string;
}

const CheeseItem: React.FC<CheeseItemProps> = ({ title, text, image }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="col-lg-4 marketing">
            <div
                className="bd-placeholder-img rounded-circle"
                style={{
                    width: "140px",
                    height: "140px",
                    backgroundColor: isHovered ? 'transparent' : 'rgba(255, 216, 144, 0.7)',
                    backgroundImage: isHovered ? `url(${image})` : 'none',
                    backgroundSize: 'cover'
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            ></div>
            <h2 className="h2">{title}</h2>
            <p className="p">{text}</p>
            <p><a className="btn btn-orange" href="#">View details &raquo;</a></p>
        </div>
    );
};

export default CheeseItem;
