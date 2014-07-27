class User < ActiveRecord::Base
  attr_accessor :password
  attr_writer :current_step
  
  before_save :encrypt_password
  after_save :clear_password
  
  validates :username, :presence => true, :uniqueness => true, :length => { :in => 3..20 }, if: :step1?
  validates :email, :presence => true, :uniqueness => true, if: :step1?
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, :on => :create, if: :step1?
  validate :select_three_images, if: :step2?
  
  include MultiStepModel

  def self.total_steps
    5
  end
  
  def select_three_images
    if image_selection.size != 4
      errors.add(:image_selection, "You must select three images")
    else
      image_selection.delete("")
    end
  end
  
#   def encrypt_password
#     unless password.blank?
#       self.salt = BCrypt::Engine.generate_salt
#       self.encrypted_password = BCrypt::Engine.hash_secret(password, salt)
#     end
#   end

#   def clear_password
#     self.password = nil
#   end
end
