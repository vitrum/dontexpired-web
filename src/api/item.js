  import AV from 'leancloud-storage';


  import throwError from './error.js';
  export default {
    getCurrUser() {
      return AV.User.current();
    },
    logOut() {
      return AV.User.logOut();
    },
    getItemList() {
      return new AV.Query('TestObject').find().catch(throwError);
    },
    /*
    * 新增数据
    * @param {String} cls 存储class名称
    * @param {Object} data 存储数据
    */
    addItem(data) {
      let ObjCls = AV.Object.extend('TestObject');
      let obj = new ObjCls();
      let key;
      for (key in data) {
        // if (data.hasOwnProperty(key)) {
          obj.set(key, data[key]);
        // }
      }
      // 添加
      return obj
        .save()
        .then(data => {
          console.log('TestObject' + '已经创建', data);
        })
        .catch(throwError);
    },


  }