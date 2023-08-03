import { runSaga } from "redux-saga";
import axios from "axios";
import {
  fetchProductsSaga,
  fetchProductDetailsSaga,
} from "../services";
import {
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchProductsDetailsSuccess,
  fetchProductsDetailsFailure,
} from "../actions";

// Mock de Axios
jest.mock("axios");

const executeSaga = async (saga, payload, response, error) => {
  axios.get.mockClear();

  if (response) {
    axios.get.mockResolvedValue({ data: response });
  } else if (error) {
    axios.get.mockRejectedValue(error);
  }

  const dispatched = [];
  await runSaga(
    {
      dispatch: (action) => dispatched.push(action),
    },
    saga,
    { payload }
  ).toPromise();

  return dispatched;
};

describe("fetchProductsSaga", () => {
  it("dispatches FETCH_PRODUCTS_SUCCESS on successful fetch", async () => {
    const payload = { search: "oferta" };
    const response = { data: [] };

    const dispatched = await executeSaga(
      fetchProductsSaga,
      payload,
      response
    );

    expect(dispatched).toEqual([fetchProductsSuccess(response)]);
  });

  it("dispatches FETCH_PRODUCTS_FAILURE on fetch error", async () => {
    const payload = "oferta";
    const error = new Error("An error occurred");

    const dispatched = await executeSaga(
      fetchProductsSaga,
      payload,
      null,
      error
    );

    expect(dispatched).toEqual([fetchProductsFailure(error.message)]);
  });
});

describe("fetchProductDetailsSaga", () => {
  it("dispatches FETCH_PRODUCT_DETAILS_SUCCESS on successful fetch", async () => {
    const payload = { search: "oferta" };
    const response = { data: [] };

    const dispatched = await executeSaga(
      fetchProductDetailsSaga,
      payload,
      response
    );

    expect(dispatched).toEqual([fetchProductsDetailsSuccess(response)]);
  });

  it("dispatches FETCH_PRODUCT_DETAILS_FAILURE on fetch error", async () => {
    const payload = "MLA1118163939";
    const error = new Error("An error occurred");

    const dispatched = await executeSaga(
      fetchProductDetailsSaga,
      payload,
      null,
      error
    );

    expect(dispatched).toEqual([fetchProductsDetailsFailure(error.message)]);
  });
});
