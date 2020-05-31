import { Component, OnInit } from "@angular/core";
import { Video } from "../models/article.model";
import { HomeService } from "../services/home.service";

@Component({
  selector: "app-video",
  templateUrl: "./video.page.html",
  styleUrls: ["./video.page.scss"],
})
export class VideoPage implements OnInit {
  videos: Video[] = [];
  isLoading = true;

  constructor(private homeSrvc: HomeService) {}

  ngOnInit() {
    this.homeSrvc
      .getVideos()
      .toPromise()
      .then((res) => {
        this.isLoading = false;
        this.videos = res["results"];
      });
  }

  loadMoreVideos() {
    // @TODO query backend for more videos
  }
}
