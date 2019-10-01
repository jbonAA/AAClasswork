class Cat < ApplicationRecord
  attr_reader :colors
  include ActionView::Helpers::DateHelper
  COLORS = ["white", "black", "brown", "spotted", "orange"]
  SEXES = ["M", "F"]
  validates :birth_date, presence: true
  validates :color, presence: true, inclusion: COLORS
  validates :sex, presence: true, inclusion: SEXES
  validates :description, presence: true

  has_many :rental_requests, dependent: :destroy,
  foreign_key: :cat_id,
  class_name: :CatRentalRequest

  def age
    age = time_ago_in_words(self.birth_date)
  end
end
