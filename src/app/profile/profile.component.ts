import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  pSkills = ['Angular', 'NodeJS', 'MongoDB', 'Javascript', 'HTML', 'CSS', 'jQuery'];
  tSkills = ['Service Now(SNOW)', 'GIT', 'JIRA', 'Postman', 'Oracle Web-Logic Server', 'WinSCP', 'GIMP 2.0', 'Google Web Designer (GWD)', 'SourceTree'];

  constructor() { }

  ngOnInit(): void {
  }

}
