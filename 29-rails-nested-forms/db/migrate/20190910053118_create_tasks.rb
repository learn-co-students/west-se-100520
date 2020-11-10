class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.references :project, null: false, foreign_key: true
      t.boolean :complete
      t.string :name

      t.timestamps
    end
  end
end
