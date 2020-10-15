class TweetsApp

  def call
    intro
    menu
  end
  
  def menu
    
    puts 'Enter a username:'
    username = gets.chomp
    
    puts 'Enter a message:'
    message = gets.chomp
    
    tweet = Tweet.new({'username' => username, 'message' => message})
    
    tweets = Tweet.all
    render(tweets)
    menu
  end
  
  def intro
    
    puts 'Welcome to Twitter'
  end

  private

  def render(tweets)
    tweets.each.with_index(1) do |tweet, i|
      puts "#{i}. #{tweet.username} says: #{tweet.message}"
    end
  end
end
