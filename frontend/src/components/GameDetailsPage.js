import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './GameDetailPage.css'; // Create a CSS file for styling

const GameDetailPage = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      const response = await fetch(`http://localhost:4000/stores/${id}`);
      if (response.ok) {
        const data = await response.json();
        setGame(data);
      } else {
        console.error('Failed to fetch game details');
      }
    };

    fetchGame();
  }, [id]);

  if (!game) {
    return <div>Loading...</div>; // Show a loading message while fetching
  }

  return (
    <div className="game-detail-page">
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Game Image" />
        <Card.Body>
          <Card.Title>{game.name}</Card.Title>
          <Card.Text>
            <strong>Genre:</strong> {game.genre}
          </Card.Text>
          <Card.Text>
            <strong>Platform:</strong> {game.platform}
          </Card.Text>
          <Card.Text>
            <strong>Price:</strong> ${game.price.toFixed(2)}
          </Card.Text>
          <Card.Text>
            <strong>Stock:</strong> {game.stock}
          </Card.Text>
          <Card.Text>
            <strong>Release Date:</strong> {new Date(game.releaseDate).toLocaleDateString()}
          </Card.Text>
          <Button variant="primary" onClick={() => window.history.back()}>Go Back</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default GameDetailPage;
