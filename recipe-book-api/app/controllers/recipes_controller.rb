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
            render json: { recipe: recipe, success: true}
        else
            render json: { success: false, errors: recipe.errors.full_messages }
        end
    end

    def update

    end

    def destroy
        recipe = Recipe.find_by_name(params[:name])
        if (!recipe)
            render json: { success: false, erros: recipe.erros.full_messages }
        else
            recipe.destroy
            render json: { success: true, message: "Recipe Deleted" }
        end
    end

    private

    def recipe_params
        params.require(:recipe).permit(:user_id, :name, :description, :instruction, :category)
    end

end
