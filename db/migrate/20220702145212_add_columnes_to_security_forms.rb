class AddColumnesToSecurityForms < ActiveRecord::Migration[6.1]
  def change
        add_reference :security_forms, :form_code, foreign_key: true

    add_column :security_forms, :place, :string
    add_column :security_forms, :role, :string
    add_column :security_forms, :changement_position, :string

    add_column :security_forms, :question1, :boolean, default: false

    add_column :security_forms, :question1aa, :integer
    add_column :security_forms, :question1ab, :integer
    add_column :security_forms, :question1ac, :integer
    add_column :security_forms, :question1ad, :integer

    add_column :security_forms, :question1ba, :integer
    add_column :security_forms, :question1bb, :integer
    add_column :security_forms, :question1bc, :integer
    add_column :security_forms, :question1bd, :integer

    add_column :security_forms, :question1ca, :integer
    add_column :security_forms, :question1cb, :integer
    add_column :security_forms, :question1cc, :integer
    add_column :security_forms, :question1cd, :integer

    add_column :security_forms, :question1da, :integer
    add_column :security_forms, :question1db, :integer
    add_column :security_forms, :question1dc, :integer
    add_column :security_forms, :question1dd, :integer

    add_column :security_forms, :question2, :string
    add_column :security_forms, :question3, :string
    add_column :security_forms, :question4, :string
    add_column :security_forms, :question5, :string
    add_column :security_forms, :question6, :string
    add_column :security_forms, :question7, :string
    add_column :security_forms, :question8, :string
    add_column :security_forms, :question9, :string
    add_column :security_forms, :question10, :string
    add_column :security_forms, :question11a, :string
    add_column :security_forms, :question11b, :string
    add_column :security_forms, :question11c, :string
    add_column :security_forms, :question12, :string
    add_column :security_forms, :question13, :string
    add_column :security_forms, :question14, :string
    add_column :security_forms, :question15, :string
    add_column :security_forms, :question16, :string
    add_column :security_forms, :question17, :string
    add_column :security_forms, :question18, :string
    add_column :security_forms, :question19, :string
    add_column :security_forms, :question20, :string

    add_column :security_forms, :score_total, :integer
    add_column :security_forms, :score_orga, :integer
    add_column :security_forms, :score_process, :integer
    add_column :security_forms, :score_leadership, :integer
    add_column :security_forms, :score_priority, :integer

    add_column :security_forms, :rank_orga, :string
    add_column :security_forms, :rank_process, :string
    add_column :security_forms, :rank_leadership, :string
    add_column :security_forms, :rank_priority, :string

    add_column :security_forms, :commentary, :text
  end
end
