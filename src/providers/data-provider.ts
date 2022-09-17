import axios, { AxiosResponse } from "axios";
import { Pageable } from "../types/Pageable";
export const dataProvider = {
  async getList<T>(resource: string, pageable?: Pageable, conf?: any): Promise<T[]> {
    let page = 1;
    let pageSize = 500;

    if (pageable) {
      page = pageable.page;
      pageSize = pageable.pageSize;
    }

    return (
      await axios.get(resource + '?page=' + page + '&page_size=' + pageSize, conf)
        .then(({ data }) => data)
        .catch(e => console.log(e))
    );
  },

  async getOne<T>(resource: string, id: string | number, conf?: any): Promise<T> {
    return (
      await axios.get(resource + '/' + id, conf)
        .then(({ data }) => data)
        .catch(e => console.log(e))
    );
  },

  async deleteOne<T>(resource: string, id: string | number, conf?: any): Promise<T> {
    return (
      await axios.delete(resource + '/' + id, conf)
        .then(({ data }) => data)
        .catch(e => console.log(e))
    );
  },
  async makeRequest<T>(action: Function, endpoint: string, conf?: any): Promise<T[] | T> {
    return (
      await action(endpoint, conf)
        .then((res: AxiosResponse<T>) => res.data)
        .catch((e: any) => console.log(e))
    );
  },

  async saveAll<T>(resource: string, data: any[], conf?: any): Promise<T[]> {
    return (
      await axios.put(resource, data, conf)
        .then(res => res.data)
        .catch(e => console.log(e))
    );
  },
}


type Action = 'save' | 'get';
