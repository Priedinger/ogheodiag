class FormCodesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :check_code ]

  def check_code
    if FormCode.find_by(code: params[:code]).present?
      render json: { success: true}
    else
      render json: { success: false, errors: "Le code saisi est invalide" }
    end
  end
end
