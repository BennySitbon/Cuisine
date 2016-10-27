# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161026141409) do

  create_table "addresses", force: :cascade do |t|
    t.integer  "house_number"
    t.string   "street"
    t.string   "city"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.float    "latitude"
    t.float    "longitude"
  end

  create_table "cuisine_types", force: :cascade do |t|
    t.string   "name"
    t.string   "font_letter", limit: 1
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
  end

  create_table "restaurants", force: :cascade do |t|
    t.string   "name"
    t.integer  "cuisine"
    t.integer  "rating"
    t.boolean  "accepts_10bis"
    t.integer  "max_delivery_time"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.integer  "address_id"
    t.integer  "cuisine_type_id"
    t.index ["address_id"], name: "index_restaurants_on_address_id"
    t.index ["cuisine_type_id"], name: "index_restaurants_on_cuisine_type_id"
  end

end
