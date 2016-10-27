class Address < ApplicationRecord
  geocoded_by :full_address
  validates :house_number, :street, :city, presence: true
  has_many :restaurants
  after_validation :geocode

  def full_address()
    unless city.nil?
      "#{house_number} #{street}, #{city}"
    end
  end
end
