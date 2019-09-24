class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :genre, :description, :image, :rented

  def rented
    if (Object.users.length > 0)
      return true
    else
      return false
    end
  end
end
