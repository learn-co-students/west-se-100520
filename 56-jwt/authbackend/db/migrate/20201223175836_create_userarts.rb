class CreateUserarts < ActiveRecord::Migration[6.0]
  def change
    create_table :userarts do |t|
      t.references :art
      t.references :user

      t.timestamps
    end
  end
end
