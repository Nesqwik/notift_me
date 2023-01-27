'use strict'

const apiService = require("../services/api");

module.exports = async (props, event, api) => {
    await apiService.notify(api, "Lenra Notification", "This is a test notification.", props.users)
    return {};
}