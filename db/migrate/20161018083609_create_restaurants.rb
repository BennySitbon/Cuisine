class CreateRestaurants < ActiveRecord::Migration[5.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.integer :cuisine
      t.integer :rating
      t.boolean :accepts_10bis
      t.integer :max_delivery_time

      t.timestamps
    end
  end
end
