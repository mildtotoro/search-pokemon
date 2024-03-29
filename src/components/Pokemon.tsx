import { PokemonInterface } from "../types";
import { Link } from "react-router-dom";

const Pokemon = ({ pokemon }: { pokemon: PokemonInterface }) => {
  return (
    <div className="relative m-5 sm:w-3/5 mx-auto">
      <div className="mx-auto sm:absolute bg-white p-4 h-32 w-32 top-5 -left-5 border border-solid rounded-sm drop-shadow-md border-gray-300">
        <div
          className="w-full h-full bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${pokemon.image})` }}
        ></div>
      </div>
      <div className="hidden sm:block sm:absolute bg-white p-1 h-10 w-full sm:w-32 top-36 -left-5 border border-solid rounded-sm drop-shadow-md border-gray-300">
        <div className="text-xs font-sans text-left">
          <div className="font-extralight">
            W: {pokemon.weight?.minimum} - {pokemon.weight?.maximum}
          </div>
          <div className="font-extralight">
            H: {pokemon.height?.minimum} - {pokemon.height?.maximum}
          </div>
        </div>
      </div>
      <div className="mt-3 sm:mt-0 p-5 sm:pl-32 text-left border-solid border rounded-sm border-gray-300">
        <h2 className="text-yellow-600 uppercase font-bold inline">
          {pokemon.name}
        </h2>

        <h4
          data-testid="pokemon-types"
          className="text-gray-500 font-light text-xs inline pl-3"
        >
          <ul className="comma-list">
            (
            {pokemon.types &&
              pokemon.types.map((item, i) => {
                return (
                  <li className="inline" key={item}>
                    {item}
                  </li>
                );
              })}
            )
          </ul>
        </h4>
        <div className="mt-5 grid grid-cols-7 sm:grid-cols-5 gap-x-1 gap-y-2 text-xs text-gray-600">
          <div className="col-span-3 sm:col-span-1 font-extralight">HP</div>
          <div className="col-span-4">
            <h5 className="font-light">{pokemon.maxHP}</h5>
          </div>
          {/*  */}
          <div className="col-span-3 sm:col-span-1 font-extralight">CP</div>
          <div className="col-span-4">
            <h5 className="font-light">{pokemon.maxCP}</h5>
          </div>
          {/*  */}
          <div className="col-span-3 sm:col-span-1 font-extralight">
            Flee Rate
          </div>
          <div className="col-span-4">
            <h5 className="font-light">{pokemon.fleeRate}</h5>
          </div>

          {/*  */}
          <div className="sm:hidden block col-span-3 sm:col-span-1 font-extralight">
            Weight
          </div>
          <div className="sm:hidden block col-span-4">
            <h5 className="font-light">
              {pokemon.weight?.minimum} - {pokemon.weight?.maximum}
            </h5>
          </div>
          {/*  */}
          <div className="sm:hidden sblock col-span-3 sm:col-span-1 font-extralight">
            Height
          </div>
          <div className="sm:hidden block col-span-4">
            <h5 className="font-light">
              {pokemon.height?.minimum} - {pokemon.height?.maximum}
            </h5>
          </div>
          {/*  */}
          <div className="col-span-3 sm:col-span-1 font-extralight">
            Classification
          </div>
          <div className="col-span-4">
            <h5 className="font-light">{pokemon.classification}</h5>
          </div>

          {/*  */}
          <div className="col-span-3 sm:col-span-1 font-extralight">
            Resistant
          </div>
          <div className="col-span-4">
            <h5 className="font-light">
              <ul className="comma-list">
                {pokemon.resistant &&
                  pokemon.resistant.map((item, i) => {
                    return (
                      <li className="inline" key={item}>
                        {item}
                      </li>
                    );
                  })}
              </ul>
            </h5>
          </div>
          {/*  */}

          <div className="col-span-3 sm:col-span-1 font-extralight">
            Weaknesses
          </div>
          <div className="col-span-4">
            <h5 className="font-light">
              <ul className="comma-list">
                {pokemon.weaknesses &&
                  pokemon.weaknesses.map((item, i) => {
                    return (
                      <li className="inline" key={item}>
                        {item}
                      </li>
                    );
                  })}
              </ul>
            </h5>
          </div>

          {/*  */}
          <div className="col-span-3 sm:col-span-1 font-extralight">
            Evolutions
          </div>
          <div className="col-span-4">
            <h5 className="font-light">
              <ul className="comma-list">
                {pokemon.evolutions &&
                  pokemon.evolutions.map((item) => {
                    const params = new URLSearchParams({ name: item.name });
                    return (
                      <li key={item.id} className="inline">
                        <Link
                          className="underline"
                          to={{
                            search: params.toString(),
                          }}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </h5>
          </div>
          {/*  */}
          <div className="col-span-3 sm:col-span-1 font-extralight">
            Evolution Requirements
          </div>
          <div className="col-span-4">
            {pokemon.evolutionRequirements && (
              <>
                <h5 className="font-light">
                  {pokemon.evolutionRequirements.name}{" "}
                  {pokemon.evolutionRequirements.amount} ea
                </h5>
              </>
            )}
          </div>

          {/*  */}
          <div className="col-span-3 sm:col-span-1 font-extralight">
            Attacks
          </div>
          <div className="col-span-4">
            <div className="sm:flex">
              <h5 className="font-light flex-1">
                <div className="mb-2">Fast</div>
                {pokemon.attacks &&
                  pokemon.attacks.fast.map((item) => {
                    return (
                      <div className="font-light" key={item.name}>
                        <span className="font-extralight">{item.name}</span> (
                        {item.type}) ({item.damage})
                      </div>
                    );
                  })}
              </h5>
              <h5 className="pt-3 sm:pt-0 font-light flex-1">
                <div className="mb-2">Special </div>
                {pokemon.attacks &&
                  pokemon.attacks.special.map((item) => {
                    return (
                      <div className="font-light" key={item.name}>
                        <span className="font-extralight">{item.name}</span> (
                        {item.type}) ({item.damage})
                      </div>
                    );
                  })}
              </h5>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
