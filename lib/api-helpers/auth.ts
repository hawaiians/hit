import * as admin from "firebase-admin";
import { initializeAdmin } from "../firebase-helpers/initializeAdmin";
import { NextApiRequest, NextApiResponse } from "next";
import {
  MissingHeaderError,
  MissingTokenError,
  TokenVerificationError,
} from "./errors";

const verifyTokenExpiration = (decodedToken: admin.auth.DecodedIdToken) => {
  const now = Math.floor(Date.now() / 1000); // Convert to Unix timestamp (in seconds)
  if (decodedToken.exp < now) {
    throw new TokenVerificationError("Authentication token has expired");
  }
};

export const verifyEmailAuthToken = async (token: string): Promise<string> => {
  try {
    await initializeAdmin();
    const decodedToken = await admin.auth().verifyIdToken(token);
    if (!decodedToken.email || !decodedToken.email_verified) {
      throw new TokenVerificationError("Invalid email authentication token");
    }
    const email = decodedToken.email;
    verifyTokenExpiration(decodedToken);
    return email;
  } catch (error) {
    if (error.code === "auth/argument-error") {
      throw new TokenVerificationError("Invalid authentication token");
    }
    const error_msg = "Error verifying token: " + error.message;
    throw new TokenVerificationError(error_msg);
  }
};

export const verifyAdminToken = async (
  token: string,
  strict: boolean = true, // TODO wait why can you be not strict with this function?
): Promise<boolean> => {
  try {
    await initializeAdmin();
    const decodedToken = await admin.auth().verifyIdToken(token);
    verifyTokenExpiration(decodedToken);
    if (strict && !decodedToken.admin) {
      throw new TokenVerificationError("Not an admin");
    }
    return decodedToken.admin === true;
  } catch (error) {
    if (error.code === "auth/argument-error") {
      throw new TokenVerificationError("Invalid authentication token");
    }
    const error_msg = "Error verifying token: " + error.message;
    throw new TokenVerificationError(error_msg);
  }
};

export const verifyAuthHeader = async (
  req: NextApiRequest,
): Promise<string> => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new MissingHeaderError();
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    throw new MissingTokenError();
  }
  return token;
};
