import { FETCH_LESSON_BY_COURSE_SECTION } from "./type";
import * as config from "../../config";
import authAxios from "../../helpers/AuthHelper";

export const fetchLessonByCourseSection = (courseId, sectionId) => (dispatch) => {
  authAxios
    .get(config.LESSON_URL, { params: { courseId: courseId, sectionId: sectionId } })
    .then((response) => {
      let httpResponse = response.data;
      dispatch({
        type: FETCH_LESSON_BY_COURSE_SECTION,
        payload: httpResponse.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
