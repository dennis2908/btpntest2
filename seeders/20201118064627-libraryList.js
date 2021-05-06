'use strict';
const books =  require('../Books.json')

module.exports = {
  up:  (queryInterface, Sequelize) => {
    let bookList = []
    let category = ['journal','magazine', 'comic', 'magazine', 'novel', 'non-fiction', 'graphic Novel', 'science book']
    for (let i = 0; i < books.length; i++) {
      let obj = {
        title : books[i].title,
        author : books[i].authors.join(', '),
        isbn : books[i].isbn,
        stock : Math.ceil(Math.random()*100),
        description : books[i].longDescription,
        category : category[Math.floor(Math.random()*category.length)],
        createdAt : new Date(),
        updatedAt : new Date()
      }
      if (obj.title === undefined || obj.author === undefined || obj.isbn === undefined || obj.stock === undefined || obj.description === undefined || obj.category === undefined) {
        continue
      } else {
        bookList.push(obj)
      }
    }
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Books', bookList, {});
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Books', null, {});
  }
};
