# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([{username: 'a1'}, {username: 'a2'}, {username: 'a3'}])
a1 = Artwork.create([{title: 'a1works', image_url: 'afjdngs', artist_id: 1}])
a2 = Artwork.create([{title: 'a2works', image_url: 'fsggsdngs', artist_id: 2}])
a3 = Artwork.create([{title: 'a3works', image_url: 'fsgs', artist_id: 3}])
ArtworkShare.create([{artwork_id: 1, viewer_id: 1} ])
ArtworkShare.create([{artwork_id: 2, viewer_id: 2} ])
ArtworkShare.create([{artwork_id: 3, viewer_id: 3} ])