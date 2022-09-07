import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios, { AxiosInstance } from 'axios';
import { Model } from 'mongoose';
import { CreatePokemonDto } from 'src/pokemon/dto/create-pokemon.dto';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';


@Injectable()
export class SeedService {

  constructor(@InjectModel( Pokemon.name ) private readonly pokemonModel: Model<Pokemon>) {}

  private readonly axios: AxiosInstance = axios;

  async executeSeed() {

    await this.pokemonModel.deleteMany({}) // DELETE * FROM pokemons

    const { data } = await axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650')

    const pokemonsToInsert: CreatePokemonDto[] = []

    data.results.forEach(async ({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[ segments.length - 2 ]

      pokemonsToInsert.push({ name, no })

      await this.pokemonModel.insertMany(pokemonsToInsert)
      
      return 'Seed Executed'
    })
  }
}
