import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { GroupsService } from '../services/groups.service';

@Component({
  selector: 'app-updategroup',
  templateUrl: './updategroup.page.html',
  styleUrls: ['./updategroup.page.scss'],
})
export class UpdategroupPage implements OnInit {

  updateUserFg: FormGroup;
  id: any;

  constructor(
    private groupService: GroupsService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
 
   }

   ngOnInit() {
    console.log("ID en update "+this.id);
    this.fetchUser(this.id);
    this.updateUserFg = this.formBuilder.group({
      name: [''],
      nationality: [''],
    })
  }

  fetchUser(id) {
    this.groupService.getGroup(id).subscribe((data) => {
      this.updateUserFg.setValue({
        name: data['name'],
        nationality: data['nationality'],
      });
    });
  }

  onSubmit() {
    if (!this.updateUserFg.valid) {
      return false;
    } else {
      this.groupService.updateGroup(this.id, this.updateUserFg.value)
        .subscribe(() => {
          this.updateUserFg.reset();
          this.router.navigate(['/groups']);
        })
    }
  }

}

