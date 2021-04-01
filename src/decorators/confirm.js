import { Dialog } from "vant";

/**
 * 确认提示框装饰器
 * @param {*} message 提示信息
 * @param {*} title 标题
 * @param {*} cancelFn 取消回调函数
 */
export default function confirm(message, title = "提示", cancelFn = () => {}) {
  return function(target, name, descriptor) {
    const originFn = descriptor.value;
    descriptor.value = async function(...rest) {
      try {
        await Dialog.confirm({
          message,
          title: title
        });
        originFn.apply(this, rest);
      } catch (error) {
        cancelFn && cancelFn(error);
      }
    };
  };
}