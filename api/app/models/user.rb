class User < ApplicationRecord
  has_secure_password

  validates_presence_of :name
  validates_presence_of :email
  validates_uniqueness_of :email
  validates_presence_of :password_digest
  validates_length_of :password, maximum: 72, minimum: 8
end
