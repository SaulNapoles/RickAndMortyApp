import { useEffect, useState } from "react";
import { getCharacters } from "../helpers/getCharacters";


export const useFetchCharacters = () => {
    const [characters, setCharacters] = useState( [] );
    const [isLoading, setIsLoading] = useState( true )

    const getInfo = async() =>{
        const newCharacter = await getCharacters()
        setCharacters(newCharacter);
        setIsLoading(false);
    }

    useEffect(() => {
      getInfo();
    }, [])
    
    console.log(characters);

    return {
        characters,
        isLoading
    }
}
