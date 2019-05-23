class CreateBookShelves < ActiveRecord::Migration[5.2]
  def change
    create_table :book_shelves do |t|
      t.integer :user_id
      t.integer :book_id
      
      t.timestamps
    end
  end
end
