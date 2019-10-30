json.extract! @party, :name, :location
json.guests @party.guests 
# debugger
@party.guests do |guest|
  guest.gifts gift, :title

end