import { Component, OnInit } from '@angular/core';
import { HsCommonService} from '../hs-common.service';

@Component({
  selector: 'app-hs-navbar',
  templateUrl: './hs-navbar.component.html',
  styleUrls: ['./hs-navbar.component.scss']
})
export class HsNavbarComponent implements OnInit {

  showSidepanel:boolean;

  constructor(private commonService: HsCommonService) { }

  ngOnInit() {
    this.commonService.currentState.subscribe(_currentState => this.showSidepanel = _currentState);
  }
  sidebarToggle(){
    this.commonService.changeState(!this.showSidepanel);
  }
}
