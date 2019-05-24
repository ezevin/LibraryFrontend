class ApplicationController < ActionController::API

  # def issue_token(payload)
  #   JWT.encode(payload, 'secret', 'HS256')
  # end
  #
  # def token
  #   request.headers['Authenticate']
  # end
  #
  # def decode_token
  #   begin
  #    decoded = JWT.decode(token, 'secret', true, { algorithm: 'HS256'}).first
  #   rescue JWT::DecodeError
  #     return nil
  # end
  #
  # def id_from_token
  #   decode_token["id"]
  # end
  #
  # def current_user
  #   @user ||= User.find_by(id: id_from_token)
  # end

end
