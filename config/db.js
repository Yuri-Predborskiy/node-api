'use strict';
const credentials = require('./credentials');

module.exports = {
    url : `mongodb://${credentials.username}:${credentials.password}@${credentials.db.path}/${credentials.db.name}`
};