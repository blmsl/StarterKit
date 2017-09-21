import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent implements OnInit {
  promptValue: any;
  constructor( @Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
