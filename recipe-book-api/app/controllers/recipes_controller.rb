class RecipesController < ApplicationController

    def index
        recipes = Recipe.all
        render json: recipes
    end

    def show
        recipe = Recipe.find_by(params[:id])
        if (!recipe)
            render json: "Unable to find recipe"
        else
            render json: recipe
        end
    end

    def create
        recipe = Recipe.new(recipe_params)
        if recipe.save
            render json: {recipe: recipe, status: :created}
        else
            render json: "Recipe not saved"
        end
    end

    def update

    end

    def delete

    end

    private

    def recipe_params
        params.require(:recipe).permit(:user_id, :name, :description, :instruction, :category)
    end

end
