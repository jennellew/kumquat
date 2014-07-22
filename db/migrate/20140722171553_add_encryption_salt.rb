class AddEncryptionSalt < ActiveRecord::Migration
  def change
    rename_column :users, :alphanum_password, :encrypted_password
    add_column :users, :salt, :string
    add_column :users, :salt1, :string
    add_column :users, :salt2, :string
    add_column :users, :salt3, :string
  end
end
