# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  artist_id  :integer          not null
#  artwork_id :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :artist_id, presence: true
  validates :artwork_id, presence: true
  validates :body, presence: true
  validates :artist_id, uniqueness: { scope: :artwork_id }

  belongs_to :artwork,
    foreign_key: :artwork_id,
    class_name: :Artwork
  
  belongs_to :user,
    foreign_key: :artist_id,
    class_name: :User

  has_many :likers, as: :likeable
end
