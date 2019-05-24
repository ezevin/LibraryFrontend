class User < ApplicationRecord
  belongs_to :bookshelf
  has_many :books, through: :bookshelf

  # has_secure_password

end
