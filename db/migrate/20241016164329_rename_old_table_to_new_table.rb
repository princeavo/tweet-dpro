class RenameOldTableToNewTable < ActiveRecord::Migration[7.2]
  def change
    rename_table :tweets, :posts
  end
end
