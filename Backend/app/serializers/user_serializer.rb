class UserSerializer < ActiveModel::Serializer
  has_many :book_shelves
  has_many :books, through: :book_shelves
  attributes :id, :name, :age, :about_me, :picture, :password, :books

end
