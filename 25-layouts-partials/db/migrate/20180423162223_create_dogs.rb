class CreateDogs < ActiveRecord::Migration[5.1]
  def change
    create_table :dogs do |t|
      t.string :breed
      t.integer :age
      t.string :name
      t.integer :owner_id
      t.integer :shelter_id

      t.timestamps
    end
  end
end
