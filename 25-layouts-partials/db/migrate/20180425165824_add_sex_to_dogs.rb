class AddSexToDogs < ActiveRecord::Migration[5.1]
  def change
    add_column :dogs, :sex, :string
  end
end
