class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :likes, :likable_type, :likeable_type
  end
end
