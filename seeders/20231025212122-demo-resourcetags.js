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
    return queryInterface.bulkInsert('ResourceTags', [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        tagId: 1,
        resourceId: 2,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        tagId: 3,
        resourceId: 2,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        tagId: 1,
        resourceId: 41,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        tagId: 3,
        resourceId: 3,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        tagId: 2,
        resourceId: 4,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('ResourceTags', null, {});
  }
};
