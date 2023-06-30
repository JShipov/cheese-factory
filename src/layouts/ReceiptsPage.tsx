import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import recipe1 from '../images/recipe1.jpg'
import recipe2 from '../images/recipe2.jpg'
import recipe3 from '../images/recipe3.jpg'

type Recipe = {
    id: string;
    title: string;
    description: string;
    img: string;
    fullRecipe: string;
    prepTime: string;
};

export const recipes: Recipe[] = [
    {
        id: 'grilled-cheese',
        title: 'Grilled Cheese',
        description: 'This classic and delicious grilled cheese recipe uses our special grilling cheese to create a warm, melty, and toasty favorite.',
        img: recipe1,
        fullRecipe: 'Ingredients: \n- 2 slices of bread \n- 3 slices of grilling cheese \n- 2 tablespoons of butter \n\nDirections: \n1. Preheat a skillet over medium heat. \n2. Butter one side of each slice of bread. \n3. Place one slice of bread in the skillet, buttered side down. \n4. Lay the cheese slices on the bread in the skillet. \n5. Top with the second slice of bread, buttered side up. \n6. Cook until the bottom slice of bread is golden brown. \n7. Flip the sandwich and cook until the other slice of bread is golden brown and the cheese is melted.',
        prepTime: '15 min'
    },
    {
        id: 'mozzarella-caprese',
        title: 'Mozzarella Caprese Salad',
        description: 'This simple yet elegant dish combines our fresh mozzarella with ripe tomatoes, basil, and a drizzle of olive oil.',
        img: recipe2,
        fullRecipe: 'Ingredients: \n- 1 ball of fresh mozzarella cheese \n- 2 ripe tomatoes \n- A handful of fresh basil leaves \n- Olive oil \n- Salt and pepper to taste \n\nDirections: \n1. Slice the mozzarella and tomatoes into thin slices. \n2. Arrange the slices on a plate, alternating and overlapping the mozzarella and tomatoes. \n3. Tuck whole basil leaves in between the mozzarella and tomatoes. \n4. Drizzle the salad with olive oil. \n5. Season with salt and pepper to taste.',
        prepTime: '22 min'
    },
    {
        id: 'stracciatella-gelato',
        title: 'Stracciatella Gelato',
        description: 'This creamy and indulgent gelato recipe uses our stracciatella cheese for a unique and delicious flavor.',
        img: recipe3,
        fullRecipe: 'Ingredients: \n- 2 cups of heavy cream \n- 1 cup of milk \n- 3/4 cup of sugar \n- 1 teaspoon of vanilla extract \n- 1 cup of Stracciatella cheese, chopped into small pieces \n\nDirections: \n1. In a medium saucepan, combine the cream, milk, and sugar. \n2. Cook over medium heat, stirring, until the sugar has dissolved. \n3. Remove from heat and stir in the vanilla extract. \n4. Let the mixture cool to room temperature. \n5. Pour the mixture into an ice cream maker and churn according to the manufacturer\'s instructions. \n6. In the last few minutes of churning, add the Stracciatella cheese. \n7. Transfer the gelato to a lidded container and freeze for at least 2 hours before serving.',
        prepTime: '55 min'
    },
];

export const ReceiptsPage = () => {
    const [activeRecipe, setActiveRecipe] = useState<string | null>(null);

    const handleMouseEnter = (id: string) => {
        setActiveRecipe(id);
    }

    const handleMouseLeave = () => {
        setActiveRecipe(null);
    }

    return (
        <Container>
            <h2 className="mb-4"></h2>
            <Row>
                {recipes.map((recipe: Recipe) => (
                    <Col md={4} key={recipe.id}>
                        <Card
                            onMouseEnter={() => handleMouseEnter(recipe.id)}
                            onMouseLeave={handleMouseLeave}
                            className={`recipe-card ${activeRecipe === recipe.id ? "active" : ""}`}
                        >
                            <Card.Img variant="top" src={recipe.img} />
                            {activeRecipe === recipe.id &&
                                <div className="recipe-info">
                                    <p>Preparation time: {recipe.prepTime}</p>
                                </div>
                            }
                            <Card.Body>
                                <Card.Title>{recipe.title}</Card.Title>
                                <Card.Text>
                                    {recipe.description}
                                </Card.Text>
                                <Link to={`/receipts/${recipe.id}`} className="btn btn-orange">See Recipe</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
