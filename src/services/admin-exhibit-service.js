const { Exhibit, Category } = require("../db");
const pagination = require("../utils/pagination");

async function addExhibit(newExhibit) {
  if (!newExhibit) throw new Error("상품 추가를 위한 데이터가 필요합니다!");

  const exhibit = await Exhibit.create(newExhibit);
  return exhibit;
}

async function searchExhibit(page = 1, perPage = 10) {
  const filter = {};
  const select = "author image exhibitName startDate endDate category";
  const sort = { startDate: -1 };
  const populate = "category";

  const result = await pagination(
    page,
    perPage,
    Exhibit,
    filter,
    select,
    sort,
    populate
  );

  return result;
}

async function searchById(exhibitId) {
  const exhibit = await Exhibit.findOne({ _id: exhibitId })
    .select("author image exhibitName startDate endDate category")
    .populate("category", "category"); // 전시의 카테고리 이름 가져오기

  return exhibit;
}

async function updateExhibit(exhibitId, content) {
  if (!exhibitId) throw Error("업데이트에 필요한 PRODUCT ID가 없습니다");

  const result = await Exhibit.updateOne({ _id: exhibitId }, content);

  if (!result) throw new Error("제품을 찾지 못했습니다.");

  return result;
}

async function deleteExhibit(exhibitId) {
  const result = await Exhibit.deleteOne({ _id: exhibitId });

  if (!exhibitId) throw new Error("일치되는 Id가 없습니다.");
  return result;
}

module.exports = {
  addExhibit,
  searchExhibit,
  searchById,
  updateExhibit,
  deleteExhibit,
};
