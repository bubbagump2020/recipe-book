class AddInstructionsToRecipes < ActiveRecord::Migration[6.0]
  def change
    add_column :recipes, :instruction, :string
  end
end
