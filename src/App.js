import react, { useEffect, useState } from 'react';
import axios from 'axios';
import Container  from '@material-ui/core/Container';
import Gallery from './components/Gallery';
import Input from './components/Input'
import CircularProgress  from '@material-ui/core/CircularProgress';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clientId, setClientId] = useState("7GGryYP7_gcc-CnppyhdBj_A8eoXETvCQF0ZTiAzqPs");
  const [type, setType] = useState("");

  const fetchData = async (input) => {
    
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?page=1&query=${input}+&client_id=${clientId}&per_page=20`
      );
    // console.log(response);
    const data = await response.data;
     console.log(data);
    // console.log(data.results);
    setPhotos(data.results);
    setLoading(false);
  }

  const handleChange = (event) => {
    // console.log(event.target.value)
     setType(event.target.value);
   }

   const handleSubmit = (event) => {
     event.preventDefault();
     fetchData(type);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if(loading){
   // return <h1>Loading.... </h1>
   return <div style={{
     height : "100vh",
     display : "flex",
     justifyContent : "center",
     alignItems : "center",
   }}>
     <CircularProgress size={130} />
   </div>
  }


  return (
    <Container>
      <Input change = {handleChange} />
      <Gallery photos = {photos} />
    </Container>
  )
}


export default App;
