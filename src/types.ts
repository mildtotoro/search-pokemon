export interface PokemonDimensionInterface {
  minimum: string;
  maximum: string;
}
export interface AttackInterface {
  name: string;
  type: string;
  damage: number;
}
export interface PokemonAttackInterface {
  fast: AttackInterface[];
  special: AttackInterface[];
}
export interface PokemonEvolutionRequirementInterface {
  amount: number;
  name: string;
}
export interface PokemonInterface {
  id: string;
  number?: string;
  name: string;
  weight?: PokemonDimensionInterface;
  height?: PokemonDimensionInterface;
  classification?: string;
  types?: string[];
  resistant?: string[];
  attacks?: PokemonAttackInterface;
  weaknesses?: string[];
  fleeRate?: number;
  maxCP?: number;
  evolutions?: PokemonInterface[];
  evolutionRequirements?: PokemonEvolutionRequirementInterface;
  maxHP?: number;
  image?: string;
}
export interface PokemonDataInterface {
  pokemon: PokemonInterface;
}
