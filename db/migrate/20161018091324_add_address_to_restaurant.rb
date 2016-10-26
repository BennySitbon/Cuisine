class AddAddressToRestaurant < ActiveRecord::Migration[5.0]
  def change
    add_reference :restaurants, :address, foreign_key: true
  end
end
