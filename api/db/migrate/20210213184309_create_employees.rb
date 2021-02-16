class CreateEmployees < ActiveRecord::Migration[6.1]
  def change
    create_table :employees do |t|
      t.text :first_name
      t.text :last_name
      t.text :email
      t.text :title
      t.text :avatar

      t.timestamps
    end
  end
end
