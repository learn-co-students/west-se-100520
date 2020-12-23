class CreateArts < ActiveRecord::Migration[6.0]
  def change
    create_table :arts do |t|
      t.string :title
      t.string :image
      t.string :slug
      t.string :date
      t.string :votes
      t.references :artist

      t.timestamps
    end
  end
end
