const Ksiazka = require('./Book.js')
const fs = require('fs')

fs.writeFileSync('./ksiazki.json', JSON.stringify(new Ksiazka("Pan Tadeusz", "Adam Mickiewicz",
     1873, 001)))


class Library {


    Books = [new Ksiazka("Pan Tadeusz", "Adam Mickiewicz",1873, 001)];
    
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
            if(title === this.Books[i].name && ibsn == this.Books[i].IBSN) {
                console.log(i.name)
                console.log(i.author)
                console.log(i.releaseDate)
                console.log(i.IBSN)
                fs.readFile('./ksiazki.json', (err, data) => {
                    console.log(data);
                })
            }
        }

    }
     addNewBookToLibrary(title, author, releaseDate, IBSN) {
        Books.push(new Ksiazka(title, author, releaseDate, IBSN))
        fs.writeFileSync(`./${title}.json`, JSON.stringify(new Ksiazka(title, author, releaseDate, IBSN)))
        console.log("Książka została pomyślnie dodana do biblioteki")
    }

     deleteBookFromLibrary(title, ibsn) {
        for (i in this.Books) {
            if(title === this.Books[i].name && ibsn == this.Books[i].IBSN) {
                Books.delete(i)
                fs.unlinkSync('./ksiazki.json') 
                console.log("Książka została pomyślnie usunięta z biblioteki")
            }
        }
    }
    

}
module.exports = Library;