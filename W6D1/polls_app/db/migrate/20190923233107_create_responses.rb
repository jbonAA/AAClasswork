class CreateResponses < ActiveRecord::Migration[6.0]
  def change
    create_table :responses do |t|
      t.integer "author_id", null: false
      t.integer "answer_id", null: false
    end
  end
end
