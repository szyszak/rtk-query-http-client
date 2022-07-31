import { HttpClient, HttpParams } from '@angular/common/http';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import { lastValueFrom } from 'rxjs';
import { InjectorInstance } from '../app.module';

export const angularBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string;
      method?: string;
      data?: any;
      params?: HttpParams;
    },
    unknown,
    unknown
  > =>
  async ({ url, method = 'get', data, params }) => {
    const http = InjectorInstance.get(HttpClient);

    const fullUrl = `${baseUrl}${url}`;

    const request$ = http.request(method, fullUrl, {
      body: data,
      params,
    });

    const result = await lastValueFrom(request$);

    return {
      data: result,
    };
  };
