import Mock from "mockjs";
import articleAPI from "./article"; //提供article的数据

Mock.mock(/\/article\/list/, "get", articleAPI.getList);

export default Mock;
