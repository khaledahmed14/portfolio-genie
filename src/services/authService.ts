import { setToken } from "../utils/storage";

/** Demo auth. Replace with a real API call later. */
export async function signIn(_email: string, _password: string): Promise<void> {
  setToken("demo-token-123");
}

export async function signUp(
  _name: string,
  _email: string,
  _password: string
): Promise<void> {
  setToken("demo-token-123");
}
