import { useState, useEffect } from "react";
import GameDetails from '../components/GameDetails';
import { Container } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("http://localhost:4000/stores");

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const json = await response.json();
        setGames(json);
      } catch (error) {
        console.error("Error fetching games:", error);
        setError(error.message);
      }
    };

    fetchGames();
  }, []);

  return (<>
    <Container fluid className="Home">
     
      {error && <p>{error}</p>}
      {games.length > 0 ? (
        games.map((game) => (
          <div key={game._id} className="mb-4" style={{ flex: '1 1 calc(25% - 20px)', margin: '10px' }}>
            <GameDetails game={game} />
          </div>
        ))
      ) : (
        <p>No games available.</p>
      )}
      
    </Container>
    </>
  );
};

export default Home;
