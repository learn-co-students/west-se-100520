class ApplicationController < Sinatra::Base

    set :views, 'app/views'
    set :method_override, true

    get '/books' do
        @books = Book.all
        erb :index
    end
    
    get '/books/new' do
        erb :new
    end

    post '/books' do 
    #    Book.create(title: params[:title], author: params[:author])
        Book.create(params)
       redirect '/books'
    end

    get '/books/:id' do
        @book = Book.find(params[:id])
        erb :show
    end

    get '/books/:id/edit' do
        @book = Book.find(params[:id])
        erb :edit
    end

    patch '/books/:id' do
        book = Book.find(params[:id])
        # binding.pry
        book.update(title: params[:title], author: params[:author])
        redirect "/books/#{book.id}"
    end 

    delete '/books/:id' do
        book = Book.find(params[:id])
        book.destroy
        redirect '/books'
    end


end
