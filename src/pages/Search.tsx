import React, { useState, useEffect } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { PokemonDataInterface } from "../types";
import Pokemon from "../components/Pokemon";
import { useLocation, useHistory } from "react-router-dom";

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
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      evolutions {
        id
        name
      }
      evolutionRequirements {
        amount
        name
      }
    }
  }
`;

function useQueryParam() {
  return new URLSearchParams(useLocation().search);
}

function Search() {
  const query = useQueryParam();
  const history = useHistory();
  const nameParam = query.get("name");
  const [name, setName] = useState(nameParam || "");

  const [searchPokemon, { loading, data, error, called }] =
    useLazyQuery<PokemonDataInterface>(GET_POKEMON);
  useEffect(() => {
    console.log("use effect", nameParam);
    if (nameParam !== "" && nameParam !== null) {
      setName(nameParam);
      searchPokemon({
        variables: { name: nameParam },
      });
    }
  }, [nameParam, searchPokemon]);

  const pokemon = data?.pokemon;
  if (loading) return <div>Loading</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="pt-5">
      <form
        method="GET"
        onSubmit={(e) => {
          e.preventDefault();
          if (nameParam !== name) {
            const params = new URLSearchParams({ name: name });
            history.replace({ search: params.toString() });
          }
        }}
      >
        <input
          className="border text-gray-500  text-sm font-light p-2"
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button
          type="submit"
          className="border text-gray-500 text-sm font-light p-2"
        >
          Search
        </button>
      </form>
      {pokemon ? (
        <Pokemon pokemon={pokemon}></Pokemon>
      ) : (
        called && <div>not found</div>
      )}
    </div>
  );
}

export default Search;
