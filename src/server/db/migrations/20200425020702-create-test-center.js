'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TestCenters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      accepted: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING(50),
      },
      state: {
        type: Sequelize.STRING(2),
      },
      zipcode: {
        type: Sequelize.INTEGER,
      },
      latitude: {
        type: Sequelize.FLOAT,
      },
      longitude: {
        type: Sequelize.FLOAT,
      },
      phone_number: {
        type: Sequelize.STRING(30),
      },
      hours_of_operation: {
        type: Sequelize.STRING,
      },
      days_of_operation: {
        type: Sequelize.STRING,
      },
      operation_period: {
        type: Sequelize.STRING,
      },
      website: {
        type: Sequelize.STRING,
      },
      appointment_required: {
        type: Sequelize.STRING,
      },
      doctor_screen_required_beforehand: {
        type: Sequelize.STRING,
      },
      drive_thru_site: {
        type: Sequelize.STRING,
      },
      walk_in_site: {
        type: Sequelize.STRING,
      },
      facilities_provided: {
        type: Sequelize.STRING,
      },
      estimated_daily_test_capacity: {
        type: Sequelize.INTEGER,
      },
      comments: {
        type: Sequelize.STRING,
      },
      address_freetext_blob: {
        type: Sequelize.STRING,
      },
      closed: {
        type: Sequelize.BOOLEAN,
      },
      date_closed: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TestCenters')
  },
}
