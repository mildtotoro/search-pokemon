import React from "react";
import { gql, useQuery } from "@apollo/client";
import { PokemonDataInterface } from "../types";

const GET_POKEMON = gql`
  query pokemon($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`;

function Search() {
  const { loading, error, data } = useQuery<PokemonDataInterface>(GET_POKEMON, {
    variables: { name: "Charmander" },
  });
  const pokemon = data?.pokemon;
  console.log({ data });
  if (loading) return <div>Loading</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div>
      {pokemon ? (
        <div className="text-green-100">
          {pokemon.name}
          <img src={pokemon.image} alt="" />
        </div>
      ) : (
        <div>not found</div>
      )}
    </div>
  );
}

export default Search;
