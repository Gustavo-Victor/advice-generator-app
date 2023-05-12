import { useState, useEffect } from "react";
import Advice from "./components/Advice";
import Attribution from "./components/Attribution";
import Loader from "./components/Loader";
import Error from "./components/Error";
import { AdviceObjType } from "./types/advise";
import "./styles/App.scss";

function App() {
  const [advice, setAdvice] = useState<AdviceObjType | null>(null);
  const [error, setError] = useState(false); 
  const [isLoading, setIsLoading] = useState(false); 

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json(); 
      const objModel : AdviceObjType = data.slip;   
      setAdvice({...objModel});
    } catch (e) {
      setError(true);
      console.error(e);  
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className='container'>
        {isLoading && !error && <Loader />}
        {!isLoading && error && <Error message="Data not found"/>}
        {!isLoading && !error && <Advice {...advice} getData={getData} />}            
      </div>

      <Attribution 
        author="Gustavo Victor"
        link="https://github.com/Gustavo-Victor"
        challenge="https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db"/>    
    </>
  );
};

export default App; 
