import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent implements OnInit {
  form: FormGroup;

  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      promptValue: ['', this.data.validators]
    });
  }

}
