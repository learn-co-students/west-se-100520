class User < ApplicationRecord
    has_secure_password
    has_many :posts
    validates :username, length: {minimum: 3}, uniqueness: true

    # def authenticate(plaintext_pass)
    #     if BCrypt::Password.new(self.password_digest) == plaintext_pass
    #         self
    #     else
    #         false
    #     end
    # end
end
