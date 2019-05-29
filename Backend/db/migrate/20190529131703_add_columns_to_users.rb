class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :age, :integer
    add_column :users, :about_me, :string
    add_column :users, :picture, :string
  end
end
