class Restaurant < ApplicationRecord
  belongs_to :address

  validates :name, :cuisine, :rating, :max_delivery_time, presence: true
  validates :rating, numericality: { greater_than_or_equal_to: 0,
                                     less_than_or_equal_to: 3 }
  validates :max_delivery_time, numericality: { greater_than_or_equal_to: 0 }

  accepts_nested_attributes_for :address

  enum cuisines: {
      "American"        => 0,
      "Asian"           => 1,
      "Middle Eastern"  => 2
  }

  validates :cuisine, inclusion: cuisines.values

end
