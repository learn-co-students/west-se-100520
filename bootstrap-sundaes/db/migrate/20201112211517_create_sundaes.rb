class CreateSundaes < ActiveRecord::Migration[6.0]
  def change
    create_table :sundaes do |t|
      t.string :flavor
      t.string :topping
      t.integer :scoops

      t.timestamps
    end
  end
end
