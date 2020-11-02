class CreatePlanets < ActiveRecord::Migration[6.0]
  def change
    create_table :planets do |t|
      t.string :name
      t.string :distance_from_earth
      t.string :nearest_star

      t.timestamps
    end
  end
end
