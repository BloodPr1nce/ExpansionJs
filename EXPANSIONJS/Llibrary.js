class Person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

class Member extends Person {
    constructor(membershipType, memberId, name, age) {
        this.membershipType = membershipType;
        // this.memberId = memberId;
        // this.name = name;
        this.age = age;
        super(name, memberId);
    }
}

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class Library extends Member {
    constructor() {
        this.books = new Map();
        this.members = new Map();
        this.loans = [];
        this.MemberID = Math.abs(Math.random());
    }

    addBooks(isbn, title, memberId) {
        this.books.set(isbn, {
            "Title": title,
            "MemberID": memberId,
            "Count": this.books.get(isbn).Count === null ? 1 : this.books.get(isbn).Count++,
        });

        console.log(this.books.get(isbn));
    }

    RegisterMembers(name, age, membershipType) {

        this.members.set(this.MemberID++, {
            "Name": name,
            "Age": age,
            "MembershipType": membershipType,
            "BooksIssued": new Map(),
        });

        console.log(this.members.get(this.MemberID-1));
    }

    IssueBook(memberId, name, isbn, title) {

        if (this.members.has(memberId) && this.books.has(isbn) && this.books.get(isbn).Count > 0) {
            this.books.set(
                isbn, {
                "Count": this.books.get(isbn).Count--,
            }
            )

            this.members.set(memberId, {
                "BooksIssued" : this.members.get(memberId).BooksIssued.set(isbn , {
                    "Title": title,
                    "Due-Date" : new Date(),
                    "Left-Books" : this.books.get(isbn).Count,
                })
            })

            console.log(this.members.get(memberId))
        }

        else if(this.books.get(isbn).Count === 0) {
            return "No Books Free As Of Now";           
        }

        else {
            return "Book Not Available";
        }
    }
}

const lib = new Library();
lib.RegisterMembers("Yusuf", "100", "GOLD");
lib.addBooks(123, "JavaScript", 1);
lib.



