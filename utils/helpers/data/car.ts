import { restAPIInstance } from "../api-config";
import { Car } from "../types/Car";
import RequestResponse from "../types/RequestResponse";

export const adaptCarRecord = (record: any, fromBackend?: boolean) => {
  const keyMap = {
    id: "id",
    image: "imageUrl",
    year: "year",
    sold: "sold",
    title: "title",
    price: "marketplacePrice",
    oldPrice: "marketplaceOldPrice"
  };

  const adaptedRecord = Object.entries(keyMap).reduce((map, arr) => {
    const value = record[fromBackend ? arr[1] : arr[0]];
    return value === undefined || value === ""
      ? map
      : {
          ...map,
          [fromBackend ? arr[0] : arr[1]]: value
        };
  }, {});

  return adaptedRecord;
};

export const getAllCars: () => Promise<RequestResponse<Car[]>> = async () => {
  try {
    const response = await restAPIInstance.get("/inventory/car/search");
    return {
      error: false,
      data: response.result.map((record: any) => adaptCarRecord(record, true)) as Car[]
    };
  } catch (err) {
    return {
      error: true,
      message: (err as Error).message,
      data: null
    };
  }
};
