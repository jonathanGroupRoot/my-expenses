"use strict";

exports.__esModule = true;
exports.DespensesRepository = void 0;

var _client = require("@prisma/client");

const prisma = new _client.PrismaClient();

class DespensesRepository {
  async save({
    name,
    categorie,
    description,
    due_date,
    value,
    repetitions,
    id_user
  }) {
    await prisma.despenses.create({
      data: {
        name,
        categorie,
        description,
        due_date,
        value,
        repetitions,
        id_user
      }
    });
  }

  async get() {
    return prisma.despenses.findMany();
  }

  async updateDespenses({
    id,
    name,
    categorie,
    description,
    due_date,
    repetitions
  }) {
    await prisma.despenses.update({
      where: {
        id
      },
      data: {
        name,
        categorie,
        description,
        due_date,
        repetitions
      }
    });
  }

  async deleteDespenses(id) {
    await prisma.despenses.delete({
      where: {
        id
      }
    });
  }

  async findByIdDespenses(id) {
    return prisma.despenses.findFirst({
      where: {
        id
      }
    });
  }

}

exports.DespensesRepository = DespensesRepository;