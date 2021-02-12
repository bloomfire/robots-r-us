class CreateEmployees < ActiveRecord::Migration[6.1]
  def change
    create_table :employees do |t|
      t.string :title
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :avatar

      t.timestamps
    end
  end
end
