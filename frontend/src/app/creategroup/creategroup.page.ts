import { Component, OnInit, NgZone } from '@angular/core';
import { GroupsService } from '../services/groups.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-creategroup',
  templateUrl: './creategroup.page.html',
  styleUrls: ['./creategroup.page.scss'],
})
export class CreategroupPage implements OnInit {

  userForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private GroupsService: GroupsService   
  ) {
    this.userForm = this.formBuilder.group({
      name: [''],
      nationality: ['']
    })
  }

  ngOnInit() { }

  onSubmit() {
    if (!this.userForm.valid) {
      return false;
    } else {
      this.GroupsService.createGroup(this.userForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.userForm.reset();
            this.router.navigate(['/groups']);
          })
        });
    }
  }

}