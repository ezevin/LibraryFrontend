class Api::V1::BookShelvesController < ApplicationController
  def index
      @bookshelves = BookShelf.all
      render json: @bookshelves.to_json
  end

  def new
    @bookshelf = BookShelf.new
  end

  def show
      @bookshelves = BookShelf.all
  end

  def create
      @bookshelf = BookShelf.create(bookshelf_params)
      if @bookshelf.valid?
          session[:book_id] = @bookshelf.id
          redirect_to @bookshelf
      else
        flash[:errors] = @bookshelf.errors.full_messages
        redirect_to new_bookshelf_path
      end
  end

  def edit
  end

  def update
      @bookshelf.update(book_params)
      redirect_to book_path
  end

  def destroy
      get_book.destroy
      flash[:notice] = "You have deleted this book"
      redirect_to bookshelves_path
  end

  private

  def get_bookshelf
      @bookshelf = BookShelf.find(params[:id])
  end

  def bookshelf_params
      params.require(:bookshelf).permit(:user_id, :book_id)
  end

end
