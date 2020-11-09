class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
       t.integer :user_id
       t.integer :visit_id
       t.string :text
    end
  end
end
