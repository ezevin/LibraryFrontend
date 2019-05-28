# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Users
jim = User.create(name: "Jim", password_digest: 'topsecret')
sally = User.create(name: "Sally", password: "wow")
abby = User.create(name: "Abby", password: "wow")
dan = User.create(name: "Dan", password: "wow")

#Books

harry = Book.find_or_create_by(title: "Harry Potter and the Sorcerer's Stone", author: "J. K. Rowling", genre: "Fantasy", description: "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!", image: "https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg")
time = Book.find_or_create_by(title: "A Brief History of Time", author: "Stephen Hawking", genre: "Science", description: "A landmark volume in science writing by one of the great minds of our time, Stephen Hawking’s book explores such profound questions as: How did the universe begin—and what made its start possible? Does time always flow forward? Is the universe unending—or are there boundaries? Are there other dimensions in space? What will happen when it all ends?

Told in language we all can understand, A Brief History of Time plunges into the exotic realms of black holes and quarks, of antimatter and “arrows of time,” of the big bang and a bigger God—where the possibilities are wondrous and unexpected. With exciting images and profound imagination, Stephen Hawking brings us closer to the ultimate secrets at the very heart of creation.", image: "https://images-na.ssl-images-amazon.com/images/I/51%2BGySc8ExL._SX333_BO1,204,203,200_.jpg")
pride = Book.find_or_create_by(title: "Pride and Prejudice", author: "Jane Austen", genre: "Classic", description: "One of the most universally loved and admired English novels, Pride and Prejudice was penned as a popular entertainment. But the consummate artistry of Jane Austen (1775–1817) transformed this effervescent tale of rural romance into a witty, shrewdly observed satire of English country life that is now regarded as one of the principal treasures of English language.
In a remote Hertfordshire village, far off the good coach roads of George III's England, a country squire of no great means must marry off his five vivacious daughters. At the heart of this all-consuming enterprise are his headstrong second daughter Elizabeth Bennet and her aristocratic suitor Fitzwilliam Darcy — two lovers whose pride must be humbled and prejudices dissolved before the novel can come to its splendid conclusion.", image: "https://images-na.ssl-images-amazon.com/images/I/515JUEwmftL._SX326_BO1,204,203,200_.jpg")
devil = Book.find_or_create_by(title: "The Devil in the White City: Murder, Magic, and Madness at the Fair That Changed America", author: "Erik Larson", genre: "Historical", description: "In The Devil in the White City, the smoke, romance, and mystery of the Gilded Age come alive as never before.

Two men, each handsome and unusually adept at his chosen work, embodied an element of the great dynamic that characterized America’s rush toward the twentieth century. The architect was Daniel Hudson Burnham, the fair’s brilliant director of works and the builder of many of the country’s most important structures, including the Flatiron Building in New York and Union Station in Washington, D.C. The murderer was Henry H. Holmes, a young doctor who, in a malign parody of the White City, built his “World’s Fair Hotel” just west of the fairgrounds—a torture palace complete with dissection table, gas chamber, and 3,000-degree crematorium.

Burnham overcame tremendous obstacles and tragedies as he organized the talents of Frederick Law Olmsted, Charles McKim, Louis Sullivan, and others to transform swampy Jackson Park into the White City, while Holmes used the attraction of the great fair and his own satanic charms to lure scores of young women to their deaths. What makes the story all the more chilling is that Holmes really lived, walking the grounds of that dream city by the lake.

The Devil in the White City draws the reader into a time of magic and majesty, made all the more appealing by a supporting cast of real-life characters, including Buffalo Bill, Theodore Dreiser, Susan B. Anthony, Thomas Edison, Archduke Francis Ferdinand, and others. Erik Larson’s gifts as a storyteller are magnificently displayed in this rich narrative of the master builder, the killer, and the great fair that obsessed them both.", image: "https://images-na.ssl-images-amazon.com/images/I/51cdhA7uj0L._SX314_BO1,204,203,200_.jpg")
anne = Book.find_or_create_by(title: "The Diary of a Young Girl", author: "Anne Frank", genre: "Autobiography", description: "In The Devil in the White City, the smoke, romance, and mystery of the Gilded Age come alive as never before.

Two men, each handsome and unusually adept at his chosen work, embodied an element of the great dynamic that characterized America’s rush toward the twentieth century. The architect was Daniel Hudson Burnham, the fair’s brilliant director of works and the builder of many of the country’s most important structures, including the Flatiron Building in New York and Union Station in Washington, D.C. The murderer was Henry H. Holmes, a young doctor who, in a malign parody of the White City, built his “World’s Fair Hotel” just west of the fairgrounds—a torture palace complete with dissection table, gas chamber, and 3,000-degree crematorium.

Burnham overcame tremendous obstacles and tragedies as he organized the talents of Frederick Law Olmsted, Charles McKim, Louis Sullivan, and others to transform swampy Jackson Park into the White City, while Holmes used the attraction of the great fair and his own satanic charms to lure scores of young women to their deaths. What makes the story all the more chilling is that Holmes really lived, walking the grounds of that dream city by the lake.

The Devil in the White City draws the reader into a time of magic and majesty, made all the more appealing by a supporting cast of real-life characters, including Buffalo Bill, Theodore Dreiser, Susan B. Anthony, Thomas Edison, Archduke Francis Ferdinand, and others. Erik Larson’s gifts as a storyteller are magnificently displayed in this rich narrative of the master builder, the killer, and the great fair that obsessed them both.", image: "https://images-na.ssl-images-amazon.com/images/I/51EPqZ9kFnL._SX309_BO1,204,203,200_.jpg")

#Join Table

user1 = BookShelf.find_or_create_by(user_id: 1, book_id: 2)
user2 = BookShelf.find_or_create_by(user_id: 1, book_id: 4)
user3 = BookShelf.find_or_create_by(user_id: 2, book_id: 3)
user4 = BookShelf.find_or_create_by(user_id: 3, book_id: 5)
user5 = BookShelf.find_or_create_by(user_id: 4, book_id: 2)
