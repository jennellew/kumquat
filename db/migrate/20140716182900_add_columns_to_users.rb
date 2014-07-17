class AddColumnsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :alphanum_password, :string
    add_column :users, :password1, :string
    add_column :users, :password2, :string
    add_column :users, :password3, :string
  end
end

