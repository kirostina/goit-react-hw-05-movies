import { fetchCastInfo } from "./API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const Cast = () => {

  const [casts, setCasts] = useState([])
  const { id } = useParams();
  const postImg = 'https://image.tmdb.org/t/p/w500';
  
  useEffect(() => {
    fetchCastInfo(id).then(data => {
      setCasts(data)
    })
  }, [id]);
  
  return (
    <div>
      {!casts.length > 0 ? (
        <p>No Casts</p>
      ) : (
          <ul>
            {casts.map(({ cast_id,profile_path,original_name}) => (
              <li key={cast_id}>
                <img src={profile_path ? postImg + profile_path : 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Nophoto.jpg'} alt={original_name} />
                <h3>{original_name}</h3>
              </li>
            ))}
          </ul>
     )}
    </div>
  )
};


export default Cast