import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import React from 'react';
import { recipes } from './ReceiptsPage';

export const ReceiptsDetail = () => {
    const { id } = useParams<{id: string}>();

    const recipe = recipes.find(recipe => recipe.id === id);

    if (!recipe) {
        return <h2>Recipe not found</h2>;
    }

    return (
        <Container>
            <h2 className="mb-4">{recipe.title}</h2>
            <Row>
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
                </Col>
            </Row>
        </Container>
    );
}
