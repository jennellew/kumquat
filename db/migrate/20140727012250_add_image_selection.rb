class AddImageSelection < ActiveRecord::Migration
  def change
    add_column :users, :image_selection, :text, array: true, default: []
  end
end
