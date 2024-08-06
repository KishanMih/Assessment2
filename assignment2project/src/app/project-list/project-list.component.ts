import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';



@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, FormsModule,ToastrModule ],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
selectedProject: any;
@Output() sendDataEvent = new EventEmitter<string>();
public userasign:boolean=false;
public selectedDevice:any
item: any;
sendData(): void {
  const dataToSend = 'Hello from Child!';
  this.sendDataEvent.emit(dataToSend);
}



handleRowSelection(selectedData: any): void {debugger;
  console.log('Received selected data:', selectedData);
  // Perform actions with the selected data
}
@Output() rowSelected = new EventEmitter<any>();
   public projectUpdate :boolean=true;
  emitData(): void {
    const item = { id: 1, name: 'Example Item' }; // Example data
    this.rowSelected.emit(item);
    console.log(item)
    console.log( this.inputData)
  }
  @Input() inputData: any;
  constructor(){
    
  }
  
  progress = 0; // Initial progress value

  incrementProgress(): void {
    if (this.progress < 100) {
      this.progress += 10; // Increase progress by 10%
    }
  }
  formData={
    team:'' ,
    userasign:''
  }
  onSubmit(formDatas: any) {
    debugger
    let obj;
    formDatas.team;
    formDatas.userasign;
    obj = {
      team:formDatas.team,
      userasign:formDatas.userasign,
      projectName:this.inputData.Title
    }
    
  }
  reateformclose(){
    this.userasign=false;
  }
  openform(){
    this.userasign=true;
  }
  onChange(event:any) {
    debugger;
    let target=event.target.value
    console.log(this.selectedDevice = target );
    // I want to do something here with the new selectedDevice, but what I
    // get here is always the last selection, not the one I just selected.
}
}
