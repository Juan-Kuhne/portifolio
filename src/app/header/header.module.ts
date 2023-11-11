import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  bootstrapBook,
  bootstrapBuildings,
  bootstrapEmojiWinkFill,
  bootstrapHouseDoor,
  bootstrapListCheck,
  bootstrapPersonLinesFill,
} from '@ng-icons/bootstrap-icons';
import { NgIconsModule } from '@ng-icons/core';
import { HeaderComponent } from './header.component';

const icons = {
  bootstrapEmojiWinkFill,
  bootstrapHouseDoor,
  bootstrapListCheck,
  bootstrapBook,
  bootstrapBuildings,
  bootstrapPersonLinesFill,
};

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, NgIconsModule.withIcons(icons)],
  exports: [HeaderComponent],
})
export class HeaderModule {}
