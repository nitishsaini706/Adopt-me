const fetchPets = async ({queryKey}) => {
    const id = queryKey[1];

    const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
    // console.log(apiRes.json());
    if(!apiRes.ok){
        throw new Error(`details/${id} fetch not ok`);
    }

    return apiRes.json();
}

export default fetchPets;