module AuthSupport
  def auth_header(user)
    token = Knock::AuthToken.new(payload: { sub: user.id }).token
    {
      Authorization: "Bearer #{token}"
    }
  end
end