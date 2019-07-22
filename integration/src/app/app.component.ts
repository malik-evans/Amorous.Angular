import {Component, Injectable, OnInit} from '@angular/core';
import {EntityCache, EntityCollectionService, EntityServices} from "@ngrx/data";
import {Store} from "@ngrx/store";
import {FactoryBase} from "./design/factory/factory-base";
import * as Faker from 'faker';
import {Observable} from "rxjs";
import {MenuItem} from "primeng/api";

export interface User {
  id: string;
  name: string;
  posts: Post[];
}

export interface Post {
  id: string;
  content: string;
  userId: string;
}

@Injectable()
export class UserFactory extends FactoryBase<User> {
  create(): User {
    return <User>{
      id: Faker.random.uuid().toString(),
      name: Faker.name.findName()
    };
  }

}

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>{{ title }}</h1>
    </div>
  `,
})
export class AppComponent implements OnInit {
  title = 'integration';
  navItems: MenuItem[] = [
    { label: "Me", url: "https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware/write?view=aspnetcore-2.2" }
  ];

  userService: EntityCollectionService<User>;
  selectedUser: Observable<User>;

  constructor(
    private store: Store<EntityCache>,
    private services: EntityServices) {
    this.userService = services.getEntityCollectionService<User>('User')
  }

  ngOnInit(): void {

  }
}
