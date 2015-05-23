class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.boolean :admin
      t.string :user
      t.string :password_hash
      t.string :password_salt
      t.string :name
      t.integer :age
      t.string :profession
      t.string :country
      t.string :mail
      t.string :picture

      t.timestamps null: false
    end
  end
end
