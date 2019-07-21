import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { EntityServices} from "@ngrx/data";
import {Post, User, UserFactory} from "./app/app.component";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then( a => {
    var entityServices: EntityServices = a.injector.get(EntityServices);
    var userFactory: UserFactory = a.injector.get(UserFactory);
    var userService  = entityServices.getEntityCollectionService<User>("User");
    var post  = entityServices.getEntityCollectionService<Post>("Post");

    for (var i = 0; i < 30; i++)
    {
      var user: User = userFactory.create();
      var sampleUser: User = { id: "1", name: "jeff", posts: []};
      post.addOneToCache(<Post>{ id: i.toLocaleString(), content: "joe", userId: i.toLocaleString() });
      userService.addOneToCache(user);
    }
    userService.addOneToCache(sampleUser);
    setTimeout(() => {
      console.info(userService.getAll());
    }, 2000);

  })
  .catch(err => console.error(err));
