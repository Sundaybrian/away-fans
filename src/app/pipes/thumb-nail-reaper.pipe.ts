import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "thumbNailReaper",
})
export class ThumbNailReaperPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    // receives an article,thumbnail "background-image: url(https://i.ytimg.com/vi/Lzvt8WQob-Y/default.jpg)"
    // returns https://i.ytimg.com/vi/Lzvt8WQob-Y/default.jpg

    const regex = /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/;

    // Array(3) [ "https://i.ytimg.com/vi/VnRSYyK-HZs/default.jpg)", "https", "/vi/VnRSYyK-HZs/default.jpg)" ]
    let thumbnail = value.match(regex);
    thumbnail = thumbnail[0].slice(0, -1).toString();

    return thumbnail;
  }
}
