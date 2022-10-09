import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../services/groups.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {

  groups: any = [];

  constructor(private groupService: GroupsService, private router : Router) {}


  ngOnInit(){
    this.getAllGroups();
  }

  getAllGroups(){
    this.groupService.getgroups().subscribe(response=> {
      this.groups = response;
    });
  }

  removeGroup(id){
    this.groupService.deleteGroup(id).subscribe(data =>{
    this.getAllGroups();

    });
  }

  getGroup(){
    var id = parseInt(prompt("Introduzca el Nombre"));
    this.groupService.getGroup(id).subscribe(response => {
    this.groups=response;

    });
  }

  goToUpdate(id){

    this.router.navigateByUrl("/updategroup/", id);
  }


}
