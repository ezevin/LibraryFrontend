class Api::V1::BookShelvesController < ApplicationController
  def index
      @bookshelves = BookShelf.all
      render json: @bookshelves.to_json(only: [:user_id, :book_id])
  end
end
