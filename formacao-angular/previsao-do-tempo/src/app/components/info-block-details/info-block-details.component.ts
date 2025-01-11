import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-info-block-details',
  imports: [FontAwesomeModule],
  templateUrl: './info-block-details.component.html',
  styleUrl: './info-block-details.component.scss'
})
export class InfoBlockDetailsComponent {

  @Input() icon: any;
  @Input() label!: string;
  @Input() value: string | number = '';

}
