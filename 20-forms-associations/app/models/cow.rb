class Cow < ApplicationRecord
  belongs_to :farmer

  validates :name, presence: { message: "can't be ghosted.  Boo!"}
end
