import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchSearchParams from "./fetchSearchParams";
import Result from "./Results";
import useBreedList from "./useBreedList";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  // const [pets, setPets] = useState([]);
  // const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  // const [breed, setBreed] = useState("");
  const [params,setParams] =useState({
    animal : "",
    location:"",
    breed:""
  });
  const [breeds] = useBreedList(animal);

  const result = useQuery(["search",params],fetchSearchParams);

  const pets =result?.data?.pets ?? [];

  // useEffect(() => {
  //   requestPets();
  
  // }, []); 

  // async function requestPets() {
  //   const res = await fetch(
  //     `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  //   );
  //   const json = await res.json();
  //     console.log(json.images);
  //   setPets(json.pets);
  // }

  return (
    <div className="search-params">
      <form onSubmit={(e)=>{
        e.preventDefault();
        // requestPets();

        const formData = new FormData(e.target);

        const obj = {
          animal: formData.get("animal") ?? "",
          breed: formData.get("breed") ?? "",
          location: formData.get("location") ?? ""
        }

        setParams(obj);
      }}>
        <label htmlFor="location">
          Location
          <input
            id="location"
            // value={location}
            name="location"
            placeholder="Location"
            // onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              // setBreed("");
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              // setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            name="breed"
            // value={breed}
            // onChange={(e) => setBreed(e.target.value)}
            // onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
      <Result pets={pets} />
    </div>
  );
};

export default SearchParams;