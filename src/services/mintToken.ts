import { scenezAPI } from '../axios';
import { TBodyCheckout } from '../types/bodyCheckout';

export const mintToken = async (token: TBodyCheckout) => {
  console.log(token);
  try {
    const { data } = await scenezAPI.post('/mint-token', {
      token: {
        ...token,
        tokenId: 1,
        collection: 'test',
        address: '0x123',
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
