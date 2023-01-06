const blogModel = require("../model/blogModel");
const authorModel = require("../model/authorModel");
const moment = require("moment");

const blogCreate = async function (req, res) {
  try {
    let data = req.body;
    const { title, body, authorId, category } = req.body;
    let data2 = await authorModel.findById(authorId);
    if (!data2) {
      res.status(400).send({ status: false, msg: "authorId error" });
    }
    let savedData = await blogModel.create(data);
    return res.status(201).send({ status: true, msg: savedData });
  } catch (error) {
    res.status(500).send({ status: false });
  }
};

const getData = async function (req, res) {
  try {
    let blogData = req.query;

    let data3 = await blogModel.find({
      $and: [{ isDeleted: false }, { isPublished: true }, blogData],
    });
    if (data3.length>=1) {
      res.status(200).send({ msg: data3 });
    } else {
      res.status(404).send({ msg: "not correct data" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// / Create a blog document from request body. Get authorId in request body only.
// - Make sure the authorId is a valid authorId by checking the author exist in the authors collection.
// - Return HTTP status 201 on a succesful blog creation. Also return the blog document. The response should be a JSON object like [this](#successful-response-structure)
// - Create atleast 5 blogs for each author

// - Return HTTP status 400 for an invalid request with a response body like [this](#error-response-structure)

// get// Returns all blogs in the collection that aren't deleted and are published
// Return the HTTP status 200 if any documents are found. The response structure should be like [this](#successful-response-structure)
// - If no documents are found then return an HTTP status 404 with a response like [this](#error-response-structure)
// - Filter blogs list by applying filters. Query param can have any combination of below filters.
//   - By author Id
//   - By category
//   - List of blogs that have a specific tag
//   - List of blogs that have a specific subcategory
// example of a query url: blogs?filtername=filtervalue&f2=fv2

// PUT /blogs/:blogId
// - Updates a blog by changing the its title, body, adding tags, adding a subcategory. (Assuming tag and subcategory received in body is need to be added)
// - Updates a blog by changing its publish status i.e. adds publishedAt date and set published to true
// - Check if the blogId exists (must have isDeleted false). If it doesn't, return an HTTP status 404 with a response body like [this](#error-response-structure)
// - Return an HTTP status 200 if updated successfully with a body like [this](#successful-response-structure)
// - Also make sure in the response you return the updated blog document.

const updateData = async function (req, res) {
  try {
    let upd = req.body;
    let { title, body, tags, subcategory } = upd;
    let time = moment().format();
    let data5 = req.params.blogId;
    let update = await blogModel.findByIdAndUpdate(
      { _id: data5 },
      {
        $set: {
          title: title,
          body: body,
          isPublished: true,
          publishedAt: time,
        },
        $push: { tags: tags, subcategory: subcategory },
      },
      { new: true }
    );
    if (update) {
      res.status(201).send({ msg: update });
    } else {
      res.status(400).send({ status: false, msg: "blogId not correct" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// DELETE /blogs/:blogId
// - Check if the blogId exists( and is not deleted). If it does, mark it deleted and return an HTTP status 200 without any response body.
// - If the blog document doesn't exist then return an HTTP status of 404 with a body like [this](#error-response-structure)

const deleteData = async function (req, res) {
  try {
    let data5 = req.params.blogId;
    const blogDelete = await blogModel.findByIdAndUpdate(
      { _id: data5 },
      { $set: { isDeleted: true } },
      { new: true }
    );
    if (!blogDelete) {
      res.status(404).send({ msg: "error-response-structure" }); //
    } else {
      res.status(200).send({ msg: blogDelete });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// DELETE /blogs?queryParams
// - Delete blog documents by category, authorid, tag name, subcategory name, unpublished
// - If the blog document doesn't exist then return an HTTP status of 404 with a body like [this](#error-response-structure)

const deleteData1 = async function (req, res) {
  try {
    let data6 = req.query;
    let time = moment().format();

    const blog1Delete = await blogModel.findOneAndUpdate(
      { data6 },
      { $set: { isDeleted: true, deletedAt: time } },
      { new: true }
    );
    if (blog1Delete) {
      res.status(201).send({ msg: blog1Delete });
    } else {
      res.status(404).send({ msg: "error-response-structure" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports.blogCreate = blogCreate;
module.exports.getData = getData;
module.exports.updateData = updateData;
module.exports.deleteData = deleteData;
module.exports.deleteData1 = deleteData1;
