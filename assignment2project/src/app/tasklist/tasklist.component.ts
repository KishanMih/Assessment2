import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, ViewChild , OnInit, Output, EventEmitter,} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, FormsModule} from '@angular/forms';
import { ProjectListComponent } from "../project-list/project-list.component";

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule, FormsModule, ProjectListComponent],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.scss'
})
export class TasklistComponent implements OnInit{
  

  @ViewChild('myTableRef') myTableRef: ElementRef | undefined;

  // public myTableRef:any 
  public taskdata:any;
  public tablelistdata:boolean=true;
  // child: any;
  @Output() rowSelected = new EventEmitter<any>()
  public selecttrvalue:any= {
    ID: '',
    priority: '',
    start_date: '',
    Due_date: '',
    Title: '',
    status: ''
  };
  public selecttrindex_update:any;
  // public item:any; //delete feching style items
  public checkoutForm: any;
  public createform:boolean=false;
  public updateform:boolean=false;
  filteredData: any[] = []; // stored filled value 
  filterTitle: string = '';
  filtersn: any;
  row: any;
  public projectdetailspage:boolean=false;
selectedData: any;

applyFilter(columnName: string): void {
  let filterValue: string|number;

  switch (columnName) {
    case 'Title':
      filterValue = this.filterTitle;
      break;
    case 'sn':
      filterValue = this.filtersn;
      break;
   
    default:
      return; // no value retrun comes now that
  }

  if (filterValue) {
    this.filteredData = this.taskdata.filter((item: any) => String(item[columnName]).toLowerCase().includes(String(filterValue).toLowerCase()));
  } else {
    this.filteredData = [...this.taskdata];//filter empty value deleteing to this conditions
  }
}
constructor(){
  this.taskdata=[
    {
      "sn":1,
      "Title":"Office Open time",
      "status":"Pending",
      "priority":"Mideum",
      "start_date":"01-08-2024",
      "Due_date":"05-08-2024"
    },
    {
      "sn":2,
      "Title":"Payment collection",
      "status":"success",
      "priority":"High",
      "start_date":"01-08-2024",
      "Due_date":"05-08-2024"
    },
    {
      "sn":3,
      "Title":"office close time",
      "status":"Pending",
      "priority":"High",
      "start_date":"01-08-2024",
      "Due_date":"05-08-2024"
    },
    {
      "sn":4,
      "Title":"Doctors daily reports",
      "status":"reject",
      "priority":"High",
      "start_date":"01-08-2024",
      "Due_date":"05-08-2024"
    },
    {
      "sn":5,
      "Title":"appointment date",
      "status":"success",
      "priority":"High",
      "start_date":"01-08-2024",
      "Due_date":"05-08-2024"
    },
    {
      "sn":6,
      "Title":"exray list",
      "status":"success",
      "priority":"Low",
      "start_date":"01-08-2024",
      "Due_date":"05-08-2024"
    }
  ]
  this.filteredData = [...this.taskdata];
}
ngOnInit(): void {
}

trdelete(x:any){
var delBtn = confirm(" Do you want to delete ?");
  if ( delBtn == true ) {
this.taskdata.splice(x,1)
}  
}

traddTable() {
  this.createform=true;
  this.tablelistdata=false
}
trupdate(event: Event, item: any, index: number) {
  this.tablelistdata = false;
  this.updateform = true;
  this.selecttrvalue = item;
  this.selecttrindex_update=index;
}

// formData = {
//   ID: '',
//   Title: '',
//   Priority:'',
//   Due_date:'',
//   Status:''
// };
onSubmit(formData: any) {
  let obj;

  // Trim input values to handle cases where users enter only spaces
  formData.ID = formData.ID;
  formData.taskstatus = formData.taskstatus;
  formData.priority = formData.priority;
  formData.title = formData.title;
  formData.updateID = formData.updateID;
  formData.updatepriority = formData.updatepriority;
  
  formData.updatestart_date = formData.updatestart_date;
  formData.updateDue_date = formData.updateDue_date;
  formData.updatetitle = formData.updatetitle;

  if (formData.ID !== '' && formData.taskstatus !== '' && formData.priority !== '' && formData.title !== '') {
    obj = {
      sn: formData.ID,
      status: formData.taskstatus,
      priority: formData.priority,
      start_date: formData.start_date,
      Due_date: formData.Due_date,
      Title: formData.title
    };
    this.taskdata.push(obj);
    this.createform = false;
    this.tablelistdata = true;
  } else if (formData.updateID !== '' && formData.updatepriority !== '' && formData.updateDue_date !== '' && formData.updatetitle !== '') {
    obj = {
      sn: formData.updatepriority,
      status: formData.updatetaskstatus,
      priority: formData.updatepriority,
      
      start_date: formData.updatestart_date, 
      Due_date: formData.updateDue_date, 
      Title: formData.updatetitle
    };
    if (obj.sn && obj.status && obj.priority && obj.Due_date && obj.Title) {
      if (!Array.isArray(this.taskdata[this.selecttrindex_update])) {
          this.taskdata[this.selecttrindex_update] = [];
      }
      this.taskdata[this.selecttrindex_update].push(obj);
      
  }
  } else {
    console.log("Form data is insufficient or invalid.");
  }
  this.createform = false;
      this.tablelistdata = true;
      this.updateform = false;
}

createformclose(){
  this.createform=false;
  this.tablelistdata=true;
  this.updateform=false;
}

projectdetails(event: Event, item: any, index: number) {
  debugger
  this.tablelistdata = false;
  this.updateform = false;
  this.selecttrvalue = item;
  this.selecttrindex_update=index;
  this.projectdetailspage=true;
  console.log(item)
 console.log( this.rowSelected.emit(this.selecttrvalue ));
}

onRowSelect(item: any): void {
  console.log('Row selected:', item);

  this.tablelistdata = false;
  this.updateform = false;
  this.projectdetailspage=true;
  this.selecttrvalue=item;
 console.log( this.rowSelected.emit(item));
}

}
