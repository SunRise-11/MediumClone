export default interface UserSession {
  userId: number;
  username: string;
  email: string;
  bio: string | null | undefined;
  image: string | null | undefined;
  isEmailVerified: boolean;
  accessToken: string;
  refreshToken: string;
}
