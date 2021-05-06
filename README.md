# Used technology :

1. node JS
2. mongo lite (neDB) because mongo DB online is not available for me (don't have account)
3. indexing mongo lite
4. node-cache will update to node-cache each time on add,update,delete case because redis online is not available.<br>
   (don't have account).
5. jsonwebtoken
6. Postman
7. Auth token auto generate 
8. bearer token Authorization

# Instalation and running server locally :
1. Use command prompt and direct to root folder and type :</br>
  $ npm install</br>
  $ npm start</br>
  Server will run on localhost:3000
2. Open localhost:3000 on browser (Mozilla suggested)</br>
3. Input First Name, Last Name, Age, Photo Link.</br>
   Click Add Data Button for adding the data.</br>
   If mistaken then there will be notification.</br>
4. Choose The data and click Edit.</br>
   Your cursor will be on the filled form.</br>
   Update the Input First Name / Last Name / Age / Photo Link.</br>
   Click Edit Data Button for updating the data.</br>
   If mistaken then there will be notification</br>   
5. Delete button is supposed to be working but the API delete https://simple-contact-crud.herokuapp.com/contact/{id} is error.</br>
   
# Running server online (https://michaeldennism.herokuapp.com or michaeldennism.herokuapp.com) :
1. Open https://michaeldennism.herokuapp.com or michaeldennism.herokuapp.com on browser (Mozilla suggested)</br>
2. Input First Name, Last Name, Age, Photo Link.</br>
   Click Add Data Button for adding the data.</br>
   If mistaken then there will be notification.</br>
3. Choose The data and click Edit.</br>
   Your cursor will be on the filled form.</br>
   Update the Input First Name / Last Name / Age / Photo Link.</br>
   Click Edit Data Button for updating the data.</br>
   If mistaken then there will be notification</br>   
4. Delete button is supposed to be working but the API delete https://simple-contact-crud.herokuapp.com/contact/{id} is error.</br>