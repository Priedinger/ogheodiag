# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_07_02_145430) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "form_codes", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "code"
    t.boolean "active", default: true
  end

  create_table "security_forms", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "form_code_id"
    t.string "place"
    t.string "role"
    t.string "changement_position"
    t.boolean "question1", default: false
    t.integer "question1aa"
    t.integer "question1ab"
    t.integer "question1ac"
    t.integer "question1ad"
    t.integer "question1ba"
    t.integer "question1bb"
    t.integer "question1bc"
    t.integer "question1bd"
    t.integer "question1ca"
    t.integer "question1cb"
    t.integer "question1cc"
    t.integer "question1cd"
    t.integer "question1da"
    t.integer "question1db"
    t.integer "question1dc"
    t.integer "question1dd"
    t.string "question2"
    t.string "question3"
    t.string "question4"
    t.string "question5"
    t.string "question6"
    t.string "question7"
    t.string "question8"
    t.string "question9"
    t.string "question10"
    t.string "question11a"
    t.string "question11b"
    t.string "question11c"
    t.string "question12"
    t.string "question13"
    t.string "question14"
    t.string "question15"
    t.string "question16"
    t.string "question17"
    t.string "question18"
    t.string "question19"
    t.string "question20"
    t.integer "score_total"
    t.integer "score_orga"
    t.integer "score_process"
    t.integer "score_leadership"
    t.integer "score_priority"
    t.string "rank_orga"
    t.string "rank_process"
    t.string "rank_leadership"
    t.string "rank_priority"
    t.text "commentary"
    t.index ["form_code_id"], name: "index_security_forms_on_form_code_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "security_forms", "form_codes"
end
