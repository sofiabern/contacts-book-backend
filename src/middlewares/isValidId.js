import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId = (idName) => (req, res, next) => {
    const id = req.params[idName];

    if (!id) {
        return next(createHttpError(400, 'Id should be specified'));
    }

    if (!isValidObjectId(id)) {
      return next(createHttpError(400, `Invalid Object ID: ${id}.`));
    }

    return next();
  };

