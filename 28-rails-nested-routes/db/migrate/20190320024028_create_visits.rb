class CreateVisits < ActiveRecord::Migration[5.2]
  def change
    create_table :visits do |t|
       t.integer :user_id
       t.integer :state_id
       t.integer :rating
    end
  end
end
