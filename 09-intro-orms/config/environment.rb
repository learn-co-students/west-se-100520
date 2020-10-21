require 'bundler'
Bundler.require
# require 'pry'

DB = {
  conn: SQLite3::Database.new('db/twitter.db')
}

# module SQLite3

#   class Database
#     def execute

#     end
#   end
# end
sql =  <<-SQL
      CREATE TABLE IF NOT EXISTS tweets (
        id INTEGER PRIMARY KEY,
        username TEXT,
        message TEXT
        )
    SQL
DB[:conn].execute(sql)   
DB[:conn].results_as_hash = true

require_relative '../lib/tweet.rb'
require_relative '../lib/tweets_app.rb'
