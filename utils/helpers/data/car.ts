import { restAPIInstance } from "../api-config";
import { Car, CarDetails } from "../types/Car";
import RequestResponse from "../types/RequestResponse";

export const adaptCarRecord = (record: any, fromBackend?: boolean) => {
  const keyMap = {
    id: "id",
    imageUrl: "imageUrl",
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

const adaptCarDetailsRecord = (record: any, fromBackend?: boolean) => {
  const keyMap = {
    id: "id",
    imageUrl: "imageUrl",
    year: "year",
    sold: "sold",
    title: "title",
    price: "marketplacePrice",
    oldPrice: "marketplaceOldPrice",
    name: "carName",
    fuelType: "fuelType",
    model: "model",
    brand: "brand",
    brandImageUrl: "brandImageUrl",
    condition: "sellingCondition",
    state: "state",
    city: "city",
    interiorColor: "interiorColor",
    exteriorColor: "exteriorColor",
    country: "country"
  };

  const processedRecord = {
    ...record,

    brand: record.model.make.name,
    brandImageUrl: record.model.make.imageUrl
  };

  const adaptedRecord = Object.entries(keyMap).reduce((map, arr) => {
    const value = processedRecord[fromBackend ? arr[1] : arr[0]];
    return value === undefined || value === ""
      ? map
      : {
          ...map,
          [fromBackend ? arr[0] : arr[1]]: value
        };
  }, {});

  return adaptedRecord;
};

export const getCar: (id: string) => Promise<RequestResponse<Car>> = async id => {
  try {
    const response = await restAPIInstance.get(`/inventory/car/${id}`);
    return {
      error: false,
      data: adaptCarDetailsRecord(response, true) as CarDetails
    };
  } catch (err) {
    return {
      error: true,
      message: (err as Error).message,
      data: null
    };
  }
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
