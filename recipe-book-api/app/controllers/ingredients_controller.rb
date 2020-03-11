class IngredientsController < ApplicationController

    def index
        ingredients = Ingredient.all
        render json: ingredients
    end

    def create
        ingredient = Ingredient.new(ingredient_params)
        if ingredient.save
            render json: { success: true, ingredient: ingredient, status: "Ingredient created"}
        else
            render json: { success: false, errors: ingredient.errors.full_messages }
        end
    end

    def update

    end

    def destroy
        ingredient = Ingredient.find_by(params[:name])
        if (!ingredient)
            render json: { success: false, errors: ingredient.errors.full_messages }
        else
            ingredient.destroy
            render json: { success: true, message: "Ingredient deleted"}
        end
    end

    private

    def ingredient_params
        params.require(:ingredient).permit(:recipe_id, :name, :measurement)
    end


end
