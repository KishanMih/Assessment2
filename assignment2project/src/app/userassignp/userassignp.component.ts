import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-userassignp',
  standalone: true,
  imports: [],
  templateUrl: './userassignp.component.html',
  styleUrl: './userassignp.component.scss'
})
export class UserassignpComponent {
  @Input() inputData: any;
  @Input() inputuserdata:any;
}
