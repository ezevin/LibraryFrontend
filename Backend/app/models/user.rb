class User < ApplicationRecord
  has_secure_password
  has_many :book_shelves
  has_many :books, through: :book_shelves

end
