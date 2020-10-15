require 'pry'
require_relative './tweet.rb'
require_relative './user'
require_relative './like'

coffee_dad = User.new("coffee_dad")
tea_aunt = User.new("tea_aunt")

tweet_1 = coffee_dad.post_tweet("mmmm coffee")
tweet_2 = coffee_dad.post_tweet("drinking my coffee")
tweet_3 = tea_aunt.post_tweet("steeping my tea")
tweet_4 = tea_aunt.post_tweet("ooo la ooolong")
tweet_5 = tea_aunt.post_tweet("peppermint so wintry")


coffee_dad.like_tweet(tweet_3)
coffee_dad.like_tweet(tweet_4)
coffee_dad.like_tweet(tweet_5)
tea_aunt.like_tweet(tweet_1)
tea_aunt.like_tweet(tweet_2)

puts "C_D likes:"
puts coffee_dad.likes
puts ""
puts "T_A liked tweets:"
puts tea_aunt.liked_tweets



binding.pry

