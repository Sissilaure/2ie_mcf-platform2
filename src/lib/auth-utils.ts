import jwt from "jsonwebtoken";

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET!) as { userId: string; role: string };
  } catch {
    return null;
  }
}

export function getTokenFromHeader(authHeader: string | null) {
  if (!authHeader?.startsWith("Bearer ")) return null;
  return authHeader.substring(7);
}
