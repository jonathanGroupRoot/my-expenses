"use strict";

exports.__esModule = true;
exports.UserTokenRepository = void 0;

var _client = require("@prisma/client");

const prisma = new _client.PrismaClient();

class UserTokenRepository {
  async save({
    expires_date,
    refresh_token,
    id_user
  }) {
    await prisma.usersToken.create({
      data: {
        expires_date,
        refresh_token,
        id_user
      }
    });
  }

  async findByUserInRefreshToken(refresh_token, id_user) {
    return prisma.usersToken.findFirst({
      where: {
        refresh_token,
        id_user
      }
    });
  }

  async deleteById(id) {
    await prisma.usersToken.delete({
      where: {
        id
      }
    });
  }

}

exports.UserTokenRepository = UserTokenRepository;