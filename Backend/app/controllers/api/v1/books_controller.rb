class Api::V1::BooksController < ApplicationController
  # def search
  #   # byebug
  #   res = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{ params[:input]}")
  #
  #   data = JSON.parse(res)
  #
  #   render json: data
  # end

  # before_action :get_book, only: [:show, :edit, :update]

  def index
      @books = Book.all
      render json: @books.to_json(only: [:title, :author, :genre, :image])
  end

  def show
      @books = Book.all
  end

  def new
      @book = Book.new
  end

  def create
      @book = Book.create(book_params)
      if @book.valid?
          session[:book_id] = @book.id
          redirect_to @book
      else
        flash[:errors] = @book.errors.full_messages
        redirect_to new_book_path
      end
  end

  def edit
  end

  def update
      @book.update(book_params)
      redirect_to book_path
  end

  def destroy
      get_book.destroy
      flash[:notice] = "You have deleted this book"
      redirect_to books_path
  end

  private

  def get_book
      @book = Book.find(params[:id])
  end

  def book_params
      params.require(:book).permit(:title, :author, :genre, :image)
  end

end
