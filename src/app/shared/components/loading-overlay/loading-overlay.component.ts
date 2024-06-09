import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoadingService } from '../../../core/services/loading.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loading-overlay',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './loading-overlay.component.html',
  styleUrl: './loading-overlay.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingOverlayComponent {
  loading: Observable<boolean>;

  constructor(private loadingService: LoadingService) {
    this.loading = this.loadingService.loading;
  }
}
