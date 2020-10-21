# balance
# name
# kind
# withdraw
# deposit
# transfer

class BankAccount

    @@all = []

    def self.all
         @@all
    end

    def self.total_deposits
        # total = 0
        # @@all.each do |account|
        #    total += account[:balance]
        # end
        # total
        @@all.reduce(0) do |memo, account|
            memo += account.balance
        end
    end

    attr_reader :kind, :balance
    # attr_writer :name
    attr_accessor :name

    def initialize(this_name, account_id, kind, balance=0)
        @name, @account_id, @kind, @balance  = this_name, account_id, kind, balance
        @@all << self
    end

    # def balance
    #     @balance
    # end

    # def name
    #     @name
    # end

    # def name=(name)
    #     @name = name
    # end

    def deposit(amount)
        @balance += amount
    end
    
    def withdraw(amount)
        @balance -= amount
    end

    def display_info
        puts "#{self.name}'s #{kind} account has a balance of #{@balance}"
    end

end

lantz_account = BankAccount.new("Lantz", "0001", "checking")
lantz_account.deposit(2000)
puts lantz_account.balance
inee_account = BankAccount.new("Inee", "0002", "savings")
inee_account.deposit(100)
puts inee_account.display_info
puts BankAccount.all.inspect
puts BankAccount.total_deposits