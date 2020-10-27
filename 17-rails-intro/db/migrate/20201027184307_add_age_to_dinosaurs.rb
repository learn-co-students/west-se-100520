class AddAgeToDinosaurs < ActiveRecord::Migration[6.0]
  def change
    add_column :dinosaurs, :age, :integer
  end
end
