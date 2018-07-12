module Api
  module V1
    class GalleriesController < ApplicationController
      before_action :set_gallery, only: %i(show update destroy)
      before_action :authenticate_user, only: %i(create update destroy)

      # GET /galleries.json
      def index
        @galleries = Gallery.all
        render json: @galleries
      end

      # GET /galleries/1.json
      def show
        render json: @gallery
      end

      # POST /galleries.json
      def create
        @gallery = Gallery.new(gallery_params)
        if @gallery.save
          render json: @gallery, status: :created, location: @gallery
        else
          render json: @gallery.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /galleries/1.json
      def update
        if @gallery.update(gallery_params)
          # render :show, status: :ok, location: @gallery
          render json: @gallery
        else
          render json: @gallery.errors, status: :unprocessable_entity
        end
      end

      # DELETE /galleries/1.json
      def destroy
        @gallery.destroy
      end

      # FIXME gallery creation fails without this
      def gallery_url(arg)
      end

      private
        def set_gallery
          @gallery = Gallery.find(params[:id])
        end

        def gallery_params
          params.require(:gallery).permit(
            [
              :title,
              images_attributes: %i(id file)
            ]
          )
        end
    end
  end
end