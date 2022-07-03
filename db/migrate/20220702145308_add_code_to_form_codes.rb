class AddCodeToFormCodes < ActiveRecord::Migration[6.1]
  def change
    add_column :form_codes, :code, :string
  end
end
