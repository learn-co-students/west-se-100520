require 'rest-client'
require 'json'
require 'pry'



def get_title(book)
    book["volumeInfo"]["title"]
end

def get_authors(book)
    if book["volumeInfo"]["authors"]
        authors = book["volumeInfo"]["authors"].join(" & ")
    else
        authors = "No authors found"
    end
end

def get_description(book)
    if  book["volumeInfo"]["description"]
        description  = book["volumeInfo"]["description"][0..140]
    else
        description = "No description available"
    end
end

def welcome
    puts "Welcome to BookSearcher"
    puts "Please enter a search term: "
end

# * Write an application that takes a search term from a user

# * Make a Request to the GoogleBooks API and get back some results\

def fetch_books(search_term)
    response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{search_term}")
    JSON.parse(response.body)
end
# * Display the titles, author names, and description for each book
def print_book(title, authors, description)
    puts "<>" * 30
    puts "Title: #{title}"
    puts "Authors: #{authors}"
    puts "Description: #{description}"
end

def run
    welcome
    search_term = gets.strip
    fetch_books(search_term)["items"].each do |book|
        title = get_title(book)
        authors = get_authors(book)
        description = get_description(book)
        # Book.new(title, authors, description)

        print_book(title, authors, description)

    end
end

run