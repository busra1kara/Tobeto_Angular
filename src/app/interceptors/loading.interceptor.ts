import type { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '../core/services/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  if (req.method !== 'GET') {
    loadingService.showLoading();
  }

  return next(req).pipe(
    finalize(() => {
      if (req.method !== 'GET') {
        loadingService.hideLoading();
      }
    })
  );
};
