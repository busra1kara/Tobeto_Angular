import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'appFormControlErrorMessage',
  standalone: true,
})
export class FormControlErrorMessagePipe implements PipeTransform {

  transform(control: AbstractControl | null | undefined): string | null {
    if(!control){
      console.log('buradayım');
      return null;
    }


    if(control.invalid && control.touched){
      if(control.errors?.['required']){
        console.log('asıl buradayım');
        return 'This field is required';
      }
    }

    return null;
  }

}
