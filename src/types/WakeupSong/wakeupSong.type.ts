import { Response } from "types/Util/response.type";

export interface WakeupSong {
  readonly id: 0;
  readonly thumbnail: string;
  readonly videoTitle: string;
  readonly videoId: string;
  readonly videoUrl: string;
  channelTitle: string;
  readonly status: "ALLOWED" | "PENDING" | "DENIED";
  createdAt: string;
}

export interface MyWakeupSongsResponse extends Response {
  data: WakeupSong[];
}

export interface TodayAllowedWakeupSongsResponse extends Response {
  data: WakeupSong[];
}
