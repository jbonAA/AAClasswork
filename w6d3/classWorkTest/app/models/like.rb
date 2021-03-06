# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  likeable_id   :integer          not null
#  likeable_type :string           not null
#  user_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Like < ApplicationRecord
  validates :likeable_id, presence: true
  validates :likeable_type, presence: true
  validates :user_id, presence: true, uniqueness: true


  belongs_to :likeable, polymorphic: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User


end
