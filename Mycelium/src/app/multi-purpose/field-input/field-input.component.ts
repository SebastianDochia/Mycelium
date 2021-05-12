import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-field-input',
  templateUrl: './field-input.component.html',
  styleUrls: ['./field-input.component.css']
})
export class FieldInputComponent implements OnInit {
  @Output() addingParticipantModeChanged = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  cancel() {
    console.log("cancel");
    this.addingParticipantModeChanged.emit(false);
  }
}
