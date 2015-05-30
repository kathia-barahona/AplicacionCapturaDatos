class CreateRegistros < ActiveRecord::Migration
  def change
    create_table :registros do |t|
      t.string :type
      t.string :channel
      t.time :h_inicio
      t.time :h_final
      t.string :location
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
