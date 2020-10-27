class CreateDinosaurs < ActiveRecord::Migration[6.0]
  def change
    create_table :dinosaurs do |t|
      t.string :name
      t.string :species
      t.integer :teeth
      t.boolean :love_mom

      t.timestamps
    end
  end
end
