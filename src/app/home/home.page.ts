import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

interface Data {
  hello: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: Data | undefined;


  constructor(private db: AngularFirestore) {
    this.db.doc<Data>('test/myDoc').valueChanges().subscribe((res: Data | undefined) => {
      if (res) {
        this.data = res;
      }
    });
  }

}
