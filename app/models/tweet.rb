class Tweet < ApplicationRecord
    validates :content, length: { minimum: 10, maximum: 140 }
end
