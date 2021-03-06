import axios from "axios";

const api = axios.create({
  baseURL: "https://betval-app.herokuapp.com/",
});

export async function postData(endpoint, data) {
  return api.post(`${endpoint}`, {
    ...data,
  });
}

export async function formPostData(endpoint, data, token) {
  return api.post(
    `${endpoint}`,
    {
      ...data,
    },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
}

export async function formGetData(endpoint, token) {
  return api.get(`${endpoint}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}
export async function patchData(endpoint, id, data, token) {
  return api.patch(
    `${endpoint}/${id}`,
    { ...data },
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
}
export async function formPostContent(endpoint, data, token) {
  return api.post(
    `${endpoint}`,
    {
      ...data,
    },
    {
      headers: {
        authorization: `Bearer ${token}`,
        accept: "application/json",
        "Content-Type": `multipart/form-data`,
      },
    }
  );
}
