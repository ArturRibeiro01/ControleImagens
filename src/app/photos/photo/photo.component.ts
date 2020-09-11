import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gpa-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  @Input() description = ""
  @Input() url = ""


  constructor() { }

  ngOnInit(): void {
  }

}