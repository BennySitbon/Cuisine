class RenamedRestaurantCuisineToCuisineTypesId < ActiveRecord::Migration[5.0]
  def change
    add_reference :restaurants, :cuisine_type, foreign_key: true
  end
end
