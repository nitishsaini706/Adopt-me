const fetchSearchParams = async ({queryKey}) =>{

    console.log(queryKey[1]);
    const {animal,breed,location} = queryKey[1];


    const result = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&breed=${breed}&location=${location}`);
    
    if(!result.ok) {
        throw new Error(`pets/${animal} fetch not ok`)
    }

    return result.json();

    
 }

 export default fetchSearchParams;