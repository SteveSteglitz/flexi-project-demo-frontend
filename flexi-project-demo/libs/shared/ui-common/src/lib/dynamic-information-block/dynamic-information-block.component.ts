import {Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BaseDynamicInfo} from "@flexi-project-demo/shared-domain";
import { MatInputModule} from "@angular/material/input";
import { MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-dynamic-information-block',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, ReactiveFormsModule],
  templateUrl: './dynamic-information-block.component.html',
  styleUrl: './dynamic-information-block.component.css',
})
export class DynamicInformationBlockComponent {
  infos = input<BaseDynamicInfo[]>([]);

  dynamicForm = computed(() => this.createFormGroup(this.infos()));

  createFormGroup(dynamicInfos: BaseDynamicInfo[]): FormGroup {
    const group: any = {};

    dynamicInfos.forEach((info) => {
      group[info.fieldname] = new FormControl({value: info.fieldvalue, disabled: true});
    });

    return new FormGroup(group);
  }
}
