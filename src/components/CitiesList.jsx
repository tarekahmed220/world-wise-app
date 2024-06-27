import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
function CitiesList({ cities, isLoading }) {
  // console.log(cities);
  if (isLoading) return <Spinner />;
  return (
    <ul className={styles.CityList}>
      {cities.map((city) => {
        return <CityItem key={city.id} city={city} />;
      })}
    </ul>
  );
}

export default CitiesList;
