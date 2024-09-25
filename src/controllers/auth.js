import { register, login, logout, refresh } from '../services/auth.js';

const setupSessionCookies = (res, session) => {
  res.cookie('sessionId', session._id, {
    httpOnly: true,
    expire: 7 * 24 * 60 * 60,
  });
  res.cookie('sessionToken', session.refreshToken, {
    httpOnly: true,
    expire: 7 * 24 * 60 * 60,
  });
};

export const registerController = async (req, res) => {
  const registeredUser = await register(req.body);

  return res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: registeredUser,
  });
};

export const loginController = async (req, res) => {
  const session = await login(req.body);

  setupSessionCookies(res, session);

  res.json({
    status: 200,
    message: 'Successfully logged in an user!',
    data: { accessToken: session.accessToken },
  });
};

export const logoutController = async (req, res) => {
  const { sessionId, sessionToken } = req.cookies;
  
  await logout({
    sessionId,
    sessionToken,
  });

  res.clearCookie('sessionId');
  res.clearCookie('sessionToken');

  res.status(204).send();
};

export const refreshController = async (req, res) => {
  const { sessionId, sessionToken } = req.cookies;
  const session = await refresh({ sessionId, sessionToken });

  setupSessionCookies(res, session);

  res.json({
    status: 200,
    message: 'Successfully refreshed a session!',
    data: { accessToken: session.accessToken },
  });
};
