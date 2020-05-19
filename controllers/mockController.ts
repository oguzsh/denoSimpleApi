import MockData from "../data/mockData.ts";
import MockModel from "../models/mockModel.ts";

export const getData = ({ response }: { response: any }) => {
  response.body = MockData;
};

export const getSelectedData = (
  { response, params }: { response: any; params: { username: string } },
) => {
  const selectedUsername = params.username;
  const selectedData = MockData.find((data) =>
    selectedUsername === data.username
  );

  if (selectedUsername) {
    response.body = selectedData;
  } else {
    response.status = 404;
    response.body = { message: "Not found" };
  }
};

export const addData = async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body();
  const data: MockModel = body.value;
  MockData.push(data);
  response.status = 200;
  response.body = { message: "Data saved successfully" };
};

export const updateData = async (
  { request, response, params }: { request: any; response: any; params: any },
) => {
  let selectedData = MockData.find((data) => params.username == data.username);

  if (selectedData) {
    const body = await request.body();
    const updatedData: MockModel = body.value;
    selectedData.first_name = updatedData.first_name;
    selectedData.last_name = updatedData.last_name;
    selectedData.email = updatedData.email;
    selectedData.gender = updatedData.gender;

    response.status = 200;
    response.body = { message: "Data updated succesfully" };
  } else {
    response.status = 404;
    response.body = { message: "There is no such data" };
  }
};

export const deleteData = (
  { request, response, params }: { request: any; response: any; params: any },
) => {
  const data = MockData.filter((data) => data.username != params.username);

  response.status = 200;
  response.body = { message: "Data removed successfully" };
};
