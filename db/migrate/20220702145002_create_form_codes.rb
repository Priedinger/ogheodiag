class CreateFormCodes < ActiveRecord::Migration[6.1]
  def change
    create_table :form_codes do |t|

      t.timestamps
    end
  end
end
