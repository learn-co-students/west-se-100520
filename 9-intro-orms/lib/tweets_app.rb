class TweetsApp

  def call
    intro
    menu
  end
  
  def menu
    loop do
      display_menu_options
      choice = gets.strip
      
      case choice
      when "n"
        puts 'Enter a username:'
        username = gets.chomp
        
        puts 'Enter a message:'
        message = gets.chomp
        
        tweet = Tweet.new({'username' => username, 'message' => message})
        tweet.save
        tweets = Tweet.all
        render(tweets)
      when "u"
        puts "Enter the id of the tweet you want to update"
        id = gets.chomp
        tweet = Tweet.find_by_id(id)
        puts "Enter your new message"
        message = gets.chomp
        tweet.message = message
        tweet.save
        render(Tweet.all)
      when "d"
        puts "Enter the id of the tweet you want to delete"
        id = gets.chomp
        tweet = Tweet.find_by_id(id)
        tweet.delete
      when "ls"
        render(Tweet.all)
      when "e"
        exit
      else
        puts "I don't understand that choice"
      end
    end
    
  end

  def display_menu_options
    puts
    puts "What do you want to do?"
    puts "-----------------------"
    puts "[n] Make new tweet"
    puts "[u] change a tweet's message"
    puts "[d] delete a tweet"
    puts "[ls] Display all tweets"
    puts "[e] To exit program"
  end
  
  def intro
    puts 'Welcome to Twitter'
  end

  private

  def render(tweets)
    tweets.each.with_index(1) do |tweet, i|
      puts "#{i}. #{tweet.username} says: #{tweet.message} (id: #{tweet.id})"
    end
  end
end
