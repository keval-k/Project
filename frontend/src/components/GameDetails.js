import { Card, Button } from "react-bootstrap";
import "./GameDetails.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const GameDetails = ({ game, onDelete }) => {
  const sampleImage = "https://via.placeholder.com/150"; // Placeholder image URL
  const navigate = useNavigate(); // Initialize navigate

  const handleClick = async (event) => {
    event.stopPropagation(); // Prevent card click event from firing
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(
          `http://localhost:4000/stores/${game._id}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const json = await response.json();
        console.log("Game deleted:", json);
        if (onDelete) {
          onDelete(game._id);
        }
        window.location.reload();
      } catch (error) {
        console.error("Error deleting game:", error);
      }
    }
  };

  const handleEditClick = (event) => {
    event.stopPropagation(); // Prevent card click event from firing
    navigate(`/edit/${game._id}`); // Navigate to the edit route
  };

  const handleCardClick = () => {
    navigate(`/details/${game._id}`); // Navigate to the details route
  };

  return (
    <div className="game-details" onClick={handleCardClick}>
      <Card className="h-100">
        <Card.Img variant="top" src={sampleImage} alt="Game Image" />
        <Card.Body>
          <Card.Title>{game.name}</Card.Title>
          <Card.Text>
            <strong>Genre: </strong>
            {game.genre}
          </Card.Text>
          <Card.Text>
            <strong>Platform: </strong>
            {game.platform}
          </Card.Text>
          <Card.Text>
            <strong>Price: </strong>${game.price.toFixed(2)}
          </Card.Text>
          <Card.Text>
            <strong>Stock: </strong>
            {game.stock}
          </Card.Text>
          <Card.Text>
            <strong>Release Date: </strong>
            {new Date(game.releaseDate).toLocaleDateString()}
          </Card.Text>
          <Button variant="danger" onClick={handleClick}>
            Delete
          </Button>
          <Button variant="success" onClick={handleEditClick}>
            Edit
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default GameDetails;
