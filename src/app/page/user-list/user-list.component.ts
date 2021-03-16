import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

class Column{
  name:string="";
  title:string="";
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  columns:Column[]=[
    {name:"id", title:"#"},
    {name:"name", title:"Name"},
    {name:"email", title:"Email"},
    {name:"address", title:"Address"},
    {name:"active", title:"Active"},
  ]

  users$: Observable<User[]> = this.userService.getAll();

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

}



