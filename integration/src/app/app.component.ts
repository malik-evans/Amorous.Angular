import {Component, Injectable, OnInit} from '@angular/core';
import {EntityCache, EntityCollectionService, EntityServices} from "@ngrx/data";
import {Store} from "@ngrx/store";
import {FactoryBase} from "./design/factory/factory-base";
import * as Faker from 'faker';
import {Observable} from "rxjs";

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
