import React from 'react';

import Spinner from './Spinner';
import useGif from '../hooks/useGif';

//const API_KEY='gU797TaXEMqI13TxrfmlB0j5ISbBGUAj'

function Random() {
  

  // const [gif, setGif] = useState('');  
  // const[loader,setLoader]=useState(false);


  // async function fetchData() {
  //   try {
  //     setLoader(true)
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //     const {data} = await axios.get(url);
     
  //     const imageSource=data.data.images.downsized_large.url;
  //     console.log(imageSource);
      
  //     setGif(imageSource)
  //     setLoader(false)
  //   } catch (error) {
  //     console.error('Error fetching the GIF:', error);
  //   }
  // }
  // console.log("gif---------->",gif)

  

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const {loader,gif,fetchData}=useGif()

  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl underline uppercase font-bold'>A Random Gif</h1>

      {loader===true ? (<Spinner/>) :(<img src={gif} alt='Random Gif' width="450"/> )}
      
      <button 
        className='bg-white opacity-1 w-2/3 p-2 text-xl rounded-lg'
        onClick={()=>fetchData()}
      >
        GENERATE
      </button>
    </div>
  );
}

export default Random;
