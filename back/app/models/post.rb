class Post < ApplicationRecord
  has_many :answers, dependent: :destroy
end
