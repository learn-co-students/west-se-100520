class AddColumnToDinosaurs < ActiveRecord::Migration[6.0]
  def change
    add_column :dinosaurs, :height, :integer
  end
end
