import { MOCK_SUBJECTS } from "@/constants/mock-data";
import {
  BaseRecord,
  DataProvider,
  GetListParams,
  GetListResponse,
} from "@refinedev/core";

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({
    resource,
  }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== "subjects") {
      return { data: [] as TData[], total: 0 };
    }

    return {
      data: MOCK_SUBJECTS as unknown as TData[],
      total: MOCK_SUBJECTS.length,
    };
  },

  getOne: async () => {
    throw new Error("This function is not present in the mock");
  },
  create: async () => {
    throw new Error("This function is not present in the mock");
  },
  update: async () => {
    throw new Error("This function is not present in the mock");
  },
  deleteOne: async () => {
    throw new Error("This function is not present in the mock");
  },

  getApiUrl: () => "",
};

// import { createSimpleRestDataProvider } from "@refinedev/rest/simple-rest";
// import { API_URL } from "./constants";
// export const { dataProvider, kyInstance } = createSimpleRestDataProvider({
//   apiURL: API_URL,
// });

// import type { DataProvider } from "@refinedev/core";

// const API_URL = "https://api.fake-rest.refine.dev";

// export const dataProvider: DataProvider = {
//   getOne: () => {
//     throw new Error("Not implemented");
//   },
//   update: () => {
//     throw new Error("Not implemented");
//   },
//   getList: () => {
//     throw new Error("Not implemented");
//   },
//   create: () => {
//     throw new Error("Not implemented");
//   },
//   deleteOne: () => {
//     throw new Error("Not implemented");
//   },
//   getApiUrl: () => API_URL,
//   // Optional methods:
//   // getMany: () => { /* ... */ },
//   // createMany: () => { /* ... */ },
//   // deleteMany: () => { /* ... */ },
//   // updateMany: () => { /* ... */ },
//   // custom: () => { /* ... */ },
// };
