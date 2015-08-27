defmodule Janken.PageController do
  import Exredis
  use Janken.Web, :controller

  require Logger

  def index(conn, _params) do
    # redis_test("user_name")
    render conn, "index.html"
  end

  # defp redis_test(user_name) do
  #   client = Exredis.start
  #   client |> Exredis.query ["SET", "user_name", user_name]
  #   user_name1 = client |> Exredis.query ["GET", "user_name"]
  #   client |> Exredis.stop
  #   Logger.info "redis:"<>user_name1
  #   # client = Exredis.start
  #   # client |> Exredis.query ["SET", "user_name", user_name]
  #   # client |> Exredis.query ["GET", "user_name"]
  #   # client |> Exredis.stop
  # end
end
