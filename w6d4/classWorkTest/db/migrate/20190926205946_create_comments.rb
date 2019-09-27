class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :artist_id, null: false
      t.integer :artwork_id, null: false
      t.text :body, null: false
      t.timestamps
    end

    add_index :comments, [:artist_id, :artwork_id], unique: true
  end
end
