import { useNavigate } from "react-router-dom";
import Card from "./card";
import "../styles/home.css";
function HomePage() {
  const navigate = useNavigate();

  const handleClick1 = () => {
    navigate("/simple");
  };
  const handleClick2 = () => {
    navigate("/compound");
  };

  return (
    <div className="cards-container">
      <Card
        title="Simple Interest"
        description="Calculate simple interest on your loans and savings."
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6y8hm8buOj9DAIke_ovhuUP5vPDzDGEXfj4bEYc4l5GO2QavUllUUW-joS4Jeg6o6kzU&usqp=CAU"
        onClick={handleClick1}
      />

      <Card
        title="Compound Interest"
        description="Calculate compound interest on your loans with ease."
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTWVp8c_HuLTXvPVrF43mrY-66dcIYnv-GrFsYO4MYVn5FkQu21LHtbpi5WW8Z7rFem-M&usqp=CAU"
        onClick={handleClick2}
      />
    </div>
  );
}

export default HomePage;
