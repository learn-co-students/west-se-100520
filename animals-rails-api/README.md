## SWBAT

- Return RESTful responses from a Rails backend
- Render JSON data from an endpoint
- Recognize situations where JSON APIs are appropriate
- Understand the HTTP request/response cycle

## Installing

In its current state, you will need to serve the (static) front end files using a server like `http-server`
- if you don't have it installed, you can install:
    - globally with `npm install -g http-server`
    - globally with `brew install http-server`
    - running on demand with `npx http-server`
    - as a project dependency with `npm install http-server`

## Usage
- `cd` a terminal into your backend directory
- run `rails s` there
- open another terminal
- `cd` into your frontend directory
- run `http-server -o`
- now you can view your `html` file by going to `localhost:8080` in your browser

## Why?
This setup allow us to use stricter CORS security in `cors.rb` on the backend.  If you don't wish to install and use `http-server` in development, you can change the appropriate line in `cors.rb` to `origin '*'` to circumvent Rails' CORS protections.
