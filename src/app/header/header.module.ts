import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  bootstrapEmojiWinkFill,
  bootstrapHouseDoor,
} from '@ng-icons/bootstrap-icons';
import { NgIconsModule } from '@ng-icons/core';
import { HeaderComponent } from './header.component';

const icons = { bootstrapEmojiWinkFill, bootstrapHouseDoor };

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, NgIconsModule.withIcons(icons)],
  exports: [HeaderComponent],
})
export class HeaderModule {}
