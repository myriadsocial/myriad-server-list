import { UserNonce } from 'src/interface/UserInterface';

import axios from './axiosInstance';

export async function getUserNonce(
  api: string,
  address: string,
): Promise<UserNonce> {
  try {
    const result = await axios(api).get(
      `/authentication/nonce?type=wallet&id=${address}`,
    );
    return result.data;
  } catch {
    return { nonce: 0 };
  }
}
