class User < ActiveRecord::Base
  
  attr_accessor :password
  attr_writer :current_step
  before_save :downcase, :encrypt_password
  before_create :create_remember_token
  
  validates :username, :presence => true, uniqueness: { case_sensitive: false }, :length => { :in => 3..20 }, if: :step1?
  validates :email, :presence => true, uniqueness: { case_sensitive: false }, if: :step1?
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, :on => :create, if: :step1?
  validate :select_three_images, if: :step2?
  has_secure_password validations: false
  include MultiStepModel

  def self.total_steps
    5
  end
  
  def select_three_images
    if image_selection.first == "" && image_selection.size != 4
      errors.add(:image_selection, "You must select three images")
    else
      image_selection.delete("")
    end
  end
  
  def User.new_remember_token
    SecureRandom.urlsafe_base64
  end
  
  def User.digest(token)
    Digest::SHA1.hexdigest(token.to_s)
  end
  
  private
  def create_remember_token
    self.remember_token = User.digest(User.new_remember_token)
  end
  
  private
  def downcase
    self.email = email.downcase
    self.username = username.downcase
  end
  
  def encrypt_password
    unless password.blank?
      self.salt = BCrypt::Engine.generate_salt
      self.password_digest = BCrypt::Engine.hash_secret(password, salt)
    end
  end

  def clear_password
    self.password = nil
  end
end
