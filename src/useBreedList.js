import { useQuery } from "@tanstack/react-query";
import fetchBreed from "./fetchBreed";

// const localCache = {};

export default function useBreedList(animal) {
  // console.log(animal);
    const result = useQuery(["breeds",animal], fetchBreed);

    return [result?.data?.breeds ?? [],result.status];

  // const [breedList, setBreedList] = useState([]);
  // const [status, setStatus] = useState("unloaded");

  // useEffect(() => {
  //   if (!animal) {
  //     setBreedList([]);
  //   } else if (localCache[animal]) {
  //     setBreedList(localCache[animal]);
  //   } else {
  //     requestBreedList();
  //   }

  //   async function requestBreedList() {
  //     setBreedList([]);
  //     setStatus("loading");
  //     const res = await fetch(
  //       `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  //     );
  //     const json = await res.json();
  //     localCache[animal] = json.breeds || [];
  //     setBreedList(localCache[animal]);
  //     setStatus("loaded");
  //   }
  // }, [animal]);

  // return [breedList, status];
}