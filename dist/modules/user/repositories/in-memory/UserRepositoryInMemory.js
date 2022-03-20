"use strict";

exports.__esModule = true;
exports.UserRepositoryInMemory = void 0;

var _User = require("../../infra/prisma/entities/User");

class UserRepositoryInMemory {
  constructor() {
    this.users = [];
  }

  async save({
    name,
    email,
    password
  }) {
    const user = new _User.User();
    Object.assign(user, {
      name,
      email,
      password
    });
    this.users.push(user);
    return user;
  }

  async getUser() {
    return this.users;
  }

  async findUserByEmail(email) {
    return this.users.find(user => user.email === email);
  }

  async updateUser({
    id,
    name,
    email,
    password
  }) {
    const user = this.users.findIndex(user => user.id === id);
    this.users[user].name = name;
    this.users[user].email = email;
    this.users[user].password = password;
  }

  async deleteUser(id) {
    const user = this.users.find(user => user.id === id);
    this.users.splice(this.users.indexOf(user));
  }

  async findById(id) {
    return this.users.find(user => user.id === id);
  }

}

exports.UserRepositoryInMemory = UserRepositoryInMemory;