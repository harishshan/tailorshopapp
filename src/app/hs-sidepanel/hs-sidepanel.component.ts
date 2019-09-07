import { Component, OnInit } from '@angular/core';
import { HsCommonService} from '../hs-common.service';

@Component({
  selector: 'app-hs-sidepanel',
  templateUrl: './hs-sidepanel.component.html',
  styleUrls: ['./hs-sidepanel.component.scss']
})
export class HsSidepanelComponent implements OnInit {
  showSidepanel:boolean;
  constructor(private commonService: HsCommonService) { }

  ngOnInit() {
    this.commonService.currentState.subscribe(_currentState => this.showSidepanel = _currentState);
  }
}
