"use strict";

exports.__esModule = true;
exports.UserRepository = void 0;

var _client = require("@prisma/client");

const prisma = new _client.PrismaClient();

class UserRepository {
  async save({
    name,
    email,
    password
  }) {
    return prisma.user.create({
      data: {
        name,
        email,
        password
      }
    });
  }

  async getUser() {
    return prisma.user.findMany();
  }

  async findUserByEmail(email) {
    const result = await prisma.user.findFirst({
      where: {
        email
      }
    });
    return result;
  }

  async updateUser({
    id,
    name,
    email,
    password
  }) {
    await prisma.user.updateMany({
      where: {
        id
      },
      data: {
        name,
        email,
        password
      }
    });
  }

  async deleteUser(id) {
    await prisma.user.delete({
      where: {
        id
      }
    });
  }

  async findById(id) {
    return prisma.user.findFirst({
      where: {
        id
      }
    });
  }

}

exports.UserRepository = UserRepository;