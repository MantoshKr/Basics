// import { useNavigate } from "react-router-dom";
// import img from "./assets/brave.jpeg"
// import React from "react";
// import Player from "./Player";
// import Player from "./Player";

// function App() {
//   const navigate = useNavigate;
//   return (
//     <div  >
//       <img src={img} alt="movie poster" className="w-full h-auto" onClick={()=> navigate("./Player")}/>
//       <Player />
//     </div>
//   );
// }

// export default App;





import img from "./assets/brave.jpeg";
import React, { useState } from "react";
import Player from "./Player";

function App() {
  const [showPlayer, setShowPlayer] = useState(false);

  const handleImageClick = () => {
    setShowPlayer(true);
  };
  
  return (
    <div className="w-auto h-10 object-cover">
     {!showPlayer ? (
        <img src={img} alt="movie poster" className="w-full h-full" onClick={handleImageClick} />
      ) : (
        <Player />
      )}

    </div>
  );
}

export default App;