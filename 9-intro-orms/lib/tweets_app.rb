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
        
        tweets = Tweet.all
        render(tweets)
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
    puts "[ls] Display all tweets"
    puts "[e] To exit program"
  end
  
  def intro
    puts 'Welcome to Twitter'
  end

  private

  def render(tweets)
    tweets.each.with_index(1) do |tweet, i|
      puts "#{i}. #{tweet.username} says: #{tweet.message} (id: #{tweet.id}"
    end
  end
end
