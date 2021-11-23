class AnswersController < ApplicationController

  def index
    @answers = Answer.all
    render json: @answers
  end

  def create
    @answer = Answer.new(answer_params)

    if @answer.save
      render json: @answer, status: :created, location: @answer
    else
      render json: @answer.errors, status: :unprocessable_entity
    end
  end

  private
  def answer_params
    params.require(:answer).permit(:content, :post_id)
  end
end
