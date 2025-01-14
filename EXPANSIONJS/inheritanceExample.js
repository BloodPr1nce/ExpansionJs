class Person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

class Member extends Person {
    constructor(name, id, membershipType, age) {
        super(name, id); // Call the parent constructor
        this.membershipType = membershipType;
        this.age = age;
        this.booksIssued = new Map();
    }

    issueBook(isbn, title) {
        this.booksIssued.set(isbn, {
            title: title,
            dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week due date
        });
        console.log(`${title} issued to ${this.name}.`);
    }

    getIssuedBooks() {
        console.log(`Books issued to ${this.name}:`, Array.from(this.booksIssued.values()));
    }
}

class Library extends Member {
    constructor(libraryName, libraryId) {
        super(libraryName, libraryId, "Institution", null); // Inherit Member properties
        this.books = new Map(); // Store books by ISBN
        this.members = new Map(); // Store members by ID
    }

    addBook(isbn, title, author, count) {
        if (this.books.has(isbn)) {
            this.books.get(isbn).count += count;
        } else {
            this.books.set(isbn, { title, author, isbn, count });
        }
        console.log(`Added ${count} copies of ${title} to ${this.name}.`); // Using `name` from Member
    }

    registerMember(memberName, age, membershipType) {
        const memberId = Math.floor(Math.random() * 10000); // Random unique ID
        const newMember = new Member(memberName, memberId, membershipType, age);
        this.members.set(memberId, newMember);
        console.log(`Member registered: ${memberName} (ID: ${memberId}) at ${this.name}.`);
        return memberId;
    }

    issueBookToMember(memberId, isbn) {
        if (!this.members.has(memberId)) {
            console.log("Member not found.");
            return;
        }

        if (!this.books.has(isbn) || this.books.get(isbn).count === 0) {
            console.log("Book not available.");
            return;
        }

        const book = this.books.get(isbn);
        const member = this.members.get(memberId);

        book.count--; // Decrease book count in the library
        member.issueBook(isbn, book.title); // Use `issueBook` method from Member
        console.log(`Book issued from ${this.name}.`); // Using `name` from Member
    }

    getLibraryDetails() {
        console.log(`Library Name: ${this.name}`); // Using `name` from Member
        console.log(`Library ID: ${this.id}`); // Using `id` from Member
        console.log("Books:", Array.from(this.books.values()));
        console.log("Members:", Array.from(this.members.values()).map(member => member.name));
    }
}

// Example Usage:
const library = new Library("City Library", 101); // Inherits name and id from Member

// Add books to the library
library.addBook(123, "JavaScript: The Good Parts", "Douglas Crockford", 3);
library.addBook(456, "Eloquent JavaScript", "Marijn Haverbeke", 2);

// Register members
const memberId1 = library.registerMember("Yusuf", 30, "GOLD");
const memberId2 = library.registerMember("Ali", 25, "SILVER");

// Issue books to members
library.issueBookToMember(memberId1, 123);
library.issueBookToMember(memberId2, 456);

// Get library details
library.getLibraryDetails();

// Check books issued by a member
library.members.get(memberId1).getIssuedBooks();
