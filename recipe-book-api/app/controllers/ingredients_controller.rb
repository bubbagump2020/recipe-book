class IngredientsController < ApplicationController

    def index
        ingredients = Ingredient.all
        render json: ingredients
    end

    def create
        ingredient = Ingredient.new(ingredient_params)
        if ingredient.save
            render json: {ingredient: ingredient, status: :created}
        else
            render json: {errors: ingredient.errors.full_messages }
        end
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
