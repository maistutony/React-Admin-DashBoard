import { fetchUtils } from "react-admin";

const httpClient = fetchUtils.fetchJson;

const dataProvider = {
  // Other data provider methods...
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    if (resource === "employees") {
      const response = await httpClient(`hr data.json`);
      let data = response.json;
      let addedId = [];
      data.map((item) => {
        addedId.push({ ...item, id: item.Name });
      });
      console.log(data);
      return {
        data: addedId.slice((page - 1) * perPage, page * perPage),
        total: data.length,
      };
    }
          if (resource === "Dashboard") {
            const response = await httpClient(`hr data.json`);
            let data = response.json;
            let addedId = [];
            data.map((item) => {
              addedId.push({ ...item, id: item.Name });
            });
            return {
              data: addedId,
              total: data.length,
            };
          }

    //     if (resource === "LineCharts") {
    //       const response = await httpClient(`hr data.json`);
    //       let data = response.json;
    // console.log(data)
    //       return {
    //         data: data,
    //         total: data.length,
    //       };
    //     }

    // Handle other resources if needed
  },
  // Other data provider methods...
};

export default dataProvider;
