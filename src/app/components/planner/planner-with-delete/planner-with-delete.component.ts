import { Component } from '@angular/core';
import { v4 as getId } from 'uuid';

interface PlannerTask {
  id: string;
  text: string;
  done: boolean;
}

enum PlannerFilterEnum {
  ALL, DONE, TODO
}

@Component({
  selector: 'app-planner-with-delete',
  templateUrl: './planner-with-delete.component.html',
  styleUrls: ['./planner-with-delete.component.scss']
})

export class PlannerWithDeleteComponent {
  tasks: PlannerTask[] = [
    {
      id: getId(),
      text: "Task 1",
      done: true
    }
  ];
  inputValue: string = "";
  plannerTaskFilter = PlannerFilterEnum.ALL;
  plannerTaskFilterEnum = PlannerFilterEnum;

  addTask(): void {
    if(this.inputValue.trim()) {
      this.tasks.push({ id: getId(), text: this.inputValue.trim(), done: false});
      this.inputValue = "";
    }
  }

  setTaskDone(event: Event, id: string) {
    const eventTarget = event.target as HTMLInputElement;
    this.tasks = this.tasks.map(task => {
      if (task.id === id) {
        return {...task, done: eventTarget.checked}
      } else {
        return task;
      }
    });
  }

  setTaskFilter(filter: PlannerFilterEnum): void {
    this.plannerTaskFilter = filter;
  }

  getFilteredTasks(): PlannerTask[] {
    switch (this.plannerTaskFilter) {
      case PlannerFilterEnum.DONE:
        return this.tasks.filter(task => task.done);
      case PlannerFilterEnum.TODO:
        return this.tasks.filter(task => !task.done);
      default:
        return this.tasks;
    }
  }

  getProgress(): number {
    return this.tasks.filter(task=>task.done).length;
  }

  removeTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

}
