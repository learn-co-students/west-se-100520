class CreateBoxers < ActiveRecord::Migration[5.2]
  def change
    create_table :boxers do |t|
      t.string :name
      t.string :city
      t.integer :trainer_id
    end
  end
end
