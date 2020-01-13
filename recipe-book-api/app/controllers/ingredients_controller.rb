class IngredientsController < ApplicationController

    def index
        ingredients = Ingredient.all
        render json: ingredients
    end

    def create

    end

    def update

    end

    def destroy

    end

    private

    def ingredient_params
        params.require(:ingredient).permit(:recipe_id, :name, :measurement)
    end


end
