import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Repo } from '../repo';
import { RepoService } from '../repo.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  dados:Repo[];
  
  @Input() repos: Repo[];
  @Output() formSubmit: EventEmitter<Repo[]> = new EventEmitter<Repo[]>();

  constructor(private service: RepoService) { }

  ngOnInit(): void {
  }
  
  onSubmit(form: NgForm){
    this.service.list(form.value.user).subscribe((value)=> {
      this.dados = value
      this.formSubmit.emit(this.dados);
    });
    //this.formSubmit.emit(this.dados);
    form.reset();
  }

}
