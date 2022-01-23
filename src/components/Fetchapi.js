import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactAudioPlayer from 'react-audio-player';

export default function Fetchapi() {

    const [ayahs, setAyahs] = useState([]);

    useEffect(()=>{
        axios.get("http://api.alquran.cloud/v1/surah/1/ar.alafasy")
        .then(res=>{
            setAyahs(res.data.data.ayahs);
            console.log(res.data.data.ayahs);
        })
        .catch(err => {
            console.error(err);
        })
    },[])


  return <div className='m-5'>
      <center>
          
      {
          ayahs.map((surah, index) => {
            return (
                <div key={index} className="p-3">
                    <h1><mark>{index+1}</mark> {surah.text}</h1>

                    <ReactAudioPlayer
                        src={surah.audio}
                        controls
                    />
                </div>
            )
          })
      }
      </center>
  </div>;
}




