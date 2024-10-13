import { OAuth2Client } from 'google-auth-library';
import createHttpError from 'http-errors';
import fs from 'node:fs';
import path from 'node:path';
import { GOOGLE_CLIENT } from '../constants/index.js';

const googleConfig = JSON.parse(
  fs.readFileSync(path.resolve('google-oauth.json').toString())
);


const googleOAuthClient = new OAuth2Client({
  clientId: GOOGLE_CLIENT.ID,
  clientSecret: GOOGLE_CLIENT.SECRET,
  redirectUri: googleConfig.web.redirect_uris[0],
});

export const generateOAuthUrl = () => {
  const url = googleOAuthClient.generateAuthUrl({
    scope: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ],
  });

  return url;
};

export const validateCode = async code =>{
const response = await googleOAuthClient.getToken(code);

if(!response.tokens.id_token){
throw createHttpError(401, "Unathorized");
}

const ticket = await googleOAuthClient.verifyIdToken({idToken: response.tokens.id_token});

return ticket;
};