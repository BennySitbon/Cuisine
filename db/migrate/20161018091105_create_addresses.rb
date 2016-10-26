class CreateAddresses < ActiveRecord::Migration[5.0]
  def change
    create_table :addresses do |t|
      t.integer :house_number
      t.string :street
      t.string :city

      t.timestamps
    end
  end
end
