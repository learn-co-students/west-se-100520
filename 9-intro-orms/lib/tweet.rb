class Tweet
  attr_accessor :message, :username
  @@all = []

  def self.all
    @@all
  end

  def initialize(attrs={})
    @message = attrs['message']
    @username = attrs['username']

    @@all << self
  end
end
