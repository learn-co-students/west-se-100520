class AddColumnToPatients < ActiveRecord::Migration[6.0]
  def change
    add_column :patients, :location, :string
  end
end
