class CreateTigers < ActiveRecord::Migration[6.0]
  def change
    create_table :tigers do |t|
      t.string :name
      t.string :color

      t.timestamps
    end
  end
end
