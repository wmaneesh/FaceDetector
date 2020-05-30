# FaceDetector
- - - -
Website built using REACT framework and Clarifai API to detect faces on images. 

- - - -

* The server to host this website was created using Node js and Express js. The website has 4 endpoints: images, profile, register and signin.  

* When the user registers onto the website, the login details: email, name, password, join_date are stored in a database. The database management system that was used for this project was PostgreSQL.  

* The server, database and the website are all deployed on Heroku.

- - - -

## Layout of Project ##

- - - -
The website was built using REACT framework. The images below show the components that were required to create the main page and the sign in page. 

<img src="https://github.com/wmaneesh/FaceDetector/blob/master/images/main-page-component.png" width="600">  


<img src="https://github.com/wmaneesh/FaceDetector/blob/master/images/sign-page-component.png" width="600">

- - - -

The api that is being used is Clarifai's computer vision API that can detect faces on images. Once the image url has been sent to the api, the api will return an object that contains the positions where the face is displayed. Using the position sent by the api, a seperate component was created to draw a rectangular box around the cordinates that were obtained. The image below shows the face detected given the url.

<img src="https://github.com/wmaneesh/FaceDetector/blob/master/images/face-detect-page.png" width="600">

- - - -

