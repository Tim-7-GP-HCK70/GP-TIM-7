"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
      {
        email: "user1@mail.com",
        password: "user1",
      },
      {
        email: "user2@mail.com",
        password: "user2",
      },
    ];

    const data = users.map((el) => {
      el.createdAt = el.updatedAt = new Date();
      return el;
    });

    await queryInterface.bulkInsert("Users", data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {
      truncate: true,
      restartIdentity: true,
    });
  },
};
