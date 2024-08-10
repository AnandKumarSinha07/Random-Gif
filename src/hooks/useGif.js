import  { useEffect, useState } from 'react';
import axios from 'axios';



const API_KEY='BmsKeJgrkiPZelHi7skwLcfyNmDrOY5J'
// Normal Url
const Url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

function useGif(input) {

    const [gif, setGif] = useState('');  
    const[loader,setLoader]=useState(false);



  async function fetchData(input) {
    try {
      setLoader(true)
        
      const {data} = await axios.get(input? `${Url}&tag=${input}`: Url);
     
      const imageSource=data.data.images.downsized_large.url;
      console.log(imageSource);
      
      setGif(imageSource)
      setLoader(false)
    }
     catch (error) {
      console.error('Error fetching the GIF:', error);
    }
  }
    useEffect(()=>{
        fetchData('car');
     },[])

  return {gif,loader,fetchData}
 
}

export default useGif;
