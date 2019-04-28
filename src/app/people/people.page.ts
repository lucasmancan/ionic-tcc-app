import { Component, OnInit } from '@angular/core';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

public contactList: any;

// tslint:disable-next-line: deprecation
  constructor(private contacts: Contacts, private callNumber: CallNumber) { }

  ngOnInit() {
    // this.contactList = this.contacts.find(['*']);
  }


  // callContact(number: string) {
  //   this.callNumber.callNumber(number, true)
  //     .then(() => console.log('Dialer Launched!'))
  //     .catch(() => console.log('Error launching dialer'));
  // }
// let contact: Contact = this.contacts.create();

// contact.name = new ContactName(null, 'Smith', 'John');
// contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
// contact.save().then(
//   () => console.log('Contact saved!', contact),
//   (error: any) => console.error('Error saving contact.', error)
// );
}



