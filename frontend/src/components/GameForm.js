import { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "./GameForm.css";

const GameForm = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [platform, setPlatform] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    const game = { name, genre, platform, price, stock, releaseDate };

    const response = await fetch("http://localhost:4000/stores", {
      method: "POST",
      body: JSON.stringify(game),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else {
      setError(null);
      setName("");
      setGenre("");
      setPlatform("");
      setPrice("");
      setStock("");
      setReleaseDate("");
      console.log("New game added:", json);
      navigate('/'); // Redirect after successful submission
    }
  };

  return (
    <Container fluid className="my-5 d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <form className="create" onSubmit={handleSubmit}>
            <h3 className="text-center">Add a New Game</h3>

            <label>Game Name:</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="form-control"
            />
            <label>Genre:</label>
            <input
              type="text"
              onChange={(e) => setGenre(e.target.value)}
              value={genre}
              className="form-control"
            />
            <label>Platform:</label>
            <input
              type="text"
              onChange={(e) => setPlatform(e.target.value)}
              value={platform}
              className="form-control"
            />

            <label>Price ($):</label>
            <input
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              className="form-control"
            />
            <label>Stock:</label>
            <input
              type="number"
              onChange={(e) => setStock(e.target.value)}
              value={stock}
              className="form-control"
            />
            
            <label>Release Date:</label>
            <input
              type="date"
              onChange={(e) => setReleaseDate(e.target.value)}
              value={releaseDate}
              className="form-control"
            />
            <button className="btn btn-primary">Add Game</button>
            {error && <div className="error">{error}</div>}
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default GameForm;
