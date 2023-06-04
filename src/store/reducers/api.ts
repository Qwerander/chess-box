import data from '../../mock/data.json'

export function fetchData(): Promise<typeof data> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 3000);
  });
}
