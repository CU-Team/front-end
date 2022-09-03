import CamelCase from '@utils/camelCase';
import axios from 'axios';

export const searchTrackAPI = async (searchValue: string) => {
  try {
    const res = await axios.get(
      `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${searchValue}&format=json&api_key=${
        process.env.NEXT_PUBLIC_LAST_FM_API_KEY ?? ''
      }`,
    );
    return CamelCase(res);
  } catch (e: any) {
    return CamelCase(e.response);
  }
};
