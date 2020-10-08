require_relative './tweet.rb'
require_relative './user.rb'

coffee_dad = User.new("coffee_dad")
tea_aunt = User.new("tea_aunt")

tweet_1 = coffee_dad.post_tweet("mmmm coffee")
tweet_2 = coffee_dad.post_tweet("drinking my coffee")
tweet_3 = tea_aunt.post_tweet("steeping my tea")
tweet_4 = tea_aunt.post_tweet("ooo la ooolong")

binding.pry

