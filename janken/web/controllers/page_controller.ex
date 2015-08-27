defmodule Janken.PageController do
  use Janken.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
