class CatRentalRequest < ApplicationRecord
  STATUSES = ['PENDING', 'APPROVED', 'DENIED']
  validates :cat_id, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true
  validates :status, presence: true, inclusion: STATUSES

  belongs_to :cat,
  foreign_key: :cat_id,
  class_name: :Cat

  def overlapping_requests

    CatRentalRequest.where(start_date: BETWEEN (self.start_date..self.end_date)).or(CatRentalRequest.where(end_date: BETWEEN (self.start_date..self.end_date)))
  end
end
