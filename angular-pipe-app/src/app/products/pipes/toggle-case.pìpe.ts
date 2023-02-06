import {Pipe, PipeTransform} from "@angular/core";


@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePiPe implements PipeTransform {
  transform(value: string, ...args: any): string {
    return value.toUpperCase();
  }

}
