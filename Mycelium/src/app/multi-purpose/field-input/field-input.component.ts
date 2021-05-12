import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-field-input',
  templateUrl: './field-input.component.html',
  styleUrls: ['./field-input.component.css']
})
export class FieldInputComponent implements OnInit {
  @Output() addingEntryModeChanged = new EventEmitter<boolean>();
  @Output() newEntryChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  cancel() {
    this.addingEntryModeChanged.emit(false);
  }

  addNewEntry(newEntry: string) {
    this.newEntryChanged.emit(newEntry);
  }
}
