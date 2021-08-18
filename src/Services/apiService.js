const KEY = "21935547-b3d05227bb87eef1eed42c097";
const BASE_URL =
  "https://pixabay.com/api/?image_type=photo&orientation=horizontal&";

const perPage = 12;

export default function PicturesApiService(page, searchQuery) {
  return fetch(
    `${BASE_URL}q=${searchQuery}&page=${page}&per_page=${perPage}&key=${KEY}`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
}
