import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';

import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private request = axios.create({
    baseURL: environment.urlAPI,
    timeout: 0,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });

  constructor() { }

  async readId(url: String, id: Number) {
    try {
      let response = await this.request.get(`${url}/${id}`);
      return await (response.data.data);
    } catch (error) {
      const { response } = error;
      const { request, ...errorObject } = response;
      return {
        message: "error",
        data: errorObject.data.data,
      }
    }
  }

  async read(url: string, params: string = "") {
    try {
      let response = await this.request.get(url, {
        params: params
      });
      return await (response.data.data);
    } catch (error) {
      const { response } = error;
      const { request, ...errorObject } = response;
      return {
        message: "error",
        data: errorObject.data.data,
      }
    }
  }

  async create(url: string, data: any) {
    try {
      let response = await this.request.post(url, data);
      return await (response.data);
    } catch (error) {
      const { response } = error;
      const { request, ...errorObject } = response;
      return {
        message: "error",
        data: errorObject.data.data,
      }
    }
  }

  async update(url: string, data: any) {
    try {
      let response = await this.request.post(url, data);
      return await (response.data);
    } catch (error) {
      const { response } = error;
      const { request, ...errorObject } = response;
      return {
        message: "error",
        data: errorObject.data.data,
      }
    }
  }

  async post(url: string, data: any = []) {
    try {
      let response = await this.request.post(url, data);
      return await (response.data);
    } catch (error) {
      const { response } = error;
      const { request, ...errorObject } = response;
      return {
        message: "error",
        data: errorObject.data.data,
      }
    }
  }
  async delete(url: string) {
    try {
      let response = await this.request.delete(url);
      return await (response.data);
    } catch (error) {
      const { response } = error;
      const { request, ...errorObject } = response;
      return {
        message: "error",
        data: errorObject.data.data,
      }
    }
  }
  async upload(url: string, data: any = []) {
    try {
      let response = await axios.post(`${environment.urlAPI}${url}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${localStorage.token}`
        },
      });
      return await (response.data);
    } catch (error) {
      const { response } = error;
      const { request, ...errorObject } = response;
      return {
        message: "error",
        data: errorObject.data.data,
      }
    }
  }
}
