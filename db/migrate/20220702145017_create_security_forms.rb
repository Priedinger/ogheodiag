class CreateSecurityForms < ActiveRecord::Migration[6.1]
  def change
    create_table :security_forms do |t|

      t.timestamps
    end
  end
end
