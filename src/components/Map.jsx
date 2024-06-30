import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const navigate = useNavigate();

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>Positions: </h1>
      {/* <h1>{`lat:${lat}, lng=${lng}`} </h1> */}
      {/* <button
        onClick={() => {
          setSearchParams({
            lat: String(Number(lat) + 1),
            lng: String(Number(lng) + 1),
          });
        }}
      >
        change indexes
      </button> */}
    </div>
  );
}

export default Map;
