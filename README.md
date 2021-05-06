# Used technology :

1. node JS.<br>
2. React JS.<br>
3. HTML.<br>
3. Express.<br>
4. Mocha.<br>
5. Chai.<br>

# Instalation and running server locally :
1. Use command prompt and direct to root folder and type :</br>
  $ npm install</br>
  $ npm start</br>
  Server will run on localhost:3000
2. Input localhost:3000 on browser (Mozilla suggested).</br>
   Press Enter to load localhost:3000.</br>
3. Input First Name, Last Name, Age, Photo Link.</br>
   Click Add Data Button for adding the data.</br>
   If mistaken then there will be notification.</br>
4. Choose The data and click Edit.</br>
   Your cursor will be on the filled form.</br>
   Update the Input First Name / Last Name / Age / Photo Link.</br>
   Click Edit Data Button for updating the data.</br>
   If mistaken then there will be notification   
   Note : I am not using method GET https://simple-contact-crud.herokuapp.com/contact/{id}
5. Delete button is supposed to be working but the API delete https://simple-contact-crud.herokuapp.com/contact/{id} is error.</br>
   
# Running server online (https://michaeldennism.herokuapp.com or michaeldennism.herokuapp.com) :
1. Input https://michaeldennism.herokuapp.com or michaeldennism.herokuapp.com on browser (Mozilla suggested).</br>
   Press Enter to load https://michaeldennism.herokuapp.com or michaeldennism.herokuapp.com.</br> 
2. Input First Name, Last Name, Age, Photo Link.</br>
   Click Add Data Button for adding the data.</br>
   If mistaken then there will be notification.</br>
3. Choose The data and click Edit.</br>
   Your cursor will be on the filled form.</br>
   Update the Input First Name / Last Name / Age / Photo Link.</br>
   Click Edit Data Button for updating the data.</br>
   If mistaken then there will be notification</br>   
4. Delete button is supposed to be working but the API delete https://simple-contact-crud.herokuapp.com/contact/{id} is error.</br>

# Testing locally (Using Mocha and Chai) :
1. Close port 3000 if used.</br>
2. Use command prompt and direct to root folder and type :</br>
   $ npm test or $ mocha tests</br>
   (To view the test module, see folder tests).