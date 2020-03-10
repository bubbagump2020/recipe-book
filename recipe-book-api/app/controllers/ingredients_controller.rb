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
        
        ingredient = Ingredient.find_by(params[:name])
        if (!ingredient)
            render json: { error_message: "Unable to find ingredient" }
        else
            ingredient.destroy
            render json: { message: "Ingredient deleted"}
        end
    end

    private

    def ingredient_params
        params.require(:ingredient).permit(:recipe_id, :name, :measurement)
    end


end
