import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import React from 'react';
import { recipes } from './ReceiptsPage';

export const ReceiptsDetail = () => {
    const { id } = useParams<{id: string}>();

    const recipe = recipes.find(recipe => recipe.id === id);

    if (!recipe) {
        return <h2>Recipe not found</h2>;
    }

    return (
        <Container className="my-4">
            <h2 className="mb-4 text-center">{recipe.title}</h2>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card>
                        <Card.Img variant="top" src={recipe.img} />
                        <Card.Body>
                            <Card.Title>{recipe.title}</Card.Title>
                            <Card.Text>
                                {recipe.description}
                            </Card.Text>
                            <Card.Text>
                                {recipe.fullRecipe}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Link to="/receipts" className="btn btn-orange mt-3">Back to recipes</Link>
                </Col>
            </Row>
        </Container>
    );
}
