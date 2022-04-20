import { Component } from '@angular/core';

@Component({
  selector: 'app-planner-simple',
  templateUrl: './planner-simple.component.html',
  styleUrls: ['./planner-simple.component.scss']
})
export class PlannerSimpleComponent {
  tasks: string[] = ['Task 1', 'Task 2', 'Task 3'];
  inputValue: string = "";
  addTask(): void {
    if(this.inputValue.trim()) {
      this.tasks.push(this.inputValue.trim());
      this.inputValue = "";
    }
  }
}
