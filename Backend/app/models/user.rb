class User < ApplicationRecord
  has_secure_password
  has_many :bookshelves
  has_many :books, through: :bookshelves

  # has_secure_password

end
