import axios from "axios";

export default class Youtube {
  constructor() {
    this.instance = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    return this.instance
      .get(`search`, {
        params: {
          part: "snippet",
          q: keyword,
          maxResults: 10,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.filter(itme => itme.id.kind === "youtube#video"))
      .then((items) =>
        items.map((item) => {
          console.log(item)
          return ({ ...item, id: item.id.videoId })
        })
      );
  }

  async #mostPopular() {
    return this.instance
    .get("videos", {
        params: {
          part: "snippet",
          chart: "mostPopular",
          maxResults: 10,
        },
      })
      .then((res) => res.data.items);
  }
}
