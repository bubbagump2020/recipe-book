class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :title
      t.text :ingredients
      t.text :description

      t.timestamps
    end
  end
end
