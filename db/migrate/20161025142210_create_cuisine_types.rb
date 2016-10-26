class CreateCuisineTypes < ActiveRecord::Migration[5.0]
  def change
    create_table :cuisine_types do |t|
      t.string :name
      t.string :font_letter, limit: 1

      t.timestamps
    end
  end
end
