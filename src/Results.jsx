import Pet from "./Pet";

const Result = ({pets}) =>{
    return (
        <div className="search">
            { !pets.length ? (
                <h1>No Pets Found</h1>
            ) : (
                pets.map( (pet)=> {
                    return (
                        <Pet 
                            animal={pet.animal}
                            key={pet.id}
                            location={`${pet.city}, ${pet.state}`}
                            breed={pet.breed}
                            name={pet.name}
                        /> 
                    )
                })
            )

            }
        </div>
    )
}

export default Result;