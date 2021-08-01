import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
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

function Search() {
  const [name, setName] = useState("Squirtle");

  const [searchPokemon, { loading, data, error }] =
    useLazyQuery<PokemonDataInterface>(GET_POKEMON);

  const pokemon = data?.pokemon;
  console.log({ data });
  if (loading) return <div>Loading</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div>
      <form
        method="GET"
        onSubmit={(e) => {
          e.preventDefault();
          searchPokemon({
            variables: { name: name },
          });
        }}
      >
        <input
          className="border"
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button type="submit">ok</button>
      </form>
      {pokemon ? (
        <div className="relative m-5 sm:w-3/5 mx-auto">
          <div className="sm:absolute bg-white p-4 h-32 w-full sm:w-32 top-5 -left-5 border border-solid rounded-sm drop-shadow-md border-gray-300">
            <div
              className="w-full h-full bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${pokemon.image})` }}
            ></div>
          </div>
          <div className=" p-5 sm:pl-32 text-left border-solid border rounded-sm border-gray-300">
            <h2 className="text-yellow-600 uppercase">{pokemon.name}</h2>
            <div className="grid grid-cols-5 gap-x-1 text-xs text-gray-600">
              <div className="">Weight</div>
              <div className="col-span-4">
                <h5 className=" ">
                  {pokemon.weight.minimum}-{pokemon.weight.maximum}
                </h5>
              </div>
              {/*  */}
              <div className="">Height</div>
              <div className="col-span-4">
                <h5 className=" ">
                  {pokemon.height.minimum}-{pokemon.height.maximum}
                </h5>
              </div>
              {/*  */}
              <div className="">Classification</div>
              <div className="col-span-4">
                <h5 className=" ">{pokemon.classification}</h5>
              </div>
              {/*  */}
              <div className="">Type</div>
              <div className="col-span-4">
                <h5 className=" ">
                  {pokemon.types &&
                    pokemon.types.map((item) => {
                      return item + " ";
                    })}
                </h5>
              </div>
              {/*  */}
              <div className="">Resistant</div>
              <div className="col-span-4">
                <h5 className=" ">
                  {pokemon.resistant &&
                    pokemon.resistant.map((item) => {
                      return item + " ";
                    })}
                </h5>
              </div>
              {/*  */}
              <div className="">Attacks</div>
              <div className="col-span-4">
                <h5 className=" ">
                  <div>fast</div>

                  {pokemon.attacks &&
                    pokemon.attacks.fast.map((item) => {
                      return (
                        <div>
                          name: {item.name}
                          type: {item.type}
                          damage: {item.damage}
                        </div>
                      );
                    })}
                </h5>
                <h5 className=" ">
                  <div>Special</div>

                  {pokemon.attacks &&
                    pokemon.attacks.special.map((item) => {
                      return (
                        <div>
                          name: {item.name}
                          type: {item.type}
                          damage: {item.damage}
                        </div>
                      );
                    })}
                </h5>
              </div>
              {/*  */}
              <div className="">Weaknesses</div>
              <div className="col-span-4">
                <h5 className=" ">
                  {pokemon.weaknesses &&
                    pokemon.weaknesses.map((item) => {
                      return item + " ";
                    })}
                </h5>
              </div>

              {/*  */}
              <div className="">FleeRate</div>
              <div className="col-span-4">
                <h5 className=" ">{pokemon.fleeRate}</h5>
              </div>
              {/*  */}
              <div className="">Max CP</div>
              <div className="col-span-4">
                <h5 className=" ">{pokemon.maxCP}</h5>
              </div>
              {/*  */}
              <div className="">evolutions</div>
              <div className="col-span-4">
                <h5 className=" ">
                  {pokemon.evolutions &&
                    pokemon.evolutions.map((item) => {
                      return item.name;
                    })}
                </h5>
              </div>
              {/*  */}
              <div className="">evolutionRequirements</div>
              <div className="col-span-4">
                {pokemon.evolutionRequirements && (
                  <>
                    <h5 className=" ">
                      Amount{pokemon.evolutionRequirements.amount}
                    </h5>
                    <h5 className=" ">
                      Name{pokemon.evolutionRequirements.name}
                    </h5>
                  </>
                )}
              </div>
              <div className="">Max HP</div>
              <div className="col-span-4">
                <h5 className=" ">{pokemon.maxHP}</h5>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      ) : (
        <div>not found</div>
      )}
    </div>
  );
}

export default Search;
