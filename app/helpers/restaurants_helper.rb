module RestaurantsHelper
  def full_address(address)
    unless address.nil?
      "#{address.house_number} #{address.street}, #{address.city}"
    else
      #Shouldn't have magic strings
      "No address on file"
    end
  end
end
