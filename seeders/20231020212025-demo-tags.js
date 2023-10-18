'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    return queryInterface.bulkInsert('Tags', [
        {
          name: 'Food',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Harm Reduction',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Toilets',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     return queryInterface.bulkDelete('Tags', null, {});
  }
};
