class Restaurant < ApplicationRecord
  belongs_to :address
  belongs_to :cuisine_type

  validates :name, :cuisine_type_id, :rating, :max_delivery_time, presence: true
  validates :rating, numericality: { greater_than_or_equal_to: 0,
                                     less_than_or_equal_to: 3 }
  validates :max_delivery_time, numericality: { greater_than_or_equal_to: 0 }

  accepts_nested_attributes_for :address

  #validates :cuisine, inclusion: cuisines.values

end
