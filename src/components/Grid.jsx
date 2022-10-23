import { useFetchCharacters } from "../hooks/useFetchCharacters";
import { GridItem } from "./GridItem";

export const Grid = () => {
    const { characters, isLoading } = useFetchCharacters();


    return (
        <>
            {
                isLoading && (<h2>Cargando...</h2>) // And logico; si isLoaging es True, ejecuta la siguiente parte despues de &&
            }

            <div className="card-grid">
                {
                    characters.map( ( character ) => (
                        <GridItem
                            key={ character.id }
                            { ...character }
                        />
                    ))
                }
            </div>
        </>
    )
}
