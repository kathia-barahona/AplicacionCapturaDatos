class RenameTypeColumn < ActiveRecord::Migration
  def change
  	rename_column :registros, :type, :media
  end
end
