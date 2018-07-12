# React-Rails Unsplash Clone

Clone of the Unsplash online image gallery built with React(for the front end UI) and Rails(backend api service).

## Getting started

You'll find the React client in the 'client' folder and the Rails api in the 'app' folder. Navigate into the 'client folder and run `npm install`, followed by navigating into the 'api' folder and running `bundle install`. While in the 'api' folder, execute `rake start`.

This starts the React client on port 3000, and the Rails api on port 3001. Open your browser and navigate to 'http://localhost:3000' to use the app. You can kill both processes simultaneously from the cmd prompt with `CTRL+C`.

## Future additions

- add the ability to upload images to AWS S3  
- add the ability to edit and delete galleries  
- add a gallery lightbox
- add an upload progress indicator when uploading images
- add a user profile page displaying what galleries users have created
- add pagination/endless scroll to the explore/home page
- display error messages when errors occur when creating a gallery/image upload  
- add more rails and react tests
- wireup the search field
