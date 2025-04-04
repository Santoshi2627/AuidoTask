// import React, { useRef, useContext } from "react";
// import { PlayerContext } from "../context/playercontext";

// export const Audio = () => {
 
//   const context= useContext(PlayerContext);
//   console.log(context);
//   const audioRef = useRef(new Audio(track.audio));
//   let handleBtn = () => {
//     audioRef.useRef();
//   };
//   let handleAudioPlay = () => {
//     audioRef.current.pause();
//     audioRef.current.currentTime = 0;
//   };
//   return (
//     <div>
//       {/*
//        */}
//       <audio
//         src={track.audio}
//         controls
//         ref={audioRef}
//         onPlay={handleAudioPlay}
//       />
//       <button onClick={handleBtn}>Click to play that song</button>
//     </div>
//   );
// };

import React, { useRef, useContext,useEffect } from "react";
import { PlayerContext } from "../context/playercontext";

export const Audio = () => {
  const { track } = useContext(PlayerContext); 
  const audioRef = useRef(null); 

//   const handleBtn = () => {
//     if (audioRef.current) {
//       audioRef.current.play(); 
//     }
//     else {
//         audioRef.current.play();
//       }
//   };

  const handleAudioPlay = () => {
    // if (audioRef.current) {
    // //   audioRef.current.play();
    // //   audioRef.current.currentTime = 2;
    // }
    // setInterval(()=>{
    //     audioRef.current.play();
        
    // },20000)
  };
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) 
    return;
    audio.currentTime = 120;
    audio.play();
    const intervalId = setInterval(() => {
      if (audio.currentTime >= 180) {
        audio.pause();       
        clearInterval(intervalId);
      }
    }, 1000); 
    return () => clearInterval(intervalId);
  }, [track]);

  return (
    <div>
      <audio
        src={track.audio}
        controls
        ref={audioRef}
        onPlay={handleAudioPlay}
      />
      {/* <button onClick={handleBtn}>Click to play that song</button> */}
    </div>
  );
};
