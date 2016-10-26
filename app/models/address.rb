class Address < ApplicationRecord
  validates :house_number, :street, :city, presence: true
  has_many :restaurants
end
