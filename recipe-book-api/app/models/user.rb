class User < ApplicationRecord
    has_secure_password
    has_many :recipes
    validates :email, presence: true
    validates :username, presence: true
    validates :password, presence: true
end