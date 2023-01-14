import Pet from "./Pet";

const Result = ({pets}) =>{
    if(!pets.length){
        (
            <div>
                <h1>No Pets Found</h1>
            </div>
        )
    }
    else {
        (
            pets.map((p)=>{
                <Pet
                    animal = {p.animal}
                    breed = {p.breed}
                    locaiton = {`${p.state} , ${p.city}`}
                    key = {p.id}
                    name = {p.name}
                />
            })
        )
    }
} 

export default Result;