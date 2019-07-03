import { CatFactType } from '../types';
import axios from 'axios';
import catFacts from '../assets/catFacts';

export async function networkFetchCatFacts(): Promise<CatFactType[]> {
  await delayOrError();
  return catFacts;
}

function delayOrError() {
  // useful for testing purposes, to simulate handing loading and error handling of network requests
  return new Promise((resolve, reject) => {
    const delay = 1500;
    setTimeout(() => {
      // if (Math.random() > 0.5) {
      //   return reject('the request has failed!!');
      // }
      resolve();
    }, delay);
  });
}
