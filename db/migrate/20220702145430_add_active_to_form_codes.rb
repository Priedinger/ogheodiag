class AddActiveToFormCodes < ActiveRecord::Migration[6.1]
  def change
    add_column :form_codes, :active, :boolean, default: true
  end
end
