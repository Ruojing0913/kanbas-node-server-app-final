import courseModel from "../models/courseModel.js";

export const createCourse = async (course) => {
    try {
        const cid = mongoose.Types.ObjectId().toString();
        course.cid = cid;
        return await courseModel.create(course);
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const editCourse = async (courseId, course) => {
    try {
        return await courseModel.updateOne({ _id: courseId }, { $set: course });
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const enrollCourse = async (courseId, userId) => {
    try {
        return await courseModel.updateOne({ _id: courseId }, { $push: { enrolledStudents: userId } });
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const deleteCourse = async (courseId) => {
    try {
        return await courseModel.deleteOne({ _id: courseId });
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const findAllCourses = async () => {
    try {
        return await courseModel.find();
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const findCourseById = async (courseId) => {
    try {
        return await courseModel.findById(courseId);
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const findCourseByCreator = async (userId) => {
    try {
        return await courseModel.find({ createdBy: userId });
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const findCourseByStudent = async (userId) => {
    try {
        return await courseModel.find({ enrolledStudents: userId });
    } catch (error) {
        console.log(error);
        return null;
    }
};