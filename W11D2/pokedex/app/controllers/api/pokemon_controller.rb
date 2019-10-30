class Api::PokemonController < ApplicationController

  def index
    @pokemons = Pokemon.all
  end

  def show
    @poke = Pokemon.find(params[:id])
  end

end
