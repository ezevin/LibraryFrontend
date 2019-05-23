# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Users
bob = User.find_or_create_by(name: "Bob")
jim = User.find_or_create_by(name: "Jim")
sally = User.find_or_create_by(name: "Sally")
abby = User.find_or_create_by(name: "Abby")
dan = User.find_or_create_by(name: "Dan")

#Books

harry = Book.find_or_create_by(title: "Harry Potter and the Sorcerer's Stone", author: "J. K. Rowling", genre: "Fantasy", image: "https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg")
time = Book.find_or_create_by(title: "A Brief History of Time", author: "Stephen Hawking", genre: "Science", image: "https://images-na.ssl-images-amazon.com/images/I/51%2BGySc8ExL._SX333_BO1,204,203,200_.jpg")
pride = Book.find_or_create_by(title: "Pride and Prejudice", author: "Jane Austen", genre: "Classic", image: "https://images-na.ssl-images-amazon.com/images/I/515JUEwmftL._SX326_BO1,204,203,200_.jpg")
devil = Book.find_or_create_by(title: "The Devil in the White City: Murder, Magic, and Madness at the Fair That Changed America", author: "Erik Larson", genre: "Historical", image: "https://images-na.ssl-images-amazon.com/images/I/51cdhA7uj0L._SX314_BO1,204,203,200_.jpg")
anne = Book.find_or_create_by(title: "The Diary of a Young Girl", author: "Anne Frank", genre: "Autobiography", image: "https://images-na.ssl-images-amazon.com/images/I/51EPqZ9kFnL._SX309_BO1,204,203,200_.jpg")

#Join Table

user1 = BookShelf.find_or_create_by(user_id: 1, book_id: 2)
user2 = BookShelf.find_or_create_by(user_id: 1, book_id: 4)
user3 = BookShelf.find_or_create_by(user_id: 2, book_id: 3)
user4 = BookShelf.find_or_create_by(user_id: 3, book_id: 5)
user5 = BookShelf.find_or_create_by(user_id: 4, book_id: 2)
