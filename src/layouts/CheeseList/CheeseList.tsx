import React from 'react';
import CheeseItem from './CheeseItem';
import cheese1 from '../../images/cheese1.jpg';
import cheese2 from '../../images/cheese2.jpg';
import cheese3 from '../../images/cheese3.jpg';

export const CheeseList = () => {
    return (
        <div className="row container-fluid pr-3">
            <CheeseItem
                title="Haloumi"
                text="Some representative placeholder content for the three columns of text below the carousel. This is the first column."
                image={cheese1}
            />
            <CheeseItem
                title="Stracciatella"
                text="Another exciting bit of representative placeholder content. This time, we've moved on to the second column."
                image={cheese2}
            />
            <CheeseItem
                title="Mozarella"
                text="And lastly this, the third column of representative placeholder content."
                image={cheese3}
            />
        </div>
    );
};
