# == Schema Information
#
# Table name: artworks
#
#  id        :bigint           not null, primary key
#  title     :string           not null
#  image_url :text             not null
#  artist_id :integer          not null
#

class Artwork < ApplicationRecord
  validates :artist_id, uniqueness: true
  validates :title, uniqueness: true

  belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :User
  
  has_many :artwork_shares, dependent: :destroy,
    foreign_key: :artwork_id,
    class_name: :ArtworkShare
  
  has_many :shared_viewers, dependent: :destroy,
    through: :artwork_shares,
    source: :viewer

  has_many :comments, dependent: :destroy,
    foreign_key: :artwork_id,
    class_name: :Comment

  has_many :likers, as: :likeable
end
