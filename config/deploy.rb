set :repository,  "git@github.com:syweb/holyspiritschoolfairfield.org.git"
set :user,        "ubuntu"
set :domain,      "#{user}@insightmethods.com"
set :deploy_to,   "/home/#{user}/sites/holyspiritschoolfairfield.org"
set :port,          4000
set :merb_env,      "preview"
set :processes,     1
set :revision,    "origin/master"


namespace :vlad do

end