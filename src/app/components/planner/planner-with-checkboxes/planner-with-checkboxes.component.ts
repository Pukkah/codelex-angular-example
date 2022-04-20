import { Component } from '@angular/core';

interface PlannerTask {
  text: string;
  done: boolean;
}

@Component({
  selector: 'app-planner-with-checkboxes',
  templateUrl: './planner-with-checkboxes.component.html',
  styleUrls: ['./planner-with-checkboxes.component.scss']
})
export class PlannerWithCheckboxesComponent {
  tasks: PlannerTask[] = [
    {
      text: "Task 1",
      done: true
    }
    ];
  inputValue: string = "";

  addTask(): void {
     if(this.inputValue.trim()) {
       this.tasks.push({text: this.inputValue.trim(), done: false});
       this.inputValue = "";
     }
  }

  setTaskDone(event: Event, index: number) {
    const eventTarget = event.target as HTMLInputElement;
    this.tasks[index].done = eventTarget.checked;
  }
}
