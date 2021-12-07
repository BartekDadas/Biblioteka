
const Ksiazka = require('./Book.js')
const Library = require('./Library.js')

const library = new Library();
library.addNewBookToLibrary("Pan Tadeusz", "Adam Mickiewicz",1873, 001)
library.readChoosenBook("Pan Tadeusz", 001)
library.addNewBookToLibrary("Lalka","Boleslaw Prus","1883",002)
library.addNewBookToLibrary("Dziady","Adam Mickiewicz","1815",003)
library.showBookISBN(002)
library.deleteBookFromLibrary("Pan Tadeusz",001)