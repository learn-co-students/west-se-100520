ActiveRecord::Schema.define(version: 2018_07_23_144208) do

  create_table "bagels", force: :cascade do |t|
    t.string "name"
    t.integer "price"
    t.boolean "tasty"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
