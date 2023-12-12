export interface AccessToken {
  message: string;
  status: boolean;
  bearerToken: BearerToken;
}

interface BearerToken {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
  'not-before-policy': number;
  session_state: string;
  scope: string;
}
