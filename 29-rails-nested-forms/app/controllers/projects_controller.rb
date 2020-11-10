class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy]

  # GET /projects
 
  def index
    @projects = Project.all
  end

  # GET /projects/1
 
  def show
  end

  # GET /projects/new
  def new
    @project = Project.new
    10.times {@project.tasks.build}
  end

  # GET /projects/1/edit
  def edit
  end

  # POST /projects
  def create
    # byebug
    @project = Project.new(project_params)

      if @project.save
        redirect_to @project, notice: 'Project was successfully created.'
      else
        render :new
      end
  end

  # PATCH/PUT /projects/1
  def update
    # byebug
      if @project.update(project_params)
        redirect_to @project, notice: 'Project was successfully updated.'
      else
        render :edit
      end
  end

  # DELETE /projects/1
  def destroy
    @project.destroy
      redirect_to projects_url, notice: 'Project was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def project_params
      params.require(:project).permit(:name, :due_date, tasks_attributes: [
        :name,
        :complete,
        :id
      ])
    end
end
