import {
  NewsResource,
  NewsIdResource,
  NewsDateResource,
  NewsInfoResource,
  TopicsResource,
  TopicsIdResource,
  SectionsResource,
  SectionIdResource
} from './resouce'
import axios from 'axios'
// export default {
//   getNews() {
//     // return axios.get(NewsResource);
//     return new Promise((resolve, reject) => {
//       axios.get(NewsResource).then(res => res.data).then(data => {
//         resolve(data);
//       });
//     });
//   },
//   getNewsById(id) {
//     return axios.get(NewsIdResource + id)
//   },
//   getNewsByDate(date) {
//     return axios.get(NewsDateResource + date)
//   },
//   getNewsInfoById(id) {
//     return axios.get(NewsInfoResource, {
//       params: {
//         id: id
//       }
//     })
//   },
//   getTopics() {
//     return axios.get(TopicsResource)
//   },
//   getTopicsById(topicid) {
//     return axios.get(TopicsIdResource + topicid)
//   },
//   getSections() {
//     return axios.get(SectionsResource)
//   },
//   getSectionsById(sectionid) {
//     return axios.get(SectionIdResource, {
//       params: {
//         sectionid: sectionid
//       }
//     })
//   }
// }
export const getNews = () => new Promise((resolve, reject) => {
  axios.get(NewsResource)
  .then(res => res.data)
  .then(data => resolve(data))
  .catch(err => {
    reject(err);
  });
});
