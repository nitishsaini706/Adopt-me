import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPets from "./fetchPets";
import Carousel from "./Carousel";
import Errorboundary from "./Errorboundary";

const Details = ()=>{
    const {id}= useParams();
    const results = useQuery(["details",id],fetchPets);

    if(results.isLoading){
        return (
            <div className="loading-pane">
                <div className="loader">🤣</div>
            </div>
        )
    }

    console.log(results.data);
    const pet = results.data.pets[0];
    return (
        <div className="details">
            <Carousel images={pet.images} />
            <div>
                <h1>{pet.name}</h1>
                <h2>{pet.animal} - {pet.breed} - {pet.city}, {pet.state} </h2>
                <p>{pet.description}</p>
                <button>Adopt {pet.name}</button>
            </div>
        </div>
    );
}

function detailsError(){
    <Errorboundary>
        <Details>

        </Details>
    </Errorboundary>
}

export default detailsError;