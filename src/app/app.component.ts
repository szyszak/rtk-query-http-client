import { Component, OnInit } from '@angular/core';
import { useGetUsersQuery } from './api/users-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}

  getUsersQuery$ = useGetUsersQuery();

  ngOnInit(): void {
    this.getUsersQuery$.subscribe(console.log);
  }
}
