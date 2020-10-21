require 'bundler/setup'
require 'pry'
Bundler.require
require_all 'lib'

fuzzy = Cat.new("Fuzzy", "Russian blue")

binding.pry