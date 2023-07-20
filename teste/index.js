

const book = {
    bookTitle: 'atomic habits',
    bookAuthor: 'James Clear',
    bookPages: 306,
    bookChapters: {
        chap1: 'Fundamentals',
        chap2: '1st law'
    },

    printBook: function() {
        console.log('printing...')
    }
}

book.printBook()