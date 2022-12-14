import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { GroupsService } from '../services/groups.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-updategroup',
  templateUrl: './updategroup.page.html',
  styleUrls: ['./updategroup.page.scss'],
})
export class UpdategroupPage implements OnInit {

  updateUserFg: FormGroup;
  id: any;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";
  group: any;

  constructor(
    private groupService: GroupsService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
 
   }

   ngOnInit() {
    this.getGroup();
    console.log("ID en update "+this.id);
    this.fetchUser(this.id);
    this.updateUserFg = this.formBuilder.group({
      id: [this.id],
      name: [''],
      nationality: ['']
    })
  }

  takePhoto() {
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  getGroup(){
    this.groupService.getGroup(this.id).subscribe(response=> {
      this.group = response;
      console.log(this.group);
    });
  }

  pickImage() {
    this.photoService.pickImage().then(data => {

      this.capturedPhoto = data.webPath;

    });
  }

  discardImage() {
    this.capturedPhoto = null;
  }

  fetchUser(id) {
    this.groupService.getGroup(id).subscribe((data) => {
      this.updateUserFg.setValue({
        id: data['id'],
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

  // async onSubmit() {
  //   if (!this.updateUserFg.valid) {
  //     console.log("estoy aqui primer if");
  //     return false;
  //   } else {
  //     console.log("estoy aqui primer else");
  //     let blob = null;
  //     if (this.capturedPhoto != "") {
  //       console.log("estoy aqui segundo  if");
  //       const response = await fetch(this.capturedPhoto);
  //       blob = await response.blob();
  //     }
  //     this.groupService.updateGroup(this.updateUserFg.value, blob)
  //       .subscribe(() => {
  //         this.updateUserFg.reset();
  //         this.router.navigate(['/groups']);
  //       })
  //   }
  // }

}

