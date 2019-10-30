json.pokemon @poke 
json.items @poke.items.each do |item|
  json.set! item.id do 
    json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url 
  end
end
