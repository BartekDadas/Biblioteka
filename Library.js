const Ksiazka = require('./Book.js')
const fs = require('fs')

fs.writeFileSync('./ksiazki.json', JSON.stringify(new Ksiazka("Pan Tadeusz", "Adam Mickiewicz",
     1873, 001)))


class Library {
    

    Books = []
    showBookISBN(title) {
        for(let i in this.Books) {
            if(title === i.name) {
               console.log(i.IBSN)
            }
            if(title == undefined) {
                console.log("Takiej ksiązki nie ma w bibliotece")
            }
        }
    }

    readChoosenBook(title, ibsn) {
        for (let i in this.Books) {
            //console.log(title, this.Books[i].name, ibsn, this.Books[i].ISBN)
            if(title === this.Books[i].name && ibsn == this.Books[i].ISBN) {
                console.log(this.Books[i].name)
                console.log(this.Books[i].author)
                console.log(this.Books[i].releaseDate)
                console.log(this.Books[i].ISBN)
                const data = fs.readFileSync('./ksiazki.json');
                console.log(data.toString())

            }
        }

    }
     addNewBookToLibrary(title, author, releaseDate, IBSN) {
        this.Books.push(new Ksiazka(title, author, releaseDate, IBSN))
        fs.writeFileSync(`./${title}.json`, JSON.stringify(new Ksiazka(title, author, releaseDate, IBSN)))
        console.log("Książka została pomyślnie dodana do biblioteki")
    }

     deleteBookFromLibrary(title, ibsn) {
        for (let i in this.Books) {
            if(title === this.Books[i].name && ibsn == this.Books[i].ISBN) {
                delete this.Books[i]
                fs.unlinkSync(`./${title}.json`) 
                console.log("Książka została pomyślnie usunięta z biblioteki")
            }
        }
    }
    

}
module.exports = Library;