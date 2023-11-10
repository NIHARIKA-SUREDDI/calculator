import { useNavigate } from "react-router-dom";
import Card from "./card";
function HomePage() {
 
    const navigate = useNavigate();

    const handleClick1 = () => {
        navigate('/simple')
    }
    const handleClick2 = () => {
        navigate('/compound')
    }
 
  return (                                                                                                                                                                        
    
  
    <div className="App">
      
      <div className='cards' style={{display:'flex',width:'100%'}}>
     
      <Card 
      title="Simple Interest" 
      description="Calculate simple interest on your loans and saving schemes investments."
      imageUrl="https://cdn-icons-png.flaticon.com/512/8216/8216321.png"
      onClick={handleClick1}
      />
      
      <Card 
      title="Compound Interest"
      description="Calculate compound interest on your loans with ease." 
      imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTWVp8c_HuLTXvPVrF43mrY-66dcIYnv-GrFsYO4MYVn5FkQu21LHtbpi5WW8Z7rFem-M&usqp=CAU"
      onClick={handleClick2}
      />
      </div>
      
    
     
    </div>
    

    

  );
}

export default HomePage;
