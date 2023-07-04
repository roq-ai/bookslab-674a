import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { booksellerValidationSchema } from 'validationSchema/booksellers';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getBooksellers();
    case 'POST':
      return createBookseller();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getBooksellers() {
    const data = await prisma.bookseller
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'bookseller'));
    return res.status(200).json(data);
  }

  async function createBookseller() {
    await booksellerValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.book?.length > 0) {
      const create_book = body.book;
      body.book = {
        create: create_book,
      };
    } else {
      delete body.book;
    }
    if (body?.order?.length > 0) {
      const create_order = body.order;
      body.order = {
        create: create_order,
      };
    } else {
      delete body.order;
    }
    const data = await prisma.bookseller.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
