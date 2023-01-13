import { useState ,useEffect } from "react";
import Pet from './Pet.jsx';
const Animals = ['dog','cats','rabbit','reptile'];

const SearchParams = ()=>{
    const [location,setLocation] = useState("");
    const [animal,setAnimal]=useState("");
    const [breed,setBreed] = useState("");
    const [pets,setPet] = useState([]);
    const breeds=[];

    useEffect(()=> {
        requestPets();
    },[]);

    async function requestPets(){
        const pet = await fetch(`
        http://pets-v2.dev-apis.com/pets?animals=${animal}&location=${location}&breed=${breed}`);

        const json = await pet.json();

        setPet(json.pets);
    }

    return(
        <div className="search-params">
            <form onSubmit={(e)=> {
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    Location
                    <input onChange={(e)=> setLocation(e.target.value)} type="text" id="location" placeholder="location" value={location} />
                </label>

                
                <label htmlFor="animal">
                    Animal
                    <select onChange={(e)=> {setAnimal(e.target.value); setBreed("") }} id='animal' placeholder="animal" value={animal} >
                

                <option/>
                {
                    Animals.map((animal) => (
                        <option key={animal}>{animal}</option>
                    ))
                }
                
                </select>
                </label>

                <label htmlFor="breed">
                    Breed
                    <select onChange={(e)=> {setBreed(e.target.value);}} id='breed' disabled={breeds.length == 0} placeholder="breed" value={breed} >
                

                <option/>
                {
                    Animals.map((breed) => (
                        <option key={breed}>{breed}</option>
                    ))
                }
                
                </select>
                </label>
                <button>Submit</button>
            </form>
                {
                    pets.map( (pet) => (
                        <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id}/>
                    ))
                }
        </div>
    )
}

export default SearchParams;