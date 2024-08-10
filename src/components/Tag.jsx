import React, { useState } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


//const API_KEY='gU797TaXEMqI13TxrfmlB0j5ISbBGUAj'

function Tag() {
  
   

  // const [gif, setGif] = useState('car');  
  // const[loader,setLoader]=useState(false);
  const [input,setInput]=useState('');


  // async function fetchData() {
  //   try {
  //     setLoader(true)
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${input}`;
  //     const {data} = await axios.get(url);
     
  //     const imageSource=data.data.images.downsized_large.url;
  //     console.log(imageSource);
      
  //     setGif(imageSource)
  //     setLoader(false)
  //   } catch (error) {
  //     console.error('Error fetching the GIF:', error);
  //   }
  // }
  
  

  // useEffect(() => {
  //   fetchData();
  // }, []);
  const {fetchData,gif,loader}=useGif(input)

  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl underline uppercase font-bold'>Random Gif {input}</h1>

      {loader===true ? (<Spinner/>) :(<img src={gif} alt='Random Gif' width="450"/> )}

       <input
        type='text' 
        className='w-10/12 text-center'
        onChange={(e)=>setInput(e.target.value)}
       />
      <button 
      
        className='bg-white opacity-1 w-2/3 p-2 text-xl rounded-lg'
        onClick={()=>fetchData(input)}
      >
       GENERATE
      </button>
    </div>
  );
}

export default Tag;
