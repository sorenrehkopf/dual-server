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
    return queryInterface.bulkInsert('Availabilities', [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        resourceId: 2,
        type: 'weekly',
        weekday: 1,
        startTime: '16:00:00.000Z',
        endTime: '00:00:00.000Z'
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        resourceId: 41,
        type: 'weekly',
        weekday: 2,
        startTime: '16:00:00.000Z',
        endTime: '00:00:00.000Z',
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        resourceId: 6,
        type: 'weekly',
        weekday: 3,
        startTime: '16:00:00.000Z',
        endTime: '00:00:00.000Z',
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        resourceId: 4,
        type: 'weekly',
        weekday: 4,
        startTime: '16:00:00.000Z',
        endTime: '00:00:00.000Z',
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        resourceId: 5,
        type: 'weekly',
        weekday: 5,
        startTime: '16:00:00.000Z',
        endTime: '02:00:00.000Z',
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
     return queryInterface.bulkDelete('Availabilities', null, {});
  }
};
