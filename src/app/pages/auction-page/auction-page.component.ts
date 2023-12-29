import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-auction-page',
  templateUrl: './auction-page.component.html',
  styleUrls: ['./auction-page.component.css'],
  providers: [MessageService]
})
export class AuctionPageComponent {
  constructor(private messageService: MessageService) { }

  showSavedToastMessage() {
    this.messageService.add({ severity: 'info', summary: 'Saved!', detail: 'Auction added to your saved list!' });
  }

}
