import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "formatDate"
})
export class FormatDatePipe implements PipeTransform {
  transform(value: any, locale: "pt-BR"): any {
    if (value.length < 10) {
      return value;
    }
    let dataArray = value.split("-");
    if (dataArray.length != 3) {
      return value;
    }
    if (dataArray[0].length != 4) {
      return value;
    }
    if (dataArray[1].length != 2) {
      return value;
    }
    if (dataArray[2].length != 2) {
      return value;
    }

    let date = new Date(dataArray[0], dataArray[1] - 1, dataArray[2]);
    return Intl.DateTimeFormat(locale).format(date);
  }
}
