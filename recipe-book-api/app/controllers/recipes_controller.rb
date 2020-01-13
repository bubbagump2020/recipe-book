class RecipesController < ApplicationController

    def index
        recipes = Recipe.all
        render json: recipes
    end

    def show
        recipe = Recipe.find_by(params[:id])
        if (recipe == null)
            render json: "Unable to find recipe"
        else
            render json: recipe
        end
    end

    def create
        recipe = Recipe.new(recipe_params)
        if recipe.save
            render json: (:recipe, "Recipe created!" )
    end

    def update

    end

    def delete

    end

    private

    def recipe_params
        params.require(:recipe).permit(:title, :ingredients, :description)
    end

end
